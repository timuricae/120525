import React, { useState } from 'react';
import styles from '../components/EMarket.module.css';
import cultureRF from '../assets/EMarket/cultureRF.png';
import NAB from '../assets/EMarket/NAB.png';
import artefact from '../assets/EMarket/artefact.png';
import audio from '../assets/EMarket/audio.jpg';
import gosCatalog from '../assets/EMarket/gosCatalog.png';
import presCulture1 from '../assets/EMarket/presCulture1.png';
import potanin from '../assets/EMarket/potanin.jpg'
import rnf from '../assets/EMarket/rnf.jpg'

// Тип данных для инициатив
type Initiative = {
  id: string;
  title: string;
  type: 'частные' | 'государственные';
  category: 'фонды' | 'образовательные проекты' | 'веб-ресурсы';
  image: string;
  description: string;
  gallery?: string[];
  link?: string;
};

const allInitiatives: Initiative[] = [
  {
    id: '1',
    title: 'Фонд Потанина',
    type: 'частные',
    category: 'фонды',
    image: potanin,
    description: `
    <ul>

      <span>Некоммерческая организация, созданная в 1999 году предпринимателем Владимиром Потаниным.</span> 
     <li> Реализует масштабные благотворительные программы в сферах культуры, высшего образования, спорта и социального предпринимательства.</li>
      
        <li>Известные программы: «Музей без границ», стипендии студентам и аспирантам, развитие институциональной филантропии.</li>
        <li><strong>Цель</strong>: способствовать развитию человеческого капитала и укреплять российские институты гражданского общества.</li>
       
      </ul>
    
    `,
    link: 'https://fondpotanin.ru',
  },
  {
    id: '2',
    title: 'Национальная электронная библиотека (НЭБ)',
    type: 'государственные',
    category: 'веб-ресурсы',
    image: NAB,
    description: `
  <ul>
      <span>Крупнейший проект Минкультуры РФ, предназначенный для доступа к оцифрованным изданиям, научным работам, рукописям и прочим документам российских учреждений.</span> 
     <li>Обеспечивает свободный доступ к широкому спектру уникальных изданий, защищённых авторским правом.</li>
        <li>Используется для исследовательской и образовательной деятельности, доступна на мобильных устройствах.</li>
      </ul>
    `,
    link: 'https://rusneb.ru/ ',
  },
  {
    id: '3',
    title: 'Культура.рф',
    type: 'государственные',
    category: 'веб-ресурсы',
    image: cultureRF,
    description: `
      <ul>
      <span>Официальный информационный портал Министерства культуры РФ.</span> 
     <li>Интегрирует информацию о российском культурном наследии и традициях народов России.</li>
        <li>Содержит обширные материалы по кино, музеям, музыке, театру, литературе, архитектуре и народным традициям.</li>
          <li>Способствует интерактивному взаимодействию с пользователями и вовлеченности в российскую культуру.</li>
      </ul>
    `,
    link: 'https://www.culture.ru/',
  },
  {
    id: '4',
    title: 'Платформа «Артефакт»',
    type: 'государственные',
    category: 'образовательные проекты',
    image: artefact,
    description: `
    <ul>
      <span>Национальный проект Министерства культуры РФ.</span>
      <li>Цифровая платформа с использованием технологии дополненной реальности (AR).</li>
      <li>Позволяет проводить интерактивные экскурсии по культурным учреждениям России.</li>
      <li>Обеспечивает онлайн-доступ к объектам культурного наследия.</li>
    </ul>
    `,
    link: 'https://ar.culture.ru/',
  },
  {
    id: '5',
    title: 'Государственный каталог музейного фонда РФ',
    type: 'государственные',
    category: 'веб-ресурсы',
    image: gosCatalog,
    description: `
   <ul>
      <span>Федеральный портал с данными обо всех объектах музейного фонда России.</span>
      <li>Объединяет свыше 3700 музеев и более 47 миллионов музейных предметов.</li>
      <li>Обеспечивает удобный доступ к информации о культурном наследии.</li>
      <li>Использует современные телекоммуникационные технологии.</li>
    </ul>
    `,
    link: 'https://goskatalog.ru/portal/#/',
  },
  {
    id: '6',
    title: 'Проект «Сохранённая культура»',
    type: 'частные',
    category: 'веб-ресурсы',
    image: presCulture1,
    description: `
      <ul>
      <span>Научно-просветительский проект, основанный Виктором Наумовым в 2010 году.</span>
      <li>Оцифровывает и распространяет интеллектуальное и художественное наследие XX века.</li>
      <li>Создано сотни публикаций, фильмов и других социокультурных объектов.</li>
      <li>Работает на добровольной основе и за счёт личных средств основателя.</li>
    </ul>
    `,
    link: 'https://prescult.ru/',
  },
  {
    id: '7',
    title: 'Проект «Аудиопедия»',
    type: 'частные',
    category: 'образовательные проекты',
    image: audio,
    description: `
     <ul>
      <span>Благотворительный и образовательный проект Юрия Метёлкина.</span>
      <li>Содержит семь интернет-ресурсов с аудиозаписями театров, лекций, учебных и музыкальных материалов.</li>
      <li>Ориентирован на просвещение и обучение широкой аудитории.</li>
      <li>Бесплатно доступен для всех пользователей.</li>
    </ul>
    `,
    link: 'http://www.audiopedia.su/',
  },
  {
    id: '8',
    title: 'Российский научный фонд (РНФ)',
    type: 'государственные',
    category: 'фонды',
    image: rnf,
    description: `
   <ul>
      <span>Организация, созданная для поддержки научных исследований в России.</span>
      <li>Финансирует фундаментальные и прикладные научные проекты на конкурсной основе.</li>
      <li>Содействует развитию научной инфраструктуры и молодёжной науки.</li>
      <li>Работает по приоритетным направлениям развития науки и технологий.</li>
    </ul>
    `,
    link: 'https://rscf.ru/',
  }
];


const Card: React.FC<{ initiative: Initiative; onClick: () => void }> = ({ initiative, onClick }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img className={styles.cardImage} src={initiative.image} alt={initiative.title} />
    </div>
    <div className={styles.cardContent}>
      <p className={styles.cardTitle}>{initiative.title}</p>
      <button className={styles.moreButton} onClick={onClick}>Узнать больше</button>
    </div>
  </div>
);


const Modal: React.FC<{ initiative: Initiative; onClose: () => void }> = ({ initiative, onClose }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <h3 className={styles.modalTitle}>{initiative.title}</h3>
      <div className={styles.modalDescription} dangerouslySetInnerHTML={{ __html: initiative.description }} />
      {initiative.gallery && initiative.gallery.length > 0 && (
        <div className={styles.modalGallery}>
          {initiative.gallery.map((src, idx) => (
            <img key={idx} src={src} alt={`gallery-${idx}`} className={styles.galleryImage} />
          ))}
        </div>
      )}
      {initiative.link && (
        <a
          href={initiative.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          Перейти на сайт
        </a>
      )}
    </div>
  </div>
);


const EMarket: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'частные' | 'государственные' | ''>('');
  const [selectedCategory, setSelectedCategory] = useState<'фонды' | 'образовательные проекты' | 'веб-ресурсы' | ''>('');
  const [activeInitiative, setActiveInitiative] = useState<Initiative | null>(null);

  const filtered = allInitiatives.filter(i =>
    (selectedType ? i.type === selectedType : true) &&
    (selectedCategory ? i.category === selectedCategory : true)
  );

  const handleResetFilters = () => {
    setSelectedType('');
    setSelectedCategory('');
  };

  return (
    <div className={styles.container}>


      <div className={styles.content_info}>
        <h2 className={styles.content_text}>Знаете ли вы достаточно отвечественных иницатив и проектов в сфере ЦКН?</h2>
        <span className={styles.content_text}>
          Взаимодействуйте с компонентом ниже, чтобы изучить инициативы. 
          Используйте фильтры, чтобы контрастировать инициативы согласно классификации из предыдщего урока.
        </span>
     

      <h1>Каталог российских инициатив: </h1>
      </div>

      <div className={styles.filters}>
        <select value={selectedType} onChange={e => setSelectedType(e.target.value as any)}>
          <option value="">Все типы</option>
          <option value="частные">частные</option>
          <option value="государственные">государственные</option>
        </select>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value as any)}>
          <option value="">Все категории</option>
          <option value="фонды">фонды</option>
          <option value="образовательные проекты">образовательные проекты</option>
          <option value="веб-ресурсы">веб-ресурсы</option>
        </select>
      </div>

      <button className={styles.resetButton} onClick={handleResetFilters}>
        Сбросить фильтры
      </button>

      <div className={styles.cardGrid}>
        {filtered.map((initiative) => (
          <Card key={initiative.id} initiative={initiative} onClick={() => setActiveInitiative(initiative)} />
        ))}
      </div>

      {activeInitiative && (
        <Modal initiative={activeInitiative} onClose={() => setActiveInitiative(null)} />
      )}
      <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
        Логотипы, представленные на этой странице, используются исключительно в образовательных целях — для идентификации, обзора и анализа соответствующих проектов в рамках дипломной работы. Все права на логотипы принадлежат их законным владельцам. Использование не предполагает коммерческой выгоды, а также не свидетельствует о поддержке или аффилиации со стороны указанных организаций.
      </p>

    </div>


  );
};

export default EMarket;