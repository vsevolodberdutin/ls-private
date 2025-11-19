'use client'

import React from 'react'
import { TEACHING_SERVICES } from '@/constants/services'

/**
 * Group training card with levels and pricing
 */
export const GroupTrainingCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        {TEACHING_SERVICES.groupTraining.description}
      </p>

      <h3 className="text-md font-semibold text-gray-800 mb-3">Уровни обучения:</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {TEACHING_SERVICES.groupTraining.levels.map((level) => (
          <span
            key={level}
            className="px-4 py-2 bg-orange-100 text-orange-700 text-sm rounded-full border border-orange-200 hover:bg-orange-200 transition"
          >
            {level}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-orange-200">
        <p className="text-lg font-semibold text-gray-800">
          {TEACHING_SERVICES.groupTraining.priceFormatted}
        </p>
      </div>
    </div>
  )
}
