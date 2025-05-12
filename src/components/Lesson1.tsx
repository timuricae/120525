import styles from '../components/Lesson1.module.css';
import Map from '../components/Map';

import worldMap from '../assets/worldMap.png';
import venice from '../assets/venice.png';
import saintPeter from '../assets/saintPeter.png';
import suzhow from '../assets/suzhow.png';
import courseData from '../courseData';

const locations = [
    {
        id: 'Venice',
        title: 'Венеция и её лагуна, Италия',
        imgSrc: venice,
        topPx: 127,
        leftPx: 62,
        link: 'https://whc.unesco.org/en/list/394',
        description: [

            <div className={styles.container}>
                <ul className={styles.list}>
                    <li>Венеция — уникальный город, построенный на архипелаге из 118 островов, соединённых множеством мостов и пересекаемых сетью каналов.</li>
                    <li>Лагуна Венеции является одним из крупнейших прибрежных экосистемных комплексов в Средиземноморье.</li>
                    <li>Город известен своей архитектурой эпохи Возрождения и барокко, а также уникальными инженерными решениями, такими как подъёмные мосты и плотины.</li>
                    <li>Венеция внесена в Список всемирного наследия ЮНЕСКО в 1987 году.</li>
                </ul>
            </div>


        ]
    },
    {
        id: 'SaintPeter',
        title: 'Исторический центр Санкт-Петербурга, Россия',
        imgSrc: saintPeter,
        topPx: 68,
        leftPx: 177,
        link: 'https://whc.unesco.org/en/list/540',
        description: [
            <div className={styles.container}>
            <ul className={styles.list}>
                <li>Исторический центр Санкт-Петербурга — это воплощение величия русской архитектуры XVIII-XIX веков, гармонично сочетающей классические европейские стили с уникальными национальными особенностями. </li>
                <li>Здесь можно увидеть грандиозные дворцы, соборы, широкие проспекты и каналы, которые создают неповторимый городской пейзаж.</li>
                <li> Исторический центр был признан объектом Всемирного наследия ЮНЕСКО в 1990 году.</li>
            </ul>
        </div>
        ]
    },
    {
        id: 'Suzhow',
        title: 'Классические сады Сучжоу, Китай',
        imgSrc: suzhow,
        topPx: 244,
        leftPx: 645,
        link: 'https://whc.unesco.org/en/list/813',
        description: [
            <div className={styles.container}>
            <ul className={styles.list}>
                <li>Сады Сучжоу — это воплощение традиционного китайского садового искусства, основанного на принципах гармонии природы и человека.</li>
                <li>Они включают искусственно созданные пейзажи, пруды, павильоны, каменные горки и мостики. 
                Садовая архитектура Сучжоу отражает философские идеи даосизма и конфуцианства. </li>
                <li>Классические сады были признаны объектом Всемирного наследия ЮНЕСКО в 1997 году.</li>
            </ul>
        </div>
        ]
    }
];

const Lesson1 = () => {

    return (
        <>
            <div className={styles.content_info}>
                <h1>Уважаемые друзья, вашему вниманию предоставляется мультимедийный ресурс, который служит сопровождением к методическому пособию «Цифровое культурное наследие» (далее ЦКН.)</h1>

                <span className={styles.content_text}>
                    Вам предстоит изучить различные аспекты явления, которое возникло в результате использования цифровых технологий для сохранения памятников культуры.
                </span>

                <span className={styles.content_text}>
                    Предлагаем ознакомиться с одним из наиболее полных источников по вопросам ЦКН – порталом «Центр Всемирного наследия ЮНЕСКО». Этот ресурс содержит информацию о 1223 объектах, включенных в Список всемирного наследия.
                </span>

                <span className={styles.content_text}>
                    Уникальные памятники культуры, природы, а также культурно-природные достопримечательности, представленные в Списке, находятся на территории 168 государств.
                </span>

                <h2>Остановимся на трех объектах из Списка:</h2>

                <ol className={styles.content_info_list}>
                    <li>Венеция и ее лагуна, Италия;</li>
                    <li>Классические сады Сучжоу, Китай;</li>
                    <li>Исторический центр Санкт-Петербурга и относящиеся к нему памятники, Россия.</li>
                </ol>

                <span className={`${styles.content_text} ${styles.content_text_bg}`}>
                    Одним из факторов, объединяющих эти объекты, является роль воды в их возникновении и развитии.
                </span>
            </div>

            <div className={styles.map_container}>
                <Map locations={locations} mapImage={worldMap} mapWidth={720} mapHeight={407} lessonId='1' courseData={courseData} />
            </div>

        </>
    );
}

export default Lesson1;
