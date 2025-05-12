import React, { useState } from 'react';
import styles from './dragDrop2.module.css';

interface Item {
  id: string;
  text: string;
}

interface Match {
  id: string;
  description: string;
}

const items: Item[] = [
  {
    id: '1',
    text: 'Первая международная конференция по охране произведений искусства в Париже в 1889 году',
  },
  {
    id: '2',
    text: 'Программа "Память мира"',
  },
  {
    id: '3',
    text: 'Программа "Информация для всех"',
  },
  {
    id: '4',
    text: '«Хартия о сохранении цифрового наследия» (2003)',
  },
];

const correctMatches: Match[] = [
  {
    id: '1',
    description:
      'Первая международная конференция по охране произведений искусства в Париже в 1889 году была посвящена вопросам сохранения культурных ценностей и стала важным шагом в международном сотрудничестве в области охраны наследия.',
  },
  {
    id: '2',
    description:
      'Программа "Память мира" ЮНЕСКО направлена на сохранение культурных и документальных памятников, имеющих мировое значение для истории человечества.',
  },
  {
    id: '3',
    description:
      'Программа "Информация для всех" ЮНЕСКО охватывает темы доступа к информации и ее сохранения для всех, независимо от национальной и культурной принадлежности.',
  },
  {
    id: '4',
    description:
      '«Хартия о сохранении цифрового наследия» (2003) была принята для защиты цифровых ресурсов и обеспечения их долговечности в условиях стремительно развивающихся технологий.',
  },
];

const dragDrop2: React.FC = () => {
  const [matchedItems, setMatchedItems] = useState<{ [key: string]: string }>({});
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };

  const handleDrop = (id: string) => {
    if (draggedItem && draggedItem !== id) {
      const newMatchedItems = { ...matchedItems, [draggedItem]: id };
      setMatchedItems(newMatchedItems);
    }
    setDraggedItem(null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const renderItem = (item: Item) => (
    <div
      key={item.id}
      className={`${styles.item} ${matchedItems[item.id] ? styles.matched : ''}`}
      draggable
      onDragStart={() => handleDragStart(item.id)}
    >
      {item.text}
    </div>
  );

  const renderDescription = (match: Match) => (
    <div
      key={match.id}
      className={styles.dropTarget}
      onDrop={() => handleDrop(match.id)}
      onDragOver={handleDragOver}
    >
      {matchedItems[match.id] ? match.description : 'Перетащите сюда описание'}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {items.map(renderItem)}
      </div>
      <div className={styles.dropArea}>
        {correctMatches.map(renderDescription)}
      </div>
    </div>
  );
};

export default dragDrop2;