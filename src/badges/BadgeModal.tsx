import React from 'react';
import { Badge } from './badgesData';
import styles from '../badges/BadgeModal.module.css';

interface Props {
  badge: Badge;
  onClose: () => void;
}

const BadgeModal: React.FC<Props> = ({ badge, onClose }) => (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.emoji}>{badge.emoji}</div>
        <h2>🎉 Поздравляем!</h2>
        <p>Вы получили бейдж: <strong>{badge.title}</strong></p>
        <p>{badge.description}</p>
      </div>
    </div>
  );
  

export default BadgeModal;
