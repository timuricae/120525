import React from 'react';
import { Badge } from './badgesData';
import styles from './BadgesCollectionModal.module.css';

interface Props {
    badges: Badge[];
    onClose: () => void;
}

const BadgesCollectionModal: React.FC<Props> = ({ badges, onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>🎖 Моя коллекция бейджей</h2>
                <div className={styles.badgeGrid}>
                    {badges.map((badge) => (
                        <div
                            key={badge.sectionId}
                            className={`${styles.badgeItem} ${badge.achieved ? styles.achieved : styles.locked}`}
                        >
                            <div className={styles.emoji}>{badge.emoji}</div>
                            <div className={styles.title}>{badge.title}</div>
                            <div className={styles.desc}>{badge.description}</div>
                            {!badge.achieved && <div className={styles.lock}>🔒</div>}
                            {badge.achieved && badge.dateAchieved && (
                                <div className={styles.date}>📅 {badge.dateAchieved}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default BadgesCollectionModal;
