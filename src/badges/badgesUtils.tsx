// badgesUtils.ts
import { initialBadges, Badge } from './badgesData';

const BADGES_KEY = 'userBadges';

export const getBadges = (): Badge[] => {
    const stored = localStorage.getItem(BADGES_KEY);
    if (stored) {
      const parsed: Badge[] = JSON.parse(stored);
      // Объединяем с initialBadges — если в stored чего-то не хватает
      const merged = initialBadges.map(b => {
        const existing = parsed.find(pb => pb.sectionId === b.sectionId);
        return existing ? { ...b, ...existing } : b;
      });
      return merged;
    }
    localStorage.setItem(BADGES_KEY, JSON.stringify(initialBadges));
    return initialBadges;
  };
  

export const saveBadges = (badges: Badge[]) => {
  localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
};
