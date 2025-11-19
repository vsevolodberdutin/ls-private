'use client'

import React from 'react'
import { Users, Heart } from 'lucide-react'
import { FAMILY_SERVICES } from '@/constants/services'

/**
 * Session types card showing different family consultation types and pricing
 */
export const SessionTypesCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-md font-semibold text-gray-800 mb-3">Типы консультаций:</h3>
      <ul className="space-y-3 text-sm text-gray-800 leading-relaxed">
        {FAMILY_SERVICES.personalSession.types.map((type, index) => (
          <li
            key={index}
            className="px-4 py-3 rounded-lg border border-orange-200 bg-orange-50/50 hover:bg-orange-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                {index === 0 ? (
                  <Heart className="w-4 h-4 text-orange-500" />
                ) : (
                  <Users className="w-4 h-4 text-orange-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{type.name}</div>
                {'description' in type && (
                  <div className="text-gray-600 text-xs mt-0.5">{type.description}</div>
                )}
                <div className="text-orange-700 font-semibold mt-1">
                  {type.priceFormatted}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
