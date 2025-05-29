import React, { useEffect, useState } from 'react';
import { useProgressContext } from './ProgressContext';
import { getBadges, saveBadges } from './badges/badgesUtils';
import { Badge } from './badges/badgesData';
import BadgeModal from './badges/BadgeModal';
import courseData from './courseData';

const BadgeNotifier: React.FC = () => {
  const { lessonProgress, getSectionProgress } = useProgressContext();
  const [currentBadge, setCurrentBadge] = useState<Badge | null>(null);

  useEffect(() => {
    const allBadges = getBadges();
    const updatedBadges = [...allBadges];
    let badgeToShow: Badge | null = null;

    for (const section of courseData) {
      const { completed, total } = getSectionProgress(section.id);

      const badgeIndex = updatedBadges.findIndex(
        (b) => b.sectionId === section.id
      );

      if (
        badgeIndex !== -1 &&
        completed == 100 &&
        !updatedBadges[badgeIndex].achieved
      ) {
        // Помечаем бейдж как достигнутый
        updatedBadges[badgeIndex].achieved = true;
        updatedBadges[badgeIndex].dateAchieved = new Date().toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
        badgeToShow = updatedBadges[badgeIndex];
        break; // показываем только один бейдж за раз
      }
    }

    // Сохраняем, если обновили какие-то бейджи
    if (badgeToShow) {
      saveBadges(updatedBadges);
      setCurrentBadge(badgeToShow);
      return;
    }

    // Проверяем, есть ли уже достигнутый, но не показанный бейдж
    const unseen = updatedBadges.find((b) => b.achieved && !b.shown);
    if (unseen) {
      setCurrentBadge(unseen);
    }
  }, [lessonProgress]);

  const handleClose = () => {
    if (currentBadge) {
      const updated = getBadges().map((b) =>
        b.sectionId === currentBadge.sectionId ? { ...b, shown: true } : b
      );
      saveBadges(updated);
    }
    setCurrentBadge(null);
  };

  return currentBadge ? (
    <BadgeModal badge={currentBadge} onClose={handleClose} />
  ) : null;
};

export default BadgeNotifier;
