import { useEffect } from 'react';
import { getBadges, saveBadges } from './badgesUtils';
import { Badge } from './badgesData';
import courseData from '../courseData.tsx';

export const useBadgeLogic = (
  sectionId: number,
  completedLessons: number,
  totalLessons: number,
  onBadgeAchieved: (badge: Badge) => void
) => {
  useEffect(() => {
    if (completedLessons === totalLessons) {
      const badges = getBadges();
      const badgeIndex = badges.findIndex(b => b.sectionId === sectionId && !b.achieved);
      if (badgeIndex !== -1) {
        badges[badgeIndex].achieved = true;
        badges[badgeIndex].dateAchieved = new Date().toISOString();
        saveBadges(badges);
        onBadgeAchieved(badges[badgeIndex]);
      }
    }
  }, [completedLessons, totalLessons, sectionId, onBadgeAchieved]);
};
