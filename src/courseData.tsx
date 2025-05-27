import Lesson1 from './components/Lesson1.tsx';
import Lesson2 from './components/Lesson2.tsx';
import Lesson3 from './components/Lesson3.tsx';
import Lesson4 from './components/Lesson4.tsx';
import Lesson5 from './components/Lesson5.tsx';
import Lesson6 from './components/Lesson6.tsx';
import Lesson7 from './components/Lesson7.tsx';
import Lesson8 from './components/Lesson8.tsx'
import Lesson9 from './components/Lesson9.tsx'
import Lesson10 from './components/Lesson10.tsx'
import Lesson11 from './components/Lesson11.tsx'
import EMarket from './components/EMarket.tsx';
import FinalLesson from './components/FinalLesson.tsx';
import LessonY from './components/LessonY.tsx'
import LessonZ from './components/LessonZ.tsx'
import Sec3CaseStudies from './components/Sec3CaseStudies.tsx';
import Sec5CaseStudies from './components/Sec5CaseStudies.tsx';
import LessonAntopolskiy from './components/LessonAntopolskiy.tsx';
import PresCulture from './components/PresCulture.tsx';

import { ComponentType, ReactNode } from "react";

export interface LessonInteractions {
  mapButtons?: number;
  caseStudyQuestions?: number;
  flipCards?: number;
  quizQuestions?: number;
  sliders?: number;
  interactionBonus?: number;
  // можно расширять дальше при необходимости
}

export interface LessonData {
  id: number;
  title: string;
  component: ComponentType<any>;
  interactions?: LessonInteractions;
}

export interface SectionData {
  id: number;
  title: string;
  content: ReactNode;
  type: "section";
  lessons: LessonData[];
  numberOfLessons?: number; // добавляется динамически
}

export type CourseData = SectionData[];


export const courseData: CourseData = [
  {
    id: 1,
    title: 'Введение: Объекты Юнеско',
    content: <>
      <h2>Во введении вам предстоит:</h2>
      <ul>
        <li>Познакомиться с порталом «ЮНЕСКО» как базой знаний о цифровом культурном наследии (ЦКН).</li>
        <li>Изучить три объекта ЮНЕСКО — «Три Венеции». Понять их взаимосвязь и различия.</li>
      </ul>

    </>,
    type: 'section',
    lessons: [
      {
        id: 1,
        component: Lesson1,
        title: '3 Венеции: Введение',
      },
      {
        id: 2,
        component: Lesson2,
        title: '3 Венеции: Кейс-Стади',
        interactions: {
          caseStudyQuestions: 3,
        }
      },
    ],

  },
  {
    id: 2,
    title: 'Раздел 1. Цифровое культурное наследие: теоретические аспекты',
    content: <>
    <h2>В разделе 1 вам предстоит:</h2>
    <ul>
      <li>Изучить определение цифрового культурного наследия (ЦКН);</li>
      <li>Ознакомиться с различными видами ЦКН и понять их особенности;</li>
      <li>Познакомиться с российским журналом, посвящённым исследованию ЦКН.</li>
    </ul>

  </>,
    type: 'section',
    lessons: [
      {
        id: 1,
        component: Lesson3,
        title: 'Определение ЦКН',
        interactions: {
          caseStudyQuestions: 4,
        }
      },
      {
        id: 2,
        component: Lesson4,
        title: 'Журнал CAT',
      }

    ],

  },
  {
    id: 3,
    title: 'Раздел 2. История развития цифрового культурного наследия',
    content: <>
    <h2>В разделе 2 вам предстоит:</h2>
    <ul>
      <li>Рассмотреть исторические подходы к изучению ЦКН;</li>
      <li>Проанализировать конкретные примеры цифровизации общества.</li>
    </ul>

  </>,
    type: 'section',
    lessons: [
      {
        id: 1,
        component: Lesson5,
        title: 'Периоды равзития ЦКН',

      },
      {
        id: 2,
        component: Lesson6,
        title: 'Примеры цифровизации общества',

      },
      {
        id: 3,
        component: Lesson7,
        title: 'Кейс-стади',
        interactions: {
          caseStudyQuestions: 3,
        }
      }

    ],
  },
  {
    id: 4,
    title: 'Раздел 3. Цифровое культурное наследие в контексте междисциплинарного подхода',
    content: <>
    <h2>В разделе 3 вам предстоит:</h2>
    <ul>
      <li>Изучить междисциплинарные подходы к цифровому культурному наследию;</li>
      <li>Исследовать случаи цифровой археологии на примере карты Ближнего Востока;</li>
      <li>Попробовать применить изученные подходы к гипотетическим ситуациям сохранения культурного наследия.</li>
    </ul>

  </>,
    type: 'section',
    lessons: [
      {
        id: 1,
        component: Lesson8,
        title: 'Междисциплинарные подходы к ЦКН',

      },
      {
        id: 2,
        component: LessonAntopolskiy,
        title: 'Монография А. Б. Антопольского',

      },
      {
        id: 3,
        component: Lesson9,
        title: 'Кейсы цифровой археологии',

      },
      {
        id: 4,
        component: Sec3CaseStudies,
        title: 'Кейс-стади междисциплинарного подхода',
        interactions: {
          caseStudyQuestions: 3,
        }

      },

    ],
  },
  {
    id: 5,
    title: 'Раздел 4. Жизненный цикл объекта цифрового наследия',
    content: <>
    <h2>В разделе 4 вам предстоит:</h2>
    <ul>
      <li>Изучить жизненный цикл объектов ЦКН;</li>
      <li>Узнать разные подходы к завершению жизненного цикла объектов ЦКН;</li>
      <li>Применить полученные знания к актуальным примерам из области ЦКН.</li>
    </ul>

  </>,
    type: 'section',
    lessons: [
      {
        id: 1,
        component: Lesson10,
        title: 'Жизненный цикл объекта цифрового наследия',
      },
      {
        id: 2,
        component: LessonY,
        title: 'Кейс финального этапа цикла №1',
        interactions: {
          caseStudyQuestions: 2,
        }

      },
      {
        id: 3,
        component: LessonZ,
        title: 'Кейс финального этапа цикла №2',
        interactions: {
          caseStudyQuestions: 2,
        }

      },


    ],
  },
  {
    id: 6,
    title: 'Раздел 5. Организация доступа к ЦКН',
    content: <>
    <h2>В разделе 5 вам предстоит:</h2>
    <ul>
      <li>Изучить классификацию инициатив, связанных с центрами компетенций наследия;</li>
      <li>Ознакомиться с рядом российских инициатив в данной сфере.</li>
   
    </ul>

  </>,
    type: 'section',
    lessons: [
      {
        id: 1,
        component: Lesson11,
        title: 'Классификация инициатив',
        // interactions: {
        //   mapButtons: 2, 
        //   mapButtins: 3
        // }

      },
      {
        id: 2,
        component: EMarket,
        title: 'Российские нициативы',

      },
      {
        id: 3,
        component: PresCulture,
        title: 'Проект "Сохраненная культура" ', 
      },
      {
        id: 4,
        component: Sec5CaseStudies,
        title: 'Кейс-стади по инициатив в сфере ЦКН', interactions: {
          caseStudyQuestions: 3,
        }
      },

    ],
  },
  {
    id: 7,
    title: 'Заключение',
    content: <>
    <h2>Итоговый тест:</h2>
   <span>Для закрепления полученных знаний ответьте на серию вопросов по всему курсу и получите сертификат об окончании программы.</span>

  </>,
    type: 'section',
    lessons: [
      {
        id: 1,
        component: FinalLesson,
        title: 'Итоговый тест',
        interactions: {
          caseStudyQuestions: 11,
        }
      },

    ],
  },
  // Аналогичные объекты для остальных разделов
].map(section => ({
  ...section,
  numberOfLessons: section.lessons.length
})) as CourseData;
;

export default courseData;




