'use client'

import React from 'react'
import { GraduationCap, Award, Clock } from 'lucide-react'
import { TEACHING_SERVICES } from '@/constants/services'

/**
 * Strategic coaching card with duration, description, and benefits
 */
export const StrategicCoachingCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
      {/* Duration */}
      <div className="flex gap-3 items-start mb-4">
        <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
          <Clock className="w-4 h-4 text-orange-500" />
        </div>
        <div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>{TEACHING_SERVICES.strategicCoaching.duration}</strong>
          </p>
        </div>
      </div>

      <hr className="my-4 border-orange-200" />

      {/* Details */}
      <ul className="space-y-3 text-sm text-gray-700 leading-relaxed mb-4">
        <li className="flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-4 h-4 text-orange-500" />
          </div>
          {TEACHING_SERVICES.strategicCoaching.description}
        </li>
        <li className="flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
            <Award className="w-4 h-4 text-orange-500" />
          </div>
          {TEACHING_SERVICES.strategicCoaching.target}
        </li>
      </ul>

      <hr className="my-4 border-orange-200" />

      {/* Pricing */}
      <div>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          {TEACHING_SERVICES.strategicCoaching.priceFormatted}
        </p>
        <p className="text-xs text-gray-500 p-2 bg-orange-50 rounded-lg border border-orange-200">
          * {TEACHING_SERVICES.strategicCoaching.bonus}
        </p>
      </div>
    </div>
  )
}
