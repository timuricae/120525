import { useEffect, useState } from 'react';
import { LessonInteractions, CourseData } from './courseData';
import { useProgressContext } from './ProgressContext';

export function useSectionProgress(sectionId: string, courseData: CourseData) {
  const { updateLessonProgress, getSectionProgress } = useProgressContext();

  const [progress, setProgress] = useState<{
    completed: number;
    total: number;
    percentage: number;
  }>({
    completed: 0,
    total: 0,
    percentage: 0,
  });

  const recalculateSectionProgress = () => {
    const { completed, total } = getSectionProgress(Number(sectionId));
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    setProgress({ completed, total, percentage });
  };

  useEffect(() => {
    recalculateSectionProgress();
  }, [sectionId, getSectionProgress]);

  const registerInteraction = (
    lessonId: number,
    interactionType: keyof LessonInteractions,
    index: number = 0
  ) => {
    const completedInteractions = JSON.parse(localStorage.getItem('completedInteractions') || '{}');
    if (!completedInteractions[lessonId]) {
      completedInteractions[lessonId] = {};
    }

    if (interactionType === 'caseStudyQuestions') {
      const existing = completedInteractions[lessonId][interactionType] || [];
      if (!existing.includes(index)) {
        completedInteractions[lessonId][interactionType] = [...existing, index];
      }
    } else if (interactionType === 'mapButtons') {
      const existing = completedInteractions[lessonId][interactionType] || [];
      if (!existing.includes(index)) {
        completedInteractions[lessonId][interactionType] = [...existing, index];
      }
    } else {
      completedInteractions[lessonId][interactionType] = true;
    }

    localStorage.setItem('completedInteractions', JSON.stringify(completedInteractions));

    const lesson = courseData
      .find((s) => s.id.toString() === sectionId)
      ?.lessons.find((l) => l.id === lessonId);

    if (!lesson) return;

    const { totalWeight, completedWeight } = calculateLessonProgress(lesson);
    updateLessonProgress(Number(sectionId), lessonId, completedWeight);

    recalculateSectionProgress();
  };

  const calculateLessonProgress = (lesson: CourseData[0]['lessons'][0]) => {
    const { interactions } = lesson;
    let totalWeight = 0;
    let completedWeight = 0;

    const completedInteractions = JSON.parse(localStorage.getItem('completedInteractions') || '{}');
    const completed = completedInteractions[lesson.id] || {};

    if (interactions?.caseStudyQuestions) {
      totalWeight += interactions.caseStudyQuestions;
      const answered = completed.caseStudyQuestions || [];
      completedWeight += Math.min(answered.length, interactions.caseStudyQuestions);
    }

    if (interactions?.flipCards) {
      totalWeight += interactions.flipCards;
      if (completed.flipCards) completedWeight += interactions.flipCards;
    }

    if (interactions?.sliders) {
      totalWeight += interactions.sliders;
      if (completed.sliders) completedWeight += interactions.sliders;
    }

    if (interactions?.mapButtons) {
      totalWeight += interactions.mapButtons;
      const mapped = completed.mapButtons || [];
      completedWeight += Math.min(mapped.length, interactions.mapButtons);
    }

    return { totalWeight, completedWeight };
  };

  return { progress, registerInteraction };
}
