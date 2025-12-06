/**
 * Typed constants for main page section
 * This is the single source of truth for all main page texts
 */

/**
 * Homepage header and subtitle texts
 */
export const HOMEPAGE = {
  title: 'Пойми себя на личной сессии с Элеонорой Бердутиной',
  subtitle1: 'Единственное, что сделает вас счастливым',
  subtitle2: '— это быть в гармонии с самим собой и окружающими вас людьми.',
  subtitle3: 'Этому можно и нужно учиться!',
} as const

/**
 * Main menu service offerings
 */
export const PRODUCTS = [
  {
    id: 'private',
    title: 'Личная сессия',
    subtitle:
      'Разберем сильные и слабые стороны вашего психотипа, профориентирование, понимание мотивации и развитие потенциала личности',
  },
  {
    id: 'learn',
    title: 'Обучение соционике',
    subtitle:
      'Изучение основ соционики, с акцентом на практики определения психотипов',
  },
  {
    id: 'family',
    title: 'Семейная консультация',
    subtitle:
      'Улучшение отношений в семье, с партнером, детско — родительские отношения, примирение при конфликтах',
  },
  {
    id: 'school',
    title: 'Школа осознанных родителей',
    subtitle:
      'Изучение методик, направленных на лучшее понимание своего ребенка и раскрытие его талантов',
  },
] as const

/**
 * Type exports for type safety
 */
export type HomepageData = typeof HOMEPAGE
export type Product = (typeof PRODUCTS)[number]
export type ProductsData = typeof PRODUCTS
