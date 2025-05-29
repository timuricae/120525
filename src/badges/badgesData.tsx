export interface Badge {
    sectionId: number;
    title: string;
    description: string;
    achieved: boolean;
    emoji: string;
    shown?: boolean;
    dateAchieved?: string;
  }
  
  export const initialBadges: Badge[] = [
    {
      sectionId: 1,
      title: 'Эксперт по объектам ЮНЕСКО',
      description: 'Пройден весь раздел 1',
      achieved: false,
      emoji: '🏛️',
    },
    {
      sectionId: 2,
      title: 'Теоретик ЦКН',
      description: 'Пройден весь раздел 2',
      achieved: false,
      emoji: '📚',
    },
    {
      sectionId: 3,
      title: 'Историк цифровизации',
      description: 'Пройден весь раздел 3',
      achieved: false,
      emoji: '🕰️',
    },
    {
      sectionId: 4,
      title: 'Междисциплинарный исследователь',
      description: 'Пройден весь раздел 4',
      achieved: false,
      emoji: '🔬',
    },
    {
      sectionId: 5,
      title: 'Менеджер жизненного цикла',
      description: 'Пройден весь раздел 5',
      achieved: false,
      emoji: '♻️',
    },
    {
      sectionId: 6,
      title: 'Навигатор доступа к ЦКН',
      description: 'Пройден весь раздел 6',
      achieved: false,
      emoji: '🧭',
    },
    {
      sectionId: 7,
      title: 'Выпускник курса',
      description: 'Пройдено финальное испытание',
      achieved: false,
      emoji: '🎓',
    },
  ];
  