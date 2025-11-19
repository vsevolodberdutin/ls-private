import React from 'react'

interface SectionDescriptionProps {
  description: string
}

/**
 * Reusable section description card component
 * Matches the PrivateSession description card styling with glass-morphism effect
 */
export const SectionDescription: React.FC<SectionDescriptionProps> = ({ description }) => {
  return (
    <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 h-[110px] rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition flex items-center">
      <p className="text-m text-gray-500 max-w-3xl mx-auto">{description}</p>
    </div>
  )
}
