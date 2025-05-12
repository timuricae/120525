import { ReactNode } from 'react';
import styles from './FlipCard.module.css';
import sync from '../assets/sync1.svg';

interface FlipCardProps {
  frontImage: string;
  backText?: string;
  backSlider?: ReactNode;
  flipped: boolean;
  onClick: () => void;
  width?: number;
  height?: number;
}

const FlipCard = ({
  frontImage,
  backText,
  backSlider,
  flipped,
  onClick,
  width,
  height,
}: FlipCardProps) => {
  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      style={{ width, height }}
      onClick={onClick}
    >
      <div className={`${styles.cardFace} ${styles.front}`}>
        <img src={frontImage} alt="card front" />
        <img className={styles.sync} src={sync} alt="sync icon" />
      </div>
      <div className={`${styles.cardFace} ${styles.back}`}>
        <div className={styles.backContent}>
          {backText && <span>{backText}</span>}
          {backSlider}
          <img className={styles.sync} src={sync} alt="sync icon" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
