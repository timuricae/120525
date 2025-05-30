import React, { useState } from "react";
import styles from "./Lesson5.module.css";
import predig1 from "../assets/predig1.jpg";
import predig2 from "../assets/predig2.jpg";
import dig1 from "../assets/dig1.png";
import dig2 from "../assets/dig2.jpg";
import postdig1 from "../assets/postdig1.png";
import culturaViva from "../assets/culturaViva.png";
import ImageSlider from "../components/ImageSlider";

const tabs = [
  {
    id: "pre-digital",
    label: "ДОЦИФРОВОЙ ПЕРИОД",
    content: (
      <div className={styles.tabContent}>
        <h2><strong>Доцифровой период (1889 - 1992)</strong></h2>
        <div>
  <h2>Основные события и инициативы:</h2>
  <ul>
    <li>
      <strong>1889 г.:</strong> Первый международный конгресс по охране произведений искусства и памятников культуры, проводимый в Париже, задаёт начало систематическому международному сотрудничеству в данной сфере.
    </li>
    <li>
      <strong>1899 и 1907 гг.:</strong> Мирные конференции в Гааге принимают важные конвенции о законах и обычаях войны, вводящие правила защиты культурных ценностей.
    </li>
    <li>
      <strong>1935 г.:</strong> Принятие «Пакта Рериха» (Вашингтонский пакт), который стал первым специальным международным соглашением, полностью посвящённым защите культурных ценностей. Идеологом выступил Николай Рерих, введший символ защиты — Знамя Мира.
    </li>
    <li>
      <strong>1945 г.:</strong> Образование ЮНЕСКО, призванной координировать международные усилия по охране культурного наследия.
    </li>
    <li>
      <strong>1972 г.:</strong> Принятие Конвенции ЮНЕСКО об охране всемирного культурного и природного наследия, ставшей ключевым инструментом для защиты уникальных объектов культуры и природы.
    </li>
  </ul>
  <h2>Итоги периода:</h2>
  <ul>
    <li>
      <strong>Конкретизация основ международного права по охране культурного наследия.</strong>
    </li>
    <li>
      <strong>Создание символов и знаков защиты, подчёркивающих особое значение памятников культуры.</strong>
    </li>
    <li>
      <strong>Активизация международного сотрудничества и появление специализированных институтов и программ по сохранению культурного наследия.</strong>
    </li>
  </ul>
</div>

      </div>
    ),
    images: [
      { src: predig1, caption: "Реставрация картины" },
      { src: predig2, caption: "Инструменты реставратора - кисти и лупы" }
    ]
  },
  {
    id: "digitization",
    label: "ОЦИФРОВКА ОБЪЕКТОВ КУЛЬТУРЫ",
    content: (
      <div className={styles.tabContent}>
        <h2><strong>Оцифровка памятников (1992-2003)</strong></h2>
        <p>
          Начало активного использования информационных технологий для сохранения культурного наследия.
          Основной задачей стало создание цифровых копий объектов и расширение доступа к образовательным ресурсам.
        </p>

        <p><strong>Программа "Память мира"</strong></p>
        <p>
          Создана ЮНЕСКО в 1992 году для сохранения и обеспечения доступа к документальному наследию,
          находящемуся под угрозой утраты.
        </p>
        <p><strong>Цель:</strong> сохранение культурного наследия, которое может быть утрачено из-за войн,
          социальных потрясений или нехватки ресурсов у хранящих организаций.</p>
        <p><strong>Деятельность включает:</strong></p>
        <ul>
          <li>создание цифровых копий документов;</li>
          <li>организацию международного сотрудничества;</li>
          <li>поддержку архивных и библиотечных проектов.</li>
        </ul>

        <p><strong>Программа "Информация для всех"</strong></p>
        <p>
          Запущена ЮНЕСКО в 2000 году с целью построения инклюзивного информационного общества и сокращения
          цифрового неравенства между странами.
        </p>
        <p><strong>Цель:</strong> улучшение доступа к информации в странах с ограниченными ресурсами и
          содействие сохранению информации, являющейся общественным достоянием.</p>
        <p><strong>Деятельность включает:</strong></p>
        <ul>
          <li>разработку международной информационной политики;</li>
          <li>укрепление институтов доступа к информации;</li>
          <li>использование ИТ для образования, науки и культуры.</li>
        </ul>
      </div>


    ),
    images: [
      { src: dig1, caption: <p>Пример оцифровки — журнал «Новый мир». Оцифрованные номера с 1995 года доступны на <a href="https://nm1925.ru" target="_blank">официальном сайте журнала</a>, включая полные тексты и метаданные.</p> },
      { src: dig2, caption: "3Д модель Статуи Христа-Искупителя, Бразилия, сгенерированная с помощью нейросети Kandinskiy" }
    ]
  },
  {
    id: "digitalization",
    label: "ЦИФРОВИЗАЦИЯ ОБЩЕСТВА",
    content: (
      <div className={styles.tabContent}>
        <h2><strong>Цифровизация общества (с конца 1990-х годов и по сей день)</strong></h2>
        <p>
          Период интеграции цифровых коллекций в социальную, экономическую и политическую жизнь.
          Основное внимание уделяется обеспечению доступности и сохранности цифрового наследия,
          а также разработке правовых и технических стандартов.
        </p>

        <p><strong>«Хартия о сохранении цифрового наследия» (2003)</strong></p>
        <p>
          Важный документ ЮНЕСКО, регулирующий вопросы сохранения цифрового культурного наследия.
          Подчёркивается необходимость надёжных систем для долговременного хранения цифровых ресурсов
          в интересах будущих поколений.
        </p>

        <p><strong>Основные положения хартии:</strong></p>
        <ol>
          <li>
            <strong>Определение цифрового наследия:</strong>
            <ul>
              <li>уникальные ресурсы, созданные в цифровой форме или переведённые из аналоговых;</li>
              <li>важны для культуры, науки, образования и управления.</li>
            </ul>
          </li>
          <li>
            <strong>Принципы сохранения:</strong>
            <ul>
              <li>обеспечение непрерывного доступа к цифровому наследию;</li>
              <li>защита конфиденциальности информации;</li>
              <li>партнёрство и сотрудничество участников процесса сохранения.</li>
            </ul>
          </li>
          <li>
            <strong>Технические вызовы:</strong>
            <ul>
              <li>устаревание технологий и программного обеспечения;</li>
              <li>необходимость адаптации к стремительно меняющемуся цифровому ландшафту.</li>
            </ul>
          </li>
          <li>
            <strong>Социальные и правовые аспекты:</strong>
            <ul>
              <li>цифровой разрыв между странами и социальными группами;</li>
              <li>вопросы авторского права и доступа к цифровым материалам.</li>
            </ul>
          </li>
          <li>
            <strong>Международное сотрудничество:</strong> призыв к объединению усилий для глобального
            обеспечения доступа и сохранения цифрового наследия.
          </li>
        </ol>
      </div>

    ),
    images: [
      {
        src: postdig1, caption: <>
          <p>
            <a href="https://archive.org" target="_blank" rel="noopener noreferrer">
              Internet Archive
            </a>{" "}
            и программа{" "}
            <a href="https://www.unesco.org/en/memory-world" target="_blank" rel="noopener noreferrer">
              UNESCO «Память мира»
            </a>{" "}
            — ключевые инициативы по сохранению цифрового наследия. Здесь можно найти миллионы книг, фильмов, сайтов и документов, доступных для будущих поколений по всему миру.
          </p>
          {/* <p>
          Эти ресурсы отражают переход от аналогового к цифровому хранению информации, глобальный доступ к знаниям и международное сотрудничество в сохранении культурной памяти. Они демонстрируют, как цифровые технологии меняют способы сохранения, распространения и защиты информации.
        </p> */}
        </>

      },
      {
        src: culturaViva, caption: <>
          <p>
            Проект Cultura Viva в Бразилии - пример вовлечения общества в цифровое наследие, независимо от места и социального статуса. Подробнее о проекте можно узнать на{' '}
            <a href="https://culturaviva.cultura.gov.br" target="_blank" rel="noopener noreferrer">
              Cultura Viva
            </a>.
          </p>
        </>
      }
    ]
  }
];

const Lesson5: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={styles.container}>


      <section className={styles.content_info}>
        <div className={styles.content_text}>
          <span><span className={styles.content_text_bg}></span>В этом разделе мы рассмотрим, как эволюционировали методы и технологии сохранения и популяризации культурного наследия.</span>
        </div>
      </section>

      <section className={styles.callToAction}>
        <h3>Исследуйте различные этапы развития цифрового культурного наследия!</h3>
        <p>
          Нажимайте на вкладки, чтобы узнать больше о каждом периоде и увидеть примеры применения технологий в сохранении культурного наследия.
        </p>
      </section>



      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? styles.activeTab : styles.inactiveTab}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.contentContainer}>
        {activeTabData && (
          <div className={styles.tabContent}>
            <div className={styles.text}>{activeTabData.content}</div>

            <div className={styles.sliderWrapper}>
              {/* Используем ImageSlider для показа изображений */}
              <ImageSlider items={activeTabData.images} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson5;

