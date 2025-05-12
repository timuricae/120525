import Map from '../components/Map.tsx'
import styles from '../components/Lesson9.module.css'

import worldMap from '../assets/MEMap.png';
import troy from '../assets/middleEast/troy.png';
import pyramid from '../assets/middleEast/pyramid.png';
import petra from '../assets/middleEast/petra.png';

import courseData from '../courseData';

const locations = [
    {
        id: 'Troy', title: 'Троя, Турция', imgSrc: troy, topPx: 66, leftPx: 92, link: 'https://whc.unesco.org/en/list/849',
        description: [
            <div className={styles.container}>
                <h2>Применяемые технологии:</h2>
                <ul className={styles.list}>
                    <li>Георадарное исследование: Поиск скрытых слоев почвы и остатков древних стен.</li>
                    <li>Цифровое картографирование: Создание подробной карты археологической зоны.</li>
                    <li>Историческое моделирование: Анализ письменных источников и сравнительный анализ находок.</li>
                    <li>Генетический анализ: Исследование ДНК животных и растений, найденных на территории Трои.</li>
                </ul>
                <h2>Результаты исследований:</h2>
                <ul className={styles.list}>
                    <li>Подтверждено существование нескольких культурных слоев.</li>
                    <li>Найдены доказательства существования мифической войны.</li>
                    <li>Реконструирован план древнего города.</li>
                </ul>
            </div>
        ]

    },
    {
        id: 'Pyramid',
        title: 'Пирамида Хеопса, Египет',
        imgSrc: pyramid,
        topPx: 467,
        leftPx: 258, link: 'https://whc.unesco.org/en/list/86',
        description: [
            <div className={styles.container}>
                <h2>Применяемые технологии:</h2>
                <ul className={styles.list}>
                    <li>Термическое сканирование: Определение внутренних пустот и камер пирамиды.</li>
                    <li>Лазерное сканирование: Построение высокоточной цифровой модели внешнего и внутреннего пространства пирамиды.</li>
                    <li>Радиолокационное зондирование: Исследование подземного пространства вокруг пирамиды.</li>
                    <li>Фотограмметрия: Сканирование и создание трехмерных моделей отдельных блоков и деталей.</li>
                </ul>
                <h2>Результаты исследований:</h2>
                <ul className={styles.list}>
                    <li>Обнаружены новые камеры и туннели внутри пирамиды.</li>
                    <li>Построены виртуальные туры по внутренним помещениям.</li>
                    <li>Определено расположение древнего некрополя вокруг пирамиды.</li>
                </ul>
            </div>
        ]
    },
    {
        id: 'Petra',
        title: 'Древний город Петра, Иордания',
        imgSrc: petra,
        topPx: 441,
        leftPx: 434,
        link: 'https://whc.unesco.org/en/list/326',
        description: [
            <div className={styles.container}>
                <h2>Применяемые технологии:</h2>
                <ul className={styles.list}>
                    <li>3D-реконструкция: Воссоздание облика города в период его расцвета.</li>
                    <li>Спутниковые снимки: Анализ изменения ландшафта и выявление следов древних дорог.</li>
                    <li>Анализ ДНК: Исследования останков жителей Петры для понимания этнического состава населения.</li>
                    <li>Термография: Обнаружение скрытых пещер и построек.</li>
                </ul>
                <h2>Результаты исследований:</h2>
                <ul className={styles.list}>
                    <li>Реконструированы утраченные фасады храмов и дворцов.</li>
                    <li>Обнаружены свидетельства торговых связей между Петрой и соседними регионами.</li>
                    <li>Установлена связь между климатическими изменениями и упадком города.</li>
                </ul>
            </div>
        ]
    }
];


const Lesson9: React.FC = () => {

    return (
        <>
            <section className={styles.content_info}>
                <div className={styles.content_text}>
                    <span>В этом уроке мы рассмотрим <span className={styles.content_text_bg}>три кейса цифровой археологии на Ближнем Востоке</span>, которые наглядно демонстрируют, как технологии меняют подход к археологическим исследованиям. Эти кейсы помогут вам лучше понять, как цифровые технологии применяются на практике и какие преимущества они приносят.</span>
                </div>
            </section>
            
            <div className={styles.map_container}>
                <Map locations={locations} mapImage={worldMap} lessonId='2' courseData={courseData}/>
            </div>

        </>
    );
};

export default Lesson9;