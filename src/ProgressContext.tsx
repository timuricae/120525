import React, { createContext, useContext, useEffect, useState } from 'react';
import courseData, { CourseData } from './courseData';

type LessonKey = `${number}-${number}`; // "sectionId-lessonId"

interface ProgressState {
  lessonProgress: Record<LessonKey, number>;
  updateLessonProgress: (sectionId: number, lessonId: number, increment: number) => void;
  getSectionProgress: (sectionId: number) => { completed: number; total: number };
  completedCaseStudyQuestions: Record<LessonKey, Set<string>>;
  markCaseStudyAsCompleted: (sectionId: number, lessonId: number, questionKey: string) => boolean;

}

const ProgressContext = createContext<ProgressState | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lessonProgress, setLessonProgress] = useState<Record<LessonKey, number>>(() => {
    const saved = localStorage.getItem('lessonProgress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('lessonProgress', JSON.stringify(lessonProgress));
  }, [lessonProgress]);

  const updateLessonProgress = (sectionId: number, lessonId: number, increment: number) => {
    const key: LessonKey = `${sectionId}-${lessonId}`;
    setLessonProgress((prev) => {
      const current = prev[key] || 0;
      const updated = Math.min(100, current + increment);
      return { ...prev, [key]: updated };
    });
  };

  const [completedCaseStudyQuestions, setCompletedCaseStudyQuestions] = useState<Record<LessonKey, Set<string>>>(() => {
    const saved = localStorage.getItem("completedCaseStudyQuestions");
    if (saved) {
      const parsed: Record<string, string[]> = JSON.parse(saved);
      return Object.fromEntries(Object.entries(parsed).map(([key, val]) => [key, new Set(val)]));
    }
    return {};
  });

  useEffect(() => {
    const serialized = Object.fromEntries(
      Object.entries(completedCaseStudyQuestions).map(([k, v]) => [k, Array.from(v)])
    );
    localStorage.setItem("completedCaseStudyQuestions", JSON.stringify(serialized));
  }, [completedCaseStudyQuestions]);

  const markCaseStudyAsCompleted = (sectionId: number, lessonId: number, questionKey: string): boolean => {
    const key: LessonKey = `${sectionId}-${lessonId}`;
    const existing = completedCaseStudyQuestions[key] || new Set<string>();
    if (existing.has(questionKey)) {
      return false;
    }
    const updated = new Set(existing);
    updated.add(questionKey);
    setCompletedCaseStudyQuestions(prev => ({ ...prev, [key]: updated }));
    return true;
  };


  const calculateLessonProgress = (lesson: CourseData[0]['lessons'][0], completedInteractions: any) => {
    const { interactions } = lesson;
    let totalWeight = 0;
    let completedWeight = 0;

    if (interactions?.caseStudyQuestions) {
      totalWeight += interactions.caseStudyQuestions;
      const answered = completedInteractions['caseStudyQuestions'] || [];
      completedWeight += Math.min(answered.length, interactions.caseStudyQuestions);
    }

    if (interactions?.flipCards) {
      totalWeight += interactions.flipCards;
      if (completedInteractions['flipCards']) completedWeight += interactions.flipCards;
    }

    if (interactions?.sliders) {
      totalWeight += interactions.sliders;
      if (completedInteractions['sliders']) completedWeight += interactions.sliders;
    }

    if (interactions?.mapButtons) {
      totalWeight += interactions.mapButtons;
      const mapped = completedInteractions['mapButtons'] || [];
      completedWeight += Math.min(mapped.length, interactions.mapButtons);
    }

    return { totalWeight, completedWeight };
  };

  const getSectionProgress = (sectionId: number): { completed: number; total: number } => {
    const section = courseData.find(s => s.id === sectionId);
    if (!section) return { completed: 0, total: 0 };

    const totalInteractions = section.lessons.reduce((total, lesson) => {
      const interactions = lesson.interactions || {};
      return total + Object.values(interactions).reduce((sum, val) => sum + val, 0);
    }, 0);

    const completedInteractions = section.lessons.reduce((total, lesson) => {
      const key: LessonKey = `${sectionId}-${lesson.id}`;
      return total + (lessonProgress[key] || 0);
    }, 0);

    return { completed: completedInteractions, total: totalInteractions };
  };


  return (
    <ProgressContext.Provider value={{
      lessonProgress,
      updateLessonProgress,
      getSectionProgress,
      completedCaseStudyQuestions,
      markCaseStudyAsCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgressContext = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgressContext must be used within ProgressProvider');
  return ctx;
};