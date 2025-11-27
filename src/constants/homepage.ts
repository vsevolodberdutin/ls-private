/**
 * Typed constants for homepage typography
 * This provides type safety and follows the architectural pattern
 */
export const HOMEPAGE = {
  title: 'Пойми себя на личной сессии с Элеонорой Бердутиной',
  subtitle1: 'Единственное, что сделает вас счастливым',
  subtitle2: '— это быть в гармонии с самим собой и окружающими вас людьми.',
  subtitle3: 'Этому можно и нужно учиться!',
} as const

export type HomepageData = typeof HOMEPAGE
