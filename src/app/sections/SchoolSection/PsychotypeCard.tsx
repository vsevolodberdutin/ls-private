'use client'

import React from 'react'
import { Award } from 'lucide-react'
import { SCHOOL_SERVICES } from '@/constants/services'

/**
 * Psychotype assessment card with deliverables list
 */
export const PsychotypeCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-md font-semibold text-gray-800 mb-3">Вы получите:</h3>
      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed mb-4">
        {SCHOOL_SERVICES.psychotypeAssessment.deliverables.map((item, index) => (
          <li key={index} className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Award className="w-4 h-4 text-orange-500" />
            </div>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4 border-t border-orange-200">
        <p className="text-lg font-semibold text-gray-800">
          {SCHOOL_SERVICES.psychotypeAssessment.priceFormatted}
        </p>
      </div>
    </div>
  )
}
