import aboutData from '@/data/about.json'

/**
 * Typed constants for about page content
 * This provides type safety and follows the architectural pattern
 * established in contacts.ts
 */
export const ABOUT = {
  title: aboutData.title,
  paragraph0: aboutData.paragraph0,
  paragraph1: aboutData.paragraph1,
  paragraph2: aboutData.paragraph2,
  introduction: aboutData.introduction,
  subtitle1: aboutData.subtitle1,
  education: aboutData.education,
  subtitle2: aboutData.subtitle2,
  articles: aboutData.articles,
  subtitle3: aboutData.subtitle3,
  companies: aboutData.companies,
} as const

export type AboutData = typeof ABOUT
