import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';

import { useState } from 'react';

import styles from '../components/Lesson3.module.css';
import PreTask from '../components/PreTask';
import CaseStudyQuestion from '../components/CaseStudyQuestion';
import FlipCard from '../components/FlipCard';

const cardContents = [
  'Цифровые копии памятников культуры',
  'Произведения искусства, созданные посредством цифровых технологий',
  'Социальные практики, которые реализуются в виртуальном пространстве',
  'Оцифрованные природные памятники',
];

const images = [image1, image2, image3, image4];

const Lesson3 = () => {

  const [flippedCards, setFlippedCards] = useState([false, false, false, false]);

  const [showQuestion, setShowQuestion] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // шаги: 0, 1, 2


  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <>
      <section className={styles.content_info}>
        <div className={styles.content_text}>
          <span>
            Термином <span className={styles.content_text_bg}>«цифровое культурное наследие»</span> обозначается корпус ресурсов, созданных с помощью ИКТ для сохранения объектов:
          </span>
          <ul className={styles.content_info_list}>
            <li>культурного,</li>
            <li>исторического,</li>
            <li>нематериального,</li>
            <li>экологического наследия,</li>
            <li><span className={styles.content_text_bg}>и произведений цифрового искусства.</span></li>
          </ul>
        </div>

        <div className={styles.content_text}>
          <span>
            Практики онлайн-взаимодействия с этими ресурсами фиксируют деятельность виртуальных и смешанных сообществ.
          </span>
        </div>

        <div className={styles.content_text}>
          <span>Нажмите на все карточки, чтобы узнать больше:</span>
        </div>
      </section>

      <section className={styles.content_logo}>
        {images.map((img, i) => (
          <FlipCard
            key={i}
            frontImage={img}
            backText={cardContents[i]}
            flipped={flippedCards[i]}
            onClick={() => toggleCard(i)}
            width={200}
            height={200}
          />
        ))}
      </section>


      <div className={styles.preTask}>
        <PreTask text="Вам предстоит классифицировать реальные объекты ЦКН. Когда будете готовы, начните задание."
          onStart={() => setShowQuestion(true)} />
      </div>
      {showQuestion && (
        <>
          <CaseStudyQuestion
            questionId='4'
            question={
              <>
                <h2>К какому типу ЦКН относится проект Виллы Мистерий?</h2>
                <p>
                  Ознакомьтесь с проектом <a href="http://vwhl.soic.indiana.edu/villa/mission.php" target="_blank" rel="noopener noreferrer">Villa of the Mysteries</a> для более глубокого понимания его целей и подходов.
                </p>
                <p>
                  Попробуйте определить, какой тип цифрового культурного наследия представляет собой этот проект, и как он влияет на сохранение памятников.
                </p>
              </>
            }
            options={[
              'Цифровая копия памятника культуры',
              'Произведение искусства',
              'Социальная практика',
              'Оцифрованный природный памятник',
            ]}
            correctAnswer="Цифровая копия памятника культуры"
            correctExplanation={
              <>
                <h3>Villa of the Mysteries Project</h3>
                <ul>
                  <li>Цифровая реконструкция знаменитой Виллы Мистерий в Помпеях, созданная Индианским университетом.</li>
                  <li>Используются высококачественные 3D-сканы, панорамные изображения и научные исследования для создания точной виртуальной копии памятника.</li>
                  <li>Цель проекта — сохранить архитектуру и фрески виллы, а также сделать их доступными для учёных, студентов и широкой аудитории.</li>
                  <li>Пример того, как цифровые технологии помогают сохранять и изучать культурное наследие.</li>
                </ul>
              </>
            }
            incorrectExplanation={<p>Неверно. Подумайте о цифровом воспроизведении архитектурного объекта.</p>}
            sectionId={2}
            lessonId={1}
          />

          <CaseStudyQuestion
            questionId='4'
            sectionId={2}
            lessonId={1}
            question={
              <>
                <h2>Bears Ears Project</h2>
                <p>
                  Приглашаем вас отправиться в виртуальное путешествие по местам, священным для коренных народов Северной Америки.
                </p>
                <p>
                  С помощью современных 3D-технологий вы сможете увидеть древние ландшафты и памятники, связанные с культурным наследием индейских племён.
                </p>
                <p>
                  Изучите проект <a href="https://www.cyark.org/projects/bears-ears/overview" target="_blank" rel="noopener noreferrer">Bears Ears</a> и попробуйте определить, какой тип цифрового культурного наследия он представляет.
                </p>
              </>
            }
            options={[
              'Цифровая копия памятника культуры',
              'Произведение искусства',
              'Социальная практика',
              'Оцифрованный природный памятник',
            ]}
            correctAnswer="Оцифрованный природный памятник"
            correctExplanation={
              <>
                <h3>Bears Ears Project</h3>
                <ul>
                  <li>Проект оцифровки священных природных ландшафтов и археологических памятников, связанных с культурой коренных народов.</li>
                  <li>Используются 3D-сканирование, панорамные изображения и архивные материалы.</li>
                  <li>Цель проекта — сохранить природное и культурное наследие региона для будущих поколений и сделать его доступным для широкой аудитории.</li>
                </ul>
              </>
            }
            incorrectExplanation={<p>Неверно. Обратите внимание на природный характер объектов.</p>}

          />

          <CaseStudyQuestion
            questionId='5'
            question={
              <>
                <h2>Проект "Living Architecture: Casa Batlló"</h2>
                <p>
                  Проект "Living Architecture" использует данные о здании Casa Batlló для создания интерактивных визуальных интерпретаций архитектуры с помощью искусственного интеллекта, исследуя взаимодействие между архитектурой, искусством и цифровыми технологиями.
                </p>
                <p>
                  Узнать больше о проекте можно на <a href="https://refikanadol.com/works/living-architecture-casa-batllo/" target="_blank" rel="noopener noreferrer">официальной странице</a>.
                </p>
              </>
            }
            options={[
              'Произведение искусства',
              'Цифровая копия памятника культуры',
              'Социальная практика',
              'Оцифрованный природный памятник',
            ]}
            correctAnswer="Произведение искусства"
            correctExplanation={
              <>
                <h3>Цифровое искусство</h3>
                <ul>
                  <li>Инсталляция создана с использованием данных и ИИ, представляет собой цифровое произведение.</li>
                </ul>

                <h3>Интерпретация культурного наследия</h3>
                <ul>
                  <li>Использует архитектуру Casa Batlló как основу для новых визуальных форм.</li>
                </ul>

                <h3>Отсутствие физической формы</h3>
                <ul>
                  <li>Проект существует исключительно в цифровом формате, не имеет физической репрезентации.</li>
                </ul>

                <h3>Создание изначально в цифровом формате</h3>
                <ul>
                  <li>Произведение создано с помощью цифровых технологий и не требует физической реконструкции.</li>
                </ul>

              </>
            }
            incorrectExplanation={<p>Неверно. Обратите внимание на художественную концепцию проекта.</p>}
            sectionId={2}
            lessonId={1}

          />

          <CaseStudyQuestion
            questionId='6'
            question={
              <>
              <h2>Какой тип цифрового наследия демонстрирует проект Telegarden?</h2>
              <p>
                Изучите <a href="https://goldberg.berkeley.edu/garden/Ars/" target="_blank" rel="noopener noreferrer">проект Telegarden</a>, который позволяет пользователям по всему миру удалённо ухаживать за виртуальным садом с помощью робота, управляемого через интернет.              </p>
            </>            
            }
            options={[
              'Социальная практика',
              'Цифровая копия памятника культуры',
              'Произведение искусства',
              'Оцифрованный природный памятник',
            ]}
            correctAnswer="Социальная практика"
            correctExplanation={
              <>
                <h3>Telegarden</h3>
                <ul>
                  <li>Интернет-проект коллективного ухода за виртуальным садом.</li>
                  <li>Пример дистанционного социального взаимодействия.</li>
                </ul>
              </>
            }
            incorrectExplanation={<p>Неверно. Подумайте о коллективной деятельности через цифровую платформу.</p>}
            sectionId={2}
            lessonId={1}
          />
        </>
      )}
    </>
  );
};

export default Lesson3;
