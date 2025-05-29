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
      <ol style={{ fontFamily: 'PT Serif', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
          <div>
            <strong>Открытый исходный код</strong>
            <div style={{ marginTop: '4px' }}>
              Любой может изучать, изменять и распространять код Linux, что способствует инновациям и сотрудничеству на мировом уровне.
            </div>
          </div>
        </li>
        <li>
          <div>
            <strong>Широкое распространение</strong>
            <div style={{ marginTop: '4px' }}>
              Linux популярен среди серверов, рабочих станций и мобильных устройств, ускоряя цифровизацию разных сфер жизни общества.
            </div>
          </div>
        </li>
        <li>
          <div>
            <strong>Облачные технологии</strong>
            <div style={{ marginTop: '4px' }}>
              Linux лежит в основе большинства облачных платформ, таких как AWS, Google Cloud и Azure, обеспечивая хранение данных и работу приложений в облаке.
            </div>
          </div>
        </li>
        <li>
          <div>
            <strong>Интернет вещей (IoT)</strong>
            <div style={{ marginTop: '4px' }}>
              Linux применяется в IoT-устройствах, автоматизируя повседневную жизнь и промышленность благодаря способности работать на маломощной технике.
            </div>
          </div>
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
      <ol style={{ fontFamily: 'PT Serif', fontSize: '20px', paddingLeft: '20px', marginTop: '12px' }}>
        <li>
          <div>
            <strong>Создание цифрового контента</strong>
            <div style={{ marginTop: '4px' }}>
              Moodle стимулирует разработку и распространение курсов, тестов и учебных материалов, развивая цифровую инфраструктуру образования.
            </div>
          </div>
        </li>
        <li>
          <div>
            <strong>Развитие цифровых компетенций</strong>
            <div style={{ marginTop: '4px' }}>
              Платформа помогает повышать уровень цифровой грамотности у всех участников образовательного процесса.
            </div>
          </div>
        </li>
        <li>
          <div>
            <strong>Международный обмен опытом</strong>
            <div style={{ marginTop: '4px' }}>
              Поддержка множества языков и открытая архитектура Moodle способствуют глобальному сотрудничеству и обмену знаниями.
            </div>
          </div>
        </li>
        <li>
          <div>
            <strong>Расширение доступности образования</strong>
            <div style={{ marginTop: '4px' }}>
              Moodle увеличивает доступность образования, делая его возможным даже в отдалённых регионах.
            </div>
          </div>
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
