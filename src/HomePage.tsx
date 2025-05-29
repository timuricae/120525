import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import courseData from './courseData';
import styles from './HomePage.module.css';
import BadgesCollectionModal from './badges/BadgesCollectionModal';
import { getBadges } from './badges/badgesUtils';
import { Badge } from './badges/badgesData';
import React, { useState } from 'react';
import { useProgressContext } from './ProgressContext';

const colorThemes = [
    '#A1C6EA', '#A8D5BA', '#D8C1C1', '#B1A7D4',
    '#D2E8D5', '#9FD6D2', '#F2B6B6', '#D2E8D5'
];

const icons = [
    '🌍', '📚', '🕰️', '🔬', '🔄', '🏛️',
    '🧠', '📡', '🎨', '🚀', '🧩', '💾'
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -3,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const getSizeClass = (lessonCount: number): string => {
    if (lessonCount === 1) return styles.xsmall;
    if (lessonCount === 2) return styles.small;
    if (lessonCount === 3) return styles.medium;
    if (lessonCount <= 5) return styles.large;
    return styles.xlarge;
};

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const badges: Badge[] = getBadges();
    const { getSectionProgress } = useProgressContext();

    return (
        <>
            <div className={styles.heroSection}>
                <h1 className={styles.heroTitle}>ЦИФРОВОЕ КУЛЬТУРНОЕ НАСЛЕДИЕ</h1>
                <p className={styles.heroSubtitle}>
                    Интерактивная мультимедийная книга на основе учебно-методического пособия Гаевской Е. Г., Борисова Н. В.
                </p>
                <p className={styles.heroGoal}>
                    Цель ресурса: ​обучить студентов основам теории ЦКН легким и иммерсивным способом
                </p>
            </div>

            <div className={styles.HomePageContainer}>
                <h1 className={styles.HomePageTitle}>Выберите раздел, чтобы начать:</h1>

                <button className={styles.badgeButton} onClick={() => setIsModalOpen(true)}>
                    🎖 Мои бейджи
                </button>

                <motion.ul
                    className={styles.BentoGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {courseData.map((section, i) => {
                        const lessonCount = section.lessons.length;
                        const color = colorThemes[i % colorThemes.length];
                        const icon = icons[i % icons.length];
                        const sizeClass = getSizeClass(lessonCount);

                        const { completed } = getSectionProgress(section.id);


                        const questionTotal = section.lessons.reduce((acc, lesson) => {
                            return acc + (lesson.interactions?.caseStudyQuestions || 0);
                        }, 0);

                        return (
                            <motion.li
                                key={section.id}
                                className={`${styles.BentoItem} ${sizeClass}`}
                                style={{ backgroundColor: color }}
                                variants={itemVariants}
                                custom={i}
                                whileHover={{ scale: 1.03, rotate: 1 }}
                            >
                                <NavLink to={`/section/${section.id}/lesson/1`} className={styles.Link}>
                                    <div className={styles.IconWithProgress}>
                                        <span className={styles.Icon}>{icon}</span>
                                        <div className={styles.ProgressWrapper}>
                                            <div className={styles.ProgressLabel}>
                                                Прогресс: {Math.round(completed)}%
                                            </div>
                                            <div className={styles.ProgressBarContainer}>
                                                <div
                                                    className={styles.ProgressBarFill}
                                                    style={{ width: `${Math.round(completed)}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className={styles.SectionTitle}>{section.title}</h2>
                                    <div className={styles.interactionStats}>
                                        ❓ Контрольных заданий: {questionTotal}
                                    </div>
                                    <div className={styles.BentoOverlay} />
                                    <p className={styles.Description}>{section.content}</p>
                                </NavLink>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>

            {isModalOpen && (
                <BadgesCollectionModal
                    badges={badges}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};

export default HomePage;
