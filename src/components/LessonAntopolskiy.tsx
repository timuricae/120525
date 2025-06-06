import React, { useState, useEffect } from 'react';

import A1 from '../assets/A/A1.png';
import A22 from '../assets/A/A22.png';
import A3 from '../assets/A/A3.png';
import A4 from '../assets/A/A4.png';
import A5 from '../assets/A/A5.png';
import A6 from '../assets/A/A6.png';
import A7 from '../assets/A/A7.png';



const STORAGE_KEY = 'lesson3_antopolskiy_v2';

type Category = 'Визуальность' | 'Символичность' | 'Иммерсивность' | 'Соприсутствие';

interface Item {
    id: string;
    text: string;
    correct: Category;
    image?: string;
}

const dropData = {
    categories: ['Визуальность', 'Символичность', 'Иммерсивность', 'Соприсутствие'] as Category[],
    items: [
        { id: 'item1', text: '3D-модель скульптуры на сайте музея', correct: 'Визуальность', image: A1 },
        { id: 'item2', text: 'Воссозданный геном мумии и его интерпретация', correct: 'Символичность', image: A22 },
        { id: 'item3', text: 'VR-экскурсия по древнему городу', correct: 'Иммерсивность', image: A3 },
        { id: 'item4', text: 'Онлайн-ритуал в реальном времени с участниками по всему миру', correct: 'Соприсутствие', image: A4 },
        { id: 'item5', text: 'Интерактивная хронология со ссылками на культурные события', correct: 'Символичность', image: A5 },
        { id: 'item6', text: 'Цифровой аватар гида, отвечающий на вопросы в чате', correct: 'Иммерсивность', image: A6 },
        { id: 'item7', text: 'Запись голосов очевидцев, проигрываемая во время виртуального тура', correct: 'Соприсутствие', image: A7 },
    ],

};

const authorDefinitions: Record<Category, string> = {
    'Визуальность': 'Передача информации через визуальные образы, изображения, модели и формы.',
    'Символичность': 'Способ представления объектов через символы, ассоциации и культурные значения.',
    'Иммерсивность': 'Погружение пользователя в цифровую среду, создающее эффект присутствия.',
    'Соприсутствие': 'Опыт одновременного участия в событии с другими пользователями в реальном времени.',
};

const antopolskiyIntro = {
    link: 'https://www.hist.msu.ru/upload/iblock/fd1/i-494468.pdf',
    note: 'В монографии А.Б. Антопольского и соавторов «Цифровые гуманитарные исследования» (2023) раскрываются ключевые концепты, лежащие в основе свойств ЦКН...',
    pages: {
        'Визуальность': 'стр. 45-50',
        'Символичность': 'стр. 50-60',
        'Иммерсивность': 'стр. 60-75',
        'Соприсутствие': 'стр. 75-85',
    },
};

export default function LessonAntopolskiy() {
    const [definitions, setDefinitions] = useState<Record<Category, string>>({
        'Визуальность': '',
        'Символичность': '',
        'Иммерсивность': '',
        'Соприсутствие': '',
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
        const saved = localStorage.getItem(STORAGE_KEY);
        let parsed = saved ? JSON.parse(saved) : {};
        parsed.definitions = definitions;
        parsed.answers = parsed.answers || answers;
        parsed.completed = parsed.completed || completed;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    };

    const allDefinitionsFilled = Object.values(definitions).every((d) => d.trim() !== '');

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
        e.dataTransfer.setData('text/plain', itemId);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>, category: Category) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('text/plain');
        if (itemId) {
            setAnswers((prev) => ({ ...prev, [itemId]: category }));
            setCompleted(false);
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ definitions, answers: { ...answers, [itemId]: category }, completed: false }));
        }
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const isCorrect = (itemId: string) => {
        const item = dropData.items.find((i) => i.id === itemId);
        return item && answers[itemId] === item.correct;
    };

    const checkCompletion = () => {
        const allCorrect = dropData.items.every((item) => isCorrect(item.id));
        setCompleted(allCorrect);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ definitions, answers, completed: allCorrect }));
    };

    const resetAll = () => {
        setAnswers({});
        setCompleted(false);
        localStorage.removeItem(STORAGE_KEY);
    };

    return (
        <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'sans-serif', lineHeight: 1.6, color: '#333', fontSize: 16, padding: '0 16px' }}>
            <h1 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>
                Урок по свойствам цифрового культурного наследия
            </h1>
            <span style={{ display: 'block', marginBottom: 12 }}>{antopolskiyIntro.note}</span>
            <span style={{ display: 'block', marginBottom: 12 }}>
                Ознакомьтесь с трудом:&nbsp;
                <a href={antopolskiyIntro.link} target="_blank" rel="noopener noreferrer">
                    Исторический факультет МГУ — Антопольский (PDF)
                </a>
            </span>
            <span style={{ display: 'block', marginBottom: 12 }}>Рекомендуемые страницы для каждого свойства:</span>
            <ul style={{ marginBottom: 24 }}>
                {dropData.categories.map((cat) => (
                    <li key={cat}><strong>{cat}</strong>: {antopolskiyIntro.pages[cat]}</li>
                ))}
            </ul>

            <h2 style={{ fontSize: 22, fontWeight: 'bold', marginTop: 32, marginBottom: 12 }}>Определения свойств ЦКН</h2>
            <span style={{ display: 'block', marginBottom: 16 }}><em>Напишите свои определения, затем сравните с авторскими.</em></span>

            {dropData.categories.map((category) => (
                <div key={category} style={{ marginBottom: 16 }}>
                    <label style={{ fontWeight: 'bold', fontSize: 18 }}>{category}</label>
                    <textarea
                        placeholder={`Введите своё определение свойства "${category}"`}
                        value={definitions[category]}
                        onChange={(e) => handleDefinitionChange(category, e.target.value)}
                        rows={3}
                        style={{ width: '100%', fontSize: 16, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                    />
                </div>
            ))}

            <div style={{ marginBottom: 24 }}>
                <button
                    disabled={!allDefinitionsFilled}
                    onClick={() => setShowAuthorDefs(true)}
                    style={{ backgroundColor: allDefinitionsFilled ? '#4a90e2' : '#ccc', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 5, cursor: allDefinitionsFilled ? 'pointer' : 'not-allowed', marginRight: 16 }}
                >
                    Показать определения автора
                </button>
                <button
                    onClick={saveDefinitionsToStorage}
                    style={{ backgroundColor: '#5cb85c', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 5, cursor: 'pointer' }}
                >
                    Сохранить определения
                </button>
            </div>

            {showAuthorDefs && (
                <div style={{ backgroundColor: '#f9f9f9', padding: 16, borderRadius: 6, marginBottom: 24 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>Определения из труда А. Б. Антопольского</h3>
                    {dropData.categories.map((cat) => (
                        <div key={cat} style={{ marginBottom: 12 }}>
                            <strong>{cat}:</strong> {authorDefinitions[cat]}
                        </div>
                    ))}
                </div>
            )}

            <h2 style={{ fontSize: 22, fontWeight: 'bold', marginTop: 32, marginBottom: 12 }}>Классификация цифровых объектов</h2>
            <span style={{ display: 'block', marginBottom: 16 }}>
                Перетаскивайте описания объектов в подходящие категории на основе ваших определений.
            </span>

            <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ flex: '0 0 320px', padding: 12, border: '2px solid #666', borderRadius: 8, backgroundColor: '#fafafa', maxHeight: 400, overflowY: 'auto' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Объекты</h3>
                    <span style={{ display: 'block', marginBottom: 12 }}>Перетащите в нужную категорию.</span>
                    {dropData.items.map((item) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={(e) => onDragStart(e, item.id)}
                            style={{
                                userSelect: 'none',
                                marginBottom: 12,
                                border: '1px solid #ccc',
                                borderRadius: 6,
                                padding: 8,
                                backgroundColor: answers[item.id] ? (isCorrect(item.id) ? '#d4edda' : '#f8d7da') : 'white',
                                cursor: 'grab',
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                                <span style={{ textAlign: 'center', fontWeight: 500 }}>{item.text}</span>
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.text}
                                        style={{
                                            width: 200,
                                            height: 200,
                                            objectFit: 'cover',
                                            borderRadius: 4,
                                            border: '1px solid #ccc',
                                        }}
                                    />
                                )}
                            </div>


                        </div>
                    ))}
                </div>

                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {dropData.categories.map((category) => (
                        <div
                            key={category}
                            onDrop={(e) => onDrop(e, category)}
                            onDragOver={onDragOver}
                            style={{
                                flexGrow: 1,
                                minHeight: 80,
                                padding: 12,
                                border: '2px dashed #888',
                                borderRadius: 8,
                                backgroundColor: '#fff',
                                boxShadow: 'inset 0 0 5px #ccc',
                            }}
                        >
                            <h3 style={{ marginTop: 0 }}>{category}</h3>
                            {Object.entries(answers)
                                .filter(([, cat]) => cat === category)
                                .map(([id]) => {
                                    const item = dropData.items.find((i) => i.id === id);
                                    if (!item) return null;
                                    return (
                                        <div
                                            key={id}
                                            style={{
                                                padding: '4px 8px',
                                                marginBottom: 4,
                                                backgroundColor: isCorrect(id) ? '#c3e6cb' : '#f5c6cb',
                                                borderRadius: 4,
                                                fontSize: 14,
                                            }}
                                        >
                                            {item.text}
                                        </div>
                                    );
                                })}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: 20 }}>
                <button
                    onClick={checkCompletion}
                    style={{ backgroundColor: '#4a90e2', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 6, cursor: 'pointer', marginRight: 16 }}
                >
                    Проверить ответы
                </button>
                <button
                    onClick={resetAll}
                    style={{ backgroundColor: '#dc3545', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 6, cursor: 'pointer' }}
                >
                    Сбросить всё
                </button>
            </div>

            {completed && (
                <span style={{ display: 'block', color: 'green', fontWeight: 'bold', marginTop: 16 }}>
                    Поздравляем! Все объекты классифицированы правильно.
                </span>
            )}
            {!completed && Object.keys(answers).length > 0 && (
                <span style={{ display: 'block', color: '#a94442', fontWeight: 'bold', marginTop: 16 }}>
                    Некоторые объекты классифицированы неверно. Попробуйте снова.
                </span>
            )}
        </div>
    );
}