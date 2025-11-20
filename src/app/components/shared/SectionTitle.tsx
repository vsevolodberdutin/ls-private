import React from 'react'
import { HeaderCardItem } from '@/app/uiElements/cardItems/HeaderCardItem'

interface SectionTitleProps {
  title: string
}

/**
 * Reusable section title card component
 * Uses HeaderCardItem for consistent styling
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <HeaderCardItem>
      <h2 className="text-2xl font-bold text-gray-800 text-center">{title}</h2>
    </HeaderCardItem>
  )
}
