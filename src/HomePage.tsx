import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import courseData from './courseData';
import styles from './HomePage.module.css';

const colorThemes = [
    '#A1C6EA', // светлый голубой (хороший контраст с черным)
    '#A8D5BA', // светлый зеленый
    '#D8C1C1', // мягкий розово-коричневый
    '#B1A7D4', // светлый лавандовый
    '#D2E8D5', // теплый желтый, но не яркий
    '#9FD6D2', // бледно-голубой с мятным оттенком
    '#F2B6B6', // пастельный розовый, сдержанный
    '#D2E8D5', // светлый оливковый
  ];
  
const icons = [
    '🌍', '📚', '🕰️', '🔬', '🔄', '🏛️', '🧠', '📡', '🎨', '🚀', '🧩', '💾'
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

const HomePage = () => {
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

                        const sizeClass = lessonCount >= 3 ? styles.large
                            : lessonCount === 2 ? styles.medium
                                : styles.small;

                        // Подсчёт всех интеракций в уроках раздела

                        let questionTotal = 0;

                        section.lessons.forEach(lesson => {
                            const interactions = lesson.interactions;
                            if (interactions) {

                                questionTotal += (interactions.caseStudyQuestions || 0);
                            }
                        });

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
                                    <span className={styles.Icon}>{icon}</span>
                                    <h2 className={styles.SectionTitle}>{section.title}</h2>
                                    <div className={styles.interactionStats}>
                                        ❓ Кейс-стади: {questionTotal}
                                    </div>
                                    <div className={styles.BentoOverlay} />
                                    <p className={styles.Description}>{section.content}</p>
                                </NavLink>

                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>
        </>
    );
};

export default HomePage;
