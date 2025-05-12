import React, { useState, useRef, useEffect } from 'react';

import { CourseData, SectionData } from '../courseData.tsx'; // Добавим типы для данных курса
import styles from '../components/Map.module.css'
// import { LessonInteractions } from '../courseData.tsx'; // Путь к файлу с типами
import courseData from '../courseData.tsx';

// import { useSectionProgress } from '../useSectionProgress.tsx';
// import { useProgressContext } from '../ProgressContext';


interface Location {
  id: string;
  title: string;
  imgSrc?: string;
  link?: string;
  description: React.ReactNode[];
  topPx: number;
  leftPx: number;
}

interface Props {
  locations: Location[];
  mapImage: string;
  lessonId: string;
  courseData: CourseData;  // Добавили это поле
  mapWidth?: number;
  mapHeight?: number;
  disableShadow?: boolean;
}

const Map: React.FC<Props> = ({
  locations,
  mapImage,
  lessonId,
  courseData,  // Получаем courseData
  mapWidth,
  mapHeight,
  disableShadow,
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });

  const buttonsRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const mapRef = useRef<HTMLImageElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Получаем прогресс и функцию регистрации взаимодействий из хука
  // const { progress, registerInteraction } = useSectionProgress(lessonId, courseData); // при вызовве карты да надо указать номер раздела 


  useEffect(() => {
    if (mapRef.current) {
      const handleMapLoad = () => {
        setMapDimensions({
          width: mapRef.current?.naturalWidth || 0,
          height: mapRef.current?.naturalHeight || 0,
        });
      };
      mapRef.current.onload = handleMapLoad;
    }
  }, []);

  useEffect(() => {
    if (activeModal && modalRef.current) {
      requestAnimationFrame(() => {
        const modalRect = modalRef.current!.getBoundingClientRect();
        const button = buttonsRef.current[activeModal]!;

        if (!button) return;

        const buttonRect = button.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const padding = 10;

        let top = (windowHeight - modalRect.height) / 2;
        if (top < padding) top = padding;

        let left = buttonRect.right + padding;
        if (left + modalRect.width > windowWidth) {
          left = buttonRect.left - modalRect.width - padding;
          if (left < padding) {
            left = (windowWidth - modalRect.width) / 2;
          }
        }

        setModalPosition({ top, left });
      });
    }
  }, [activeModal]);

  // const isInteractionCompleted = (interactionType: keyof LessonInteractions, lessonId: number): boolean => {
  //   const completedInteractions = JSON.parse(localStorage.getItem('completedInteractions') || '{}');
  //   return completedInteractions[lessonId]?.[interactionType] ?? false;
  // };

  const [clickedLocations, setClickedLocations] = useState<Set<string>>(new Set());

  // const { triggerUpdate } = useProgressContext();

  const handleButtonClick = (id: string) => {
    if (activeModal === id) {
      setActiveModal(null);
      setActiveButtonId(null);
      return;
    }

    
    // const interactionType = 'mapButtons';

    // if (!clickedLocations.has(id)) {
    //   setClickedLocations((prev) => {
    //     const updated = new Set(prev).add(id);
    //     const index = locations.findIndex(location => location.id === id);

    //     // Регистрируем уникальное нажатие
    //     registerInteraction(Number(lessonId), interactionType, index);
    //     return updated;
    //   });
    // }
  

    setActiveModal(id);
    setActiveButtonId(id);
    // triggerUpdate();
  };

  const closeModal = () => {
    setActiveModal(null);
    setActiveButtonId(null);
  };

  return (
    <div className={styles.mapWrapper}>
      <h1 className={styles.mapTitle}>Нажмите на все отмеченные точки на карте, чтобы узнать больше:</h1>
      <div
        className={styles.containerWorldMap}
        style={{ width: mapWidth, height: mapHeight, position: 'relative' }}
      >
        <img
          ref={mapRef}
          src={mapImage}
          alt="Карта"
          className={styles.backgroundWorldMap}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            boxShadow: disableShadow ? 'none' : '0 4px 10px rgba(0, 0, 0, 0.15)',
            borderRadius: '12px',
          }}
        />
        {locations.map(({ id, topPx, leftPx }) => (
          <button
            key={id}
            ref={(el) => (buttonsRef.current[id] = el)}
            className={`${styles.btnWorldMap} ${activeButtonId === id ? styles.active : ''}`}
            style={{ top: `${topPx}px`, left: `${leftPx}px`, position: 'absolute' }}
            onClick={() => handleButtonClick(id)}
          >
            <svg width="16" height="21" viewBox="0 0 16 21" fill="bdbdbd" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.262 20.134C7.262 20.134 0 14.018 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 14.018 8.738 20.134 8.738 20.134C8.334 20.506 7.669 20.502 7.262 20.134ZM8 11.5C8.45963 11.5 8.91475 11.4095 9.33939 11.2336C9.76403 11.0577 10.1499 10.7999 10.4749 10.4749C10.7999 10.1499 11.0577 9.76403 11.2336 9.33939C11.4095 8.91475 11.5 8.45963 11.5 8C11.5 7.54037 11.4095 7.08525 11.2336 6.66061C11.0577 6.23597 10.7999 5.85013 10.4749 5.52513C10.1499 5.20012 9.76403 4.94231 9.33939 4.76642C8.91475 4.59053 8.45963 4.5 8 4.5C7.07174 4.5 6.1815 4.86875 5.52513 5.52513C4.86875 6.1815 4.5 7.07174 4.5 8C4.5 8.92826 4.86875 9.8185 5.52513 10.4749C6.1815 11.1313 7.07174 11.5 8 11.5Z" />
            </svg>
          </button>
        ))}
        {activeModal && (
          <>
            <div className={styles.backdrop} onClick={closeModal} />
            <Modal
              ref={modalRef}
              location={locations.find((loc) => loc.id === activeModal)!}
              onClose={closeModal}
              position={modalPosition}
            />
          </>
        )}
      </div>
    </div>
  );
};

interface ModalProps {
  location: Location;
  onClose: () => void;
  position: { top: number; left: number };
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ location, onClose, position }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.Modal}
        style={{
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
          zIndex: 9999,
        }}
      >
        <button onClick={onClose} className={styles.buttonModalClose}>
          ✕
        </button>
        <div className={styles.modalContent}>
          <h1>{location.title}</h1>
          {location.imgSrc && <img src={location.imgSrc} alt={location.title} />}
          <div className={styles.textContainer}>
            {location.description.map((node, i) => (
              <div key={i}>{node}</div>
            ))}
            {location.link && (
              <a
                href={location.link}
                className={styles.learnMoreBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Узнать больше
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
);


export default Map;