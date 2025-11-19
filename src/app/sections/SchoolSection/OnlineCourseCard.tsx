'use client'

import React from 'react'
import { Video } from 'lucide-react'
import { SCHOOL_SERVICES } from '@/constants/services'

/**
 * Online course pricing card with modules breakdown
 */
export const OnlineCourseCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-md font-semibold text-gray-800 mb-3">Модули:</h3>
      <ul className="space-y-3 text-sm text-gray-800 leading-relaxed mb-4">
        {SCHOOL_SERVICES.onlineCourse.modules.map((module, index) => (
          <li
            key={index}
            className="flex gap-2 items-start px-4 py-3 rounded-lg border border-orange-200 bg-orange-50/50 hover:bg-orange-50 transition-colors"
          >
            <Video className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <strong>{module.name}</strong> ({module.lessons} уроков) —{' '}
              <strong className="text-orange-700">{module.priceFormatted}</strong>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-4 bg-orange-50 rounded-lg border-2 border-orange-300 shadow-sm">
        <p className="text-sm text-gray-800">
          <strong>Полный пакет:</strong>{' '}
          {SCHOOL_SERVICES.onlineCourse.fullPackage.totalLessons} уроков —{' '}
          <strong className="text-orange-700 text-lg">
            {SCHOOL_SERVICES.onlineCourse.fullPackage.priceFormatted}
          </strong>
        </p>
      </div>
    </div>
  )
}
