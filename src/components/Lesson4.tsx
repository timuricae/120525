import { useState } from 'react';
import styles from '../components/Lesson4.module.css';

const Lesson4 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // чтобы не переходить по ссылке сразу
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={styles.journal_content}>
            <p>Уважаемые читатели!</p>
            <p>
                Обращаем ваше внимание на отечественный электронный мультимедийный журнал
                <span> “Культура&amp;технологии” </span> или <span> “CAT”</span>, доступный по
                <a href="http://cat.ifmo.ru/ru" onClick={handleOpenModal}> ссылке</a>.
                В этом журнале вы можете ознакомиться со статьями по проблематике цифрового культурного наследия.
            </p>
            <p>
                “Журнал призван распространять актуальные результаты проектов, теоретических и прикладных исследований и разработок,
                проводимых как в России, так и за рубежом, нацеленных на эффективное взаимодействие культуры, искусства и технологий.”
            </p>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src="/journal-preview.jpg" // загрузи обложку в public/ или укажи URL
                            alt="Культура&технологии"
                            className={styles.modalImage}
                        />
                        <p className={styles.modalText}>
                            Электронный журнал о взаимодействии культуры, искусства и технологий в цифровую эпоху.
                        </p>
                        <a
                            href="http://cat.ifmo.ru/ru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.modalButton}
                        >
                            Перейти на сайт
                        </a>
                        <button className={styles.modalClose} onClick={handleCloseModal}>
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Lesson4;


