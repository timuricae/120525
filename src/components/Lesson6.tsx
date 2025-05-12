import { useState } from "react";
import styles from "./Lesson6.module.css";
import { FlipCardSlider } from "../components/FlipCardSlider";
import linux from "../assets/linux.png";
import moodle from "../assets/moodle.png";

const cards = [
  {
    frontImage: linux,
    backText: <div>
      <h2 style={{ fontFamily: 'Roboto Slab', fontWeight: 'bold', fontSize: '24px' }}>
        Операционная система Linux:
      </h2>
      <span>Linux сыграл значительную роль в процессе цифровизации общества благодаря своей открытости, гибкости и доступности:</span>
      <ol style={{ fontFamily: 'PT Serif', fontWeight: 'normal', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
          Открытый исходный код
          Любой может изучать, изменять и распространять код Linux, что способствует инновациям и сотрудничеству на мировом уровне.
        </li>
        <li>
          Широкое распространение
          Linux популярен среди серверов, рабочих станций и мобильных устройств, ускоряя цифровизацию разных сфер жизни общества.
        </li>
        <li>
          Облачные технологии
          Linux лежит в основе большинства облачных платформ, таких как AWS, Google Cloud и Azure, обеспечивая хранение данных и работу приложений в облаке.
        </li>
        <li>
          Интернет вещей (IoT)
          Linux применяется в IoT-устройствах, автоматизируя повседневную жизнь и промышленность благодаря способности работать на маломощной технике.
        </li>
      </ol>
    </div>

  },
  {
    frontImage: moodle,
    backText: <div>
      <h2 style={{ fontFamily: 'Roboto Slab', fontWeight: 'bold', fontSize: '24px' }}>
      LMS Moodle:
      </h2>
      <span>LMS Moodle — это система управления обучением (Learning Management System), разработанная для поддержки дистанционного образования. Ее влияние на цифровизацию общества заключается в следующем:
      </span>
      <ol style={{ fontFamily: 'PT Serif', fontWeight: 'normal', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
        Создание цифрового контента
        Moodle стимулирует разработку и распространение курсов, тестов и учебных материалов, развивая цифровую инфраструктуру образования.
        </li>
        <li>
        Развитие цифровых компетенций
        Платформа помогает повышать уровень цифровой грамотности у всех участников образовательного процесса.
        </li>
        <li>
        Международный обмен опытом
         Поддержка множества языков и открытая архитектура Moodle способствуют глобальному сотрудничеству и обмену знаниями.
        </li>
        <li>
        Международный обмен опытом
         Поддержка множества языков и открытая архитектура Moodle способствуют глобальному сотрудничеству и обмену знаниями.
        </li>
      </ol>
    </div>

  },
];

const Lesson6: React.FC = () => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.callToAction}>
        Поверните карточки, чтобы узнать больше об известных примерах цифровизации общества
      </div>

      <div className={styles.card}>
        <FlipCardSlider cards={cards}
        />
      </div>

     
    
    </div>
  );
};

export default Lesson6;
