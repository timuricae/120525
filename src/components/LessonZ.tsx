import React, { useState } from "react";
import styles from "./LessonY.module.css";
import ImageSlider from "../components/ImageSlider";
import PreTask from "../components/PreTask";
import CaseStudyQuestion from "../components/CaseStudyQuestion";
import s1s1 from "../assets/Manzanar/s1s1.png";
import s1s2 from "../assets/Manzanar/s1s2.png";
import s1s3 from "../assets/Manzanar/s1s3.png";
import s1s4 from "../assets/Manzanar/s1s4.png";

import s2s1 from "../assets/Manzanar/s2s1.png";
import s2s2 from "../assets/Manzanar/s2s2.png";


const LessonZ: React.FC = () => {
    const [taskStarted, setTaskStarted] = useState(false);

    const sliderItems1 = [
        {
            src: s1s1,
            caption: "Комната американской мечты японцев: До войны.",
        },
        {
            src: s1s2,
            caption: "Комната американской мечты японцев: мечта разрушается интернированием.",
        },
        {
            src: s1s3,
            caption: "Сквозь окна бараков: архивные фотографии повседневной жизни в Манзанаре.",
        },
        {
            src: s1s4,
            caption: "Бараки населены призраками прошлого.",
        },
    ];

    const sliderItems2 = [
        {
            src: s2s1,
            caption: "Внутренние пейзажи: Вид из павильона на японский райский сад.",
        },
        {
            src: s2s2,
            caption: "Внутренние пейзажи: Сливовое дерево — символ стойкости и надежды.",
        },
    ];

    return (
        <div className={styles.lessonWrapper}>
            <div className={styles.content_info}>
            <h1>«За пределами Манзанара» - Тамико Тиль (2000)</h1>

            <span className={styles.content_text}>
                «За пределами Манзанара» — это масштабное, погружающее виртуальное произведение искусства, которое Тамико Тиль создала в 2000 году в сотрудничестве с иранско-американской художницей Зарой Хушманд.
                Тиль иллюстрирует американскую мечту, чтобы затем показать ее внезапное превращение в “кошмар”:
            </span>

            <ImageSlider items={sliderItems1} className={styles.slider} />

            <span className={styles.content_text}>
                Тиль создает контраст между внешними реалиями заключения и воображаемыми пространствами эскапизма
            </span>

            <ImageSlider items={sliderItems2} className={styles.slider} />

            <span className={styles.content_text}>
                Эта работа входит в постоянную коллекцию Музея искусств Сан-Хосе.
            </span>

            <div>
                <span className={styles.content_text}>Ознакомиться подробнее можно, обратившись на страницу проекта в ADA (Digital Art Archive): <br />
                <a href="https://digitalartarchive.at/database/work/2855/" target="_blank" rel="noopener noreferrer">
                    https://digitalartarchive.at/database/work/2855/
                </a>
                </span>
            </div>

            </div>

            <PreTask onStart={() => setTaskStarted(true)} text="Вам предстоить проанализировать, к какому варианту окончания жизненного цикла объекта ЦКН относится кейс. Когда будете готовы, нажмите 'Начать задание'"/>

            {taskStarted && (
                <CaseStudyQuestion
                 questionId="Z"
                sectionId={5}
                lessonId={3}
                    question="Какой подход к финальному этапу жизненного цикла ЦКН представлен в кейсе?"
                    options={[
                        "Музеефикация Николая Рериха",
                        "Утилизация Маршалла Маклюэна",
                    ]}
                    correctAnswer="Музеефикация Николая Рериха"
                    correctExplanation={
                        <>
                            <h2>Почему это музеефикация по Николаю Рериху?</h2>
                            <ol>
                                <li>
                               <b> Увековечение памяти предков</b>: Проект служит примером того, как цифровая среда помогает сохранять исторические свидетельства и передавать их новым поколениям. 
                                </li>
                                <li>
                                <b> Воспитание и обучение</b>: Зрители получают возможность глубже понять историческое значение проекта, что способствует развитию исторического сознания и культурной грамотности.
                                </li>
                                <li>
                                <b>  Долгосрочное сохранение ресурса</b>: Находясь на постоянной выставке Музея искусств Сан-Хосе, проект обеспечен сохранностью и доступностью на долгие годы вперед.
                                </li>
                                <li>
                                <b>Инновационные мультимедийные инструменты</b>: Применение виртуальной реальности (VR) помогает зрителям глубже погрузиться в атмосферу событий, пережить чувства и эмоции тех, кто оказался в лагерях.
                                </li>
                            </ol>
                        </>
                    }
                    incorrectExplanation={
                        <p>
                            Нет, ICQ стал значим не из-за игр, а благодаря влиянию на цифровую коммуникацию и культуру.
                        </p>
                    }
                />
            )}
        </div>
    );
}

export default LessonZ;
