import React, { useState, useEffect } from 'react';
import styles from '../components/Lesson4.module.css';

const STORAGE_KEY = 'lesson4';

type Category =
  | 'Цифровое культурное наследие'
  | 'Объект культурного наследия (ОКН)'
  | 'Информационное общество'
  | 'Историческая память'
  | 'Оцифровка (Дигитализация)';

const authorDefinitions: Record<Category, string> = {
  'Цифровое культурное наследие':
    'Основной термин статьи, обозначающий цифровую форму культурного наследия. Подчёркивается важность осмысления специфики данного феномена, сравнения его с традиционным культурным наследием и разработки подходов к сохранению.',
  'Объект культурного наследия (ОКН)':
    'Важнейшая категория культурного наследия, означающая охраняемый законом памятник культуры, здания, события и произведения искусства, считающиеся частью общего исторического и культурного достояния страны.',
  'Информационное общество':
    'Рассматривается как важный фактор, влияющий на процессы сохранения и восприятия культурного наследия в цифровую эпоху.',
  'Историческая память':
    'Понятие играет ключевую роль в осознании важности сохранения культурного наследия и формирования самосознания народов.',
  'Оцифровка (Дигитализация)':
    'Один из центральных процессов, обеспечивающих переход традиционных объектов культурного наследия в цифровую сферу.',
};

const dropData = {
  categories: [
    'Цифровое культурное наследие',
    'Объект культурного наследия (ОКН)',
    'Информационное общество',
    'Историческая память',
    'Оцифровка (Дигитализация)',
  ] as Category[],
  items: [], // заполни по необходимости
};

// ...весь импорт и начальная часть без изменений

export default function Lesson4() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [definitions, setDefinitions] = useState<Record<Category, string>>({
    'Цифровое культурное наследие': '',
    'Объект культурного наследия (ОКН)': '',
    'Информационное общество': '',
    'Историческая память': '',
    'Оцифровка (Дигитализация)': '',
  });
  const [answers, setAnswers] = useState<Record<string, Category | null>>({});
  const [completed, setCompleted] = useState(false);
  const [showAuthorDefs, setShowAuthorDefs] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setDefinitions(parsed.definitions || definitions);
      setAnswers(parsed.answers || {});
      setCompleted(parsed.completed || false);
    }
  }, []);

  const handleDefinitionChange = (category: Category, value: string) => {
    setDefinitions((prev) => ({ ...prev, [category]: value }));
    setShowAuthorDefs(false);
  };

  const saveDefinitionsToStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ definitions, answers, completed }));
  };

  const allDefinitionsFilled = Object.values(definitions).every((d) => d.trim() !== '');

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ maxWidth: 900, margin: 'auto', fontFamily: 'sans-serif' }}>
      <section className={styles.journal_content} style={{ marginBottom: 32 }}>
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
                src="/journal-preview.jpg"
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

      <section className={styles.journal_content}>
        <p>
          Для глубокого понимания свойств цифрового культурного наследия рекомендуем изучить статью А. А. Никоновой из журнала “Культура&технологии” — доступна&nbsp;
          <a href="https://cat.ifmo.ru/index.php/en/2024/v9-i2/519" target="_blank" rel="noopener noreferrer">
            здесь
          </a>.
        </p>
        <p>В этом уроке вам предстоит сформулировать свои определения ключевых терминов цифрового культурного наследия.</p>
      </section>

      <section className={styles.journal_content}>
        <h2>Определения ключевых терминов</h2>
        <p><em>Напишите свои определения для каждого термина. После заполнения можно сравнить с определениями из статьи.</em></p>
        {dropData.categories.map((category) => (
          <div key={category} style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 'bold', fontSize: 18 }}>{category}</label>
            <textarea
              placeholder={`Введите своё определение термина "${category}"`}
              value={definitions[category]}
              onChange={(e) => handleDefinitionChange(category, e.target.value)}
              rows={3}
              style={{ width: '100%', fontSize: 16, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </div>
        ))}

        <button
          disabled={!allDefinitionsFilled}
          onClick={() => setShowAuthorDefs(true)}
          style={{
            backgroundColor: allDefinitionsFilled ? '#4a90e2' : '#ccc',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: 5,
            cursor: allDefinitionsFilled ? 'pointer' : 'not-allowed',
            marginRight: 16,
          }}
        >
          Показать определения из статьи
        </button>
        <button
          onClick={saveDefinitionsToStorage}
          style={{
            backgroundColor: '#5cb85c',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
          }}
        >
          Сохранить определения
        </button>

        {showAuthorDefs && (
          <div style={{ marginTop: 20, backgroundColor: '#f9f9f9', padding: 16, borderRadius: 6 }}>
            <h3>Определения из статьи А. А. Никоновой</h3>
            {dropData.categories.map((cat) => (
              <div key={cat} style={{ marginBottom: 12 }}>
                <strong style={{ fontSize: 16 }}>{cat}:</strong>{' '}
                <span style={{ fontWeight: 'bold', color: '#000', fontSize: 16 }}>
                  {authorDefinitions[cat]}
                </span>
              </div>
            ))}

          </div>
        )}
      </section>
    </div>
  );
}
