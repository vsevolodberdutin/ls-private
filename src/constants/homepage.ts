/**
 * Typed constants for homepage typography
 * This provides type safety and follows the architectural pattern
 */
export const HOMEPAGE = {
  title: 'Пойми себя на личной сессии с Элеонорой Бердутиной',
  subtitle1: 'Счастье жизни человека - в его окружении',
  subtitle2: 'и в развитии умения строить диалог друг с другом.',
  subtitle3: 'Так давайте учиться жить ярче и полнее уже сейчас!',
} as const

export type HomepageData = typeof HOMEPAGE
