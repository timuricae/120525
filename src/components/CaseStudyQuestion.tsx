import React, { useState } from "react";
import styles from "../components/CaseStudyQuestion.module.css";
import { ReactNode } from "react";
import confetti from "canvas-confetti";

import { useProgressContext } from "../ProgressContext";
import courseData from "../courseData.tsx";

interface CaseStudyQuestionProps {
    question: ReactNode;
    image?: string;
    options: string[];
    correctAnswer: string;
    correctExplanation: ReactNode;
    incorrectExplanation: ReactNode;
    onSuccess?: () => void;
    sectionId: number;
    lessonId: number;
    questionId: string;
}

const CaseStudyQuestion: React.FC<CaseStudyQuestionProps> = ({
    question,
    image,
    options,
    correctAnswer,
    correctExplanation,
    incorrectExplanation,
    onSuccess,
    sectionId,
    lessonId,
    questionId
}) => {
    const { updateLessonProgress, markCaseStudyAsCompleted } = useProgressContext();
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const playSuccessSound = () => {
        const audio = new Audio("/sounds/success.mp3");
        audio.play().catch(() => {});
    };

    const runConfetti = () => {
        const defaults = {
            origin: { y: 0.7 },
            spread: 80,
            ticks: 500,
            gravity: 0.9,
            decay: 0.95,
            startVelocity: 45,
        };

        confetti({
            ...defaults,
            particleCount: 100,
            colors: ["#D4AF37", "#FFD700", "#FFEC8B", "#FFFACD"],
            shapes: ["circle", "square"],
            scalar: 1.2,
        });

        confetti({
            ...defaults,
            particleCount: 80,
            angle: 120,
            origin: { x: 0, y: 0.6 },
        });

        confetti({
            ...defaults,
            particleCount: 80,
            angle: 60,
            origin: { x: 1, y: 0.6 },
        });

        playSuccessSound();
    };

    const handleSubmit = () => {
        if (selectedAnswer !== null) {
            setIsAnswered(true);

            if (selectedAnswer === correctAnswer) {
                const isNew = markCaseStudyAsCompleted(sectionId, lessonId, questionId);
                if (isNew) {
                    if (onSuccess) onSuccess();
                    runConfetti();

                    const section = courseData.find(s => s.id === sectionId);
                    const lesson = section?.lessons.find(l => l.id === lessonId);
                    const totalCaseQuestions = lesson?.interactions?.caseStudyQuestions || 1;
                    const increment = 100 / totalCaseQuestions;

                    updateLessonProgress(sectionId, lessonId, increment);
                }
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>
                <div className={styles.task_text}>
                    <b>{question}</b>
                </div>
                {image && (
                    <div className={styles.task_imageWrapper}>
                        <img
                            src={image}
                            alt="Case study"
                            style={{
                                width: "350px",
                                height: "350px",
                                objectFit: "cover",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                                margin: "0 auto",
                                display: "block",
                            }}
                        />
                    </div>
                )}
            </div>

            <div className={styles.question}>
                <div className={styles.question_text}>
                    <div className={styles.option}>
                        {options.map((option, i) => (
                            <label
                                key={i}
                                className={styles.optionList}
                                style={{ display: "flex", alignItems: "flex-start" }}
                            >
                                <input
                                    type="radio"
                                    name={`answer-${question}`}
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={() => setSelectedAnswer(option)}
                                    disabled={isAnswered}
                                    className={styles.radioButton}
                                />
                                <span
                                    className={styles.optionText}
                                    style={{ wordWrap: "break-word", whiteSpace: "normal" }}
                                >
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        onClick={handleSubmit}
                        disabled={isAnswered || selectedAnswer === null}
                        className={`${styles.button} ${styles.submitButton} ${isAnswered ? styles.active : ""}`}
                    >
                        {isAnswered ? "Вы ответили" : "Ответить"}
                    </button>
                </div>
            </div>

            {isAnswered && (
                <div className={styles.answer}>
                    <div className={styles.result}>
                        <span>
                            {selectedAnswer === correctAnswer ? "✅ Правильно!" : "❌ Неправильно!"}
                        </span>
                        <div className={styles.explanation}>
                            {selectedAnswer === correctAnswer ? correctExplanation : incorrectExplanation}
                        </div>
                    </div>
                    <div className={styles.resetContainer}>
                        <button
                            className={`${styles.button} ${styles.resetButton}`}
                            onClick={() => {
                                setSelectedAnswer(null);
                                setIsAnswered(false);
                            }}
                        >
                            <svg
                                viewBox="0 0 21 21"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <g transform="matrix(0 1 1 0 2.5 2.5)">
                                    <path d="m3.99 1.08c-2.38 1.39-3.99 3.97-3.99 6.92 0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"></path>
                                    <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>
                                </g>
                            </svg>
                        </button>
                        <span className={styles.resetText}>Начать заново</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaseStudyQuestion;
