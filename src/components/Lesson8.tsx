import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ImageSlider from "../components/ImageSlider";

import styles from "./Lesson8.module.css";
import sync from "../assets/sync1.svg";

import arche from "../assets/interdisciplinary/arche.png";
import anthro from "../assets/interdisciplinary/anthro.png";
import histo from "../assets/interdisciplinary/histo.png";
import ped from "../assets/interdisciplinary/ped.png";

import archeEx1 from "../assets/interdisciplinary/archeEx1.png";
import archeEx2 from "../assets/interdisciplinary/archeEx2.png";

import anthroEx1 from "../assets/interdisciplinary/humanGenome.png";
import anthroEx2 from "../assets/interdisciplinary/socialM.png";

import histoEx1 from "../assets/interdisciplinary/histoEx1.png";
import histoEx2 from "../assets/interdisciplinary/histoEx2.png";

import pedEx1 from "../assets/interdisciplinary/artefact.png";
import pedEx2 from "../assets/interdisciplinary/pedEx2.png";

type SliderItem = {
  src: string;
  caption: string | JSX.Element;
};

type Card = {
  frontImage: string;
  backText: ReactNode;
  sliderItems: SliderItem[];
};

const cards: Card[] = [
  {
    frontImage: arche,
    backText: <div>
      <h2 style={{ fontFamily: 'Roboto Slab', fontWeight: 'bold', fontSize: '24px' }}>
        Цифровая археология:
      </h2>
      <ul style={{ fontFamily: 'PT Serif', fontWeight: 'normal', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
          Использование цифровых технологий для археологических исследований, включая цифровую фотографию,
          3D-реконструкции, виртуальную реальность и геоинформационные системы (ГИС).
        </li>
        <li>
          Применение компьютерных аналитических методов для анализа археологических данных.
        </li>
        <li>
          Организация цифровых архивов для хранения и предоставления доступа к данным археологических исследований.
        </li>
      </ul>
    </div>
    ,
    sliderItems: [
      { src: archeEx1, caption: "Полевое исследование с использованием цифровых технологий" },
      { src: archeEx2, caption: "ГИС-карта раскопок" },
    ],
  },
  {
    frontImage: anthro,
    backText: <div>
      <h2 style={{ fontFamily: 'Roboto Slab', fontWeight: 'bold', fontSize: '24px' }}>
        Цифровая антропология:
      </h2>
      <ul style={{ fontFamily: 'PT Serif', fontWeight: 'normal', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
          Изучение взаимодействия человека и цифровых технологий, включая использование их как инструмента в гуманитарных исследованиях.
        </li>
        <li>
          Уточнение представлений о человеке в связи с распространением технологий, изучение сообществ, ориентированных на технологии, и оптимизация использования цифровых устройств.
        </li>
        <li>
          Использование технологий как инструментов в преподавании и исследованиях, а также изучение цифровых технологий как форм материальной культуры.
        </li>
      </ul>
    </div>
    ,
    sliderItems: [
      {
        src: anthroEx1, caption: <div>
          <p>
            <a href="https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genome-project" target="_blank" rel="noopener noreferrer">
              Проект «Human Genome Project»
            </a> — международное научное исследование, целью которого было
            расшифровывание и картирование генома человека.
          </p>
          <p>
            Проект исследует человеческое общество через призму генетических различий и взаимосвязей.
          </p>
        </div>
      },
      { src: anthroEx2, caption: "Влияние социальных сетей на социальные практики" },
    ],
  },
  {
    frontImage: histo,
    backText: <div>
      <h2 style={{ fontFamily: 'Roboto Slab', fontWeight: 'bold', fontSize: '24px' }}>
        Цифровая история:
      </h2>
      <ul style={{ fontFamily: 'PT Serif', fontWeight: 'normal', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
          Изучение возможностей использования компьютерных технологий и цифровых медиа в исторических исследованиях и образовании.
        </li>
        <li>
          Предоставление интернет-пользователям доступа к цифровым архивам, интерактивным картам, хроникам событий и визуализации данных.
        </li>
        <li>
          Создание новых исследовательских инструментов для историков, таких как анализ больших данных, 3D-моделирование и интеллектуальный анализ данных.
        </li>
      </ul>
    </div>
    ,
    sliderItems: [
      { src: histoEx1, caption: "Изучение истории через виртуальную реальность" },
      { src: histoEx2, caption: "Использование анализ данных для перевода старинных документов" },
    ],
  },
  {
    frontImage: ped,
    backText: <div>
      <h2 style={{ fontFamily: 'Roboto Slab', fontWeight: 'bold', fontSize: '24px' }}>
        Педагогика цифрового общества:
      </h2>
      <ul style={{ fontFamily: 'PT Serif', fontWeight: 'normal', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
          Рассмотрение электронного обучения в контексте цифрового культурного наследия.
        </li>
        <li>
          Обучение в цифровом обществе и доступ к объектам цифрового культурного наследия.
        </li>
      </ul>
    </div>
    ,
    sliderItems: [
      {
        src: pedEx1, caption: <div>
          <p>
            «Артефакт» — инновационное приложение для цифрового хранения и анализа культурных объектов.
            Узнайте больше на <a href="https://ar.culture.ru/" target="_blank" rel="noopener noreferrer">официальном сайте</a>.
          </p>
        </div>
      },
      {
        src: pedEx2, caption: <div>
          <p>
            LMS (Learning Management System) — это система управления обучением, которая предоставляет
            цифровую платформу для организации и контроля учебного процесса.
          </p>

        </div>
      },
    ],
  },
];

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
};

const Lesson8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
      setSlideIndex(0);
      setDirection(1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
      setSlideIndex(0);
      setDirection(-1);
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <div className={styles.wrapper}>

      <section className={styles.content_info}>
        <div className={styles.content_text}>
        <h2>Что такое междисциплинарный подход к ЦКН?</h2>
      <span><span className={styles.content_text_bg}>Междисциплинарный подход к ЦКН</span> подразумевает интеграцию знаний и методов из различных областей науки и практики для решения комплексных задач, связанных с цифровыми объектами. Это может включать в себя:</span>
     
         
        </div>
      </section>

      <div className={styles.callToAction}>Поверните карточку, чтобы увидеть детали и изображения</div>
     

      <div className={styles.card}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className={styles.motionCard}
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <motion.div
              className={`${styles.flip} ${isFlipped ? styles.flipped : ""}`}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.front}>
                <img src={currentCard.frontImage} alt="Front" />
                <img src={sync} className={styles.syncIcon} alt="" />
              </div>
              <div className={styles.back}>
                <div className={styles.cardBackContent}>
                  {currentCard.backText}

                  <ImageSlider items={currentCard.sliderItems} />

                </div>
                <img src={sync} className={styles.syncIconMirrored} alt="" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.btns}>
        <button onClick={prevCard} className={styles.btn} disabled={currentIndex === 0}>
          ←
        </button>
        <span className={styles.counter}>{currentIndex + 1} из {cards.length}</span>
        <button onClick={nextCard} className={styles.btn} disabled={currentIndex === cards.length - 1}>
          →
        </button>
      </div>
    </div>
  );
};

export default Lesson8;
