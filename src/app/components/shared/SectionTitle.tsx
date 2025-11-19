import React from 'react'

interface SectionTitleProps {
  title: string
}

/**
 * Reusable section title card component
 * Matches the PrivateSession title card styling with glass-morphism effect
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 mx-6 h-[110px] rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition flex items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  )
}
