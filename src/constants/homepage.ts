import homepageData from '@/data/homepage-typography.json'

/**
 * Typed constants for homepage typography
 * This provides type safety and follows the architectural pattern
 */
export const HOMEPAGE = {
  title: homepageData.title,
  subtitle1: homepageData.subtitle1,
  subtitle2: homepageData.subtitle2,
  subtitle3: homepageData.subtitle3,
} as const

export type HomepageData = typeof HOMEPAGE
