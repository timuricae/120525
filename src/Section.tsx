import styles from './Section.module.css';
import { useNavigate, useLocation, NavLink, Outlet } from 'react-router-dom';
import courseData, { SectionData } from './courseData.tsx';
import { useProgressContext } from './ProgressContext';
import { useEffect } from 'react';

const Section: React.FC = () => {



  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split('/');
  const sectionId = pathParts[2];
  const lessonId = parseInt(pathParts[4]);


  const { getSectionProgress } = useProgressContext();
  const sectionIdNum = parseInt(sectionId);

  const { completed, total } = getSectionProgress(sectionIdNum);
  const progressPercent = total === 0 ? 0 : Math.floor((completed / total) * 100);

  useEffect(() => {
    if (!sectionId || isNaN(lessonId)) {
      navigate('/');
    }
  }, [sectionId, lessonId, navigate]);

  const index = courseData.findIndex((s) => s.id === parseInt(sectionId));
  const currentSection = courseData[index];
  const prevSection = courseData[index - 1] ?? null;
  const nextSection = courseData[index + 1] ?? null;

  if (!currentSection) {
    return <p>Раздел не найден.</p>;
  }

  const currentLesson = currentSection.lessons.find((l) => l.id === lessonId);

  return (
    <>
      <header className={styles.header}>
        <span>{currentSection.title}</span>
        <div className={styles.header_text}>
          <span>Закрыть</span>
          <button onClick={() => navigate("/")}>x</button>
        </div>
      </header>

      <main className={styles.main}>
        <nav className={styles.main_nav}>
          <ul className={styles.main_navList}>
            <li className={styles.firstItem}>
              <div className={styles.item_text}>
                <span>{currentSection.title}</span>
              </div>
              <div className={styles.progress}>
                <span className={styles.progressText}>Раздел выполнен на {Math.round(completed)} %</span>
                <div className={styles.progressLine}>
                  <div style={{ width: `${completed}%` }}></div>
                </div>
              </div>

            </li>

            {currentSection.lessons.map((lesson) => (
              <NavLink
                key={lesson.id}
                to={`/section/${sectionId}/lesson/${lesson.id}`}
                className={({ isActive }) =>
                  isActive ? `${styles.secondNav} ${styles.active}` : styles.secondNav
                }
              >
                <li className={styles.secondItem}>
                  <div className={styles.item_text}>
                    {lesson.title}
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className={styles.main_content}>
          <div className={styles.main_header}>
            <div className={styles.main_header_title}>
              <span>Урок {lessonId} из {currentSection.numberOfLessons}</span>
              <h1>{currentLesson?.title ?? 'Урок не найден'}</h1>
            </div>
          </div>

          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_prev}>
          <button
            onClick={() => prevSection && navigate(`/section/${prevSection.id}/lesson/1`)}
            disabled={!prevSection}
            className={!prevSection ? styles.disabledButton : ''}
          >
            Пред. раздел
          </button>
          <span>{prevSection ? prevSection.title : 'Это первый раздел'}</span>
        </div>
        <div className={styles.footer_next}>
          <span>{nextSection ? nextSection.title : 'Это последний раздел'}</span>
          <button
            onClick={() => nextSection && navigate(`/section/${nextSection.id}/lesson/1`)}
            disabled={!nextSection}
            className={!nextSection ? styles.disabledButton : ''}
          >
            След. раздел
          </button>
        </div>
      </footer>
    </>
  );
};

export default Section;
