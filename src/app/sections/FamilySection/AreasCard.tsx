'use client'

import React from 'react'
import { Home, Heart, Users, Lightbulb, Clock } from 'lucide-react'
import { FAMILY_SERVICES } from '@/constants/services'

/**
 * Areas of counseling card showing different focus areas
 */
export const AreasCard: React.FC = () => {
  const areaIcons = [Home, Heart, Users, Lightbulb]

  return (
    <>
      {/* Duration Card */}
      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
        <div className="flex gap-3 items-center">
          <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Продолжительность: {FAMILY_SERVICES.personalSession.duration}</strong>
          </p>
        </div>
      </div>

      {/* Areas Card */}
      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
        <h3 className="text-md font-semibold text-gray-800 mb-3">
          Области консультирования:
        </h3>
        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          {FAMILY_SERVICES.personalSession.areas.map((area, index) => {
            const Icon = areaIcons[index]
            return (
              <li key={index} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-orange-500" />
                </div>
                {area}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
