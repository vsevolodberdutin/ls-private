'use client'

import React from 'react'
import { MessageCircle, Check, Clock, Info } from 'lucide-react'

export interface TeachingCourse {
  name: string
  duration?: string
  format?: string
  subtitle?: string
  description?: string
  requirement?: string
  target?: string
  features?: readonly string[]
  modules?: readonly {
    readonly name: string
    readonly hours: string
    readonly topics: string
  }[]
  price: string
  message: string
}

interface TeachingPricingCardProps {
  course: TeachingCourse
  hideFields?: {
    name?: boolean
    duration?: boolean
    format?: boolean
    target?: boolean
    features?: boolean
  }
}

/**
 * Pricing card for teaching courses
 * Displays course details, modules, features, price, and contact button
 */
export const TeachingPricingCard: React.FC<TeachingPricingCardProps> = ({
  course,
  hideFields = {},
}) => {
  const whatsappUrl = `https://wa.me/79103811250?text=${encodeURIComponent(course.message)}`

  return (
    <div className="bg-white/60 backdrop-blur-xl
      rounded-2xl border border-orange-200 p-6
      shadow-sm
      transition
      hover:shadow-md">
      {/* Course Name */}
      {!hideFields.name && (
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {course.name}
        </h3>
      )}

      {/* Subtitle */}
      {course.subtitle && (
        <div className="text-sm text-gray-600 italic mb-3">
          {course.subtitle}
        </div>
      )}

      {/* Duration & Format */}
      {!hideFields.duration &&
        !hideFields.format &&
        (course.duration || course.format) && (
          <div className="mb-3 space-y-1">
            {course.duration && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>{course.duration}</span>
              </div>
            )}
            {course.format && (
              <div className="text-xs text-gray-600 leading-relaxed">
                {course.format}
              </div>
            )}
          </div>
        )}

      {/* Target Audience */}
      {!hideFields.target && course.target && (
        <div className="mb-3
          rounded-lg border border-orange-100 bg-orange-50/50 p-3">
          <div className="text-xs font-semibold text-orange-700 mb-1">
            Для кого:
          </div>
          <div className="text-sm text-gray-700">{course.target}</div>
        </div>
      )}

      {/* Description */}
      {course.description && (
        <div className="mb-3 text-sm text-gray-600 leading-relaxed">
          {course.description}
        </div>
      )}

      {/* Features */}
      {!hideFields.features &&
        course.features &&
        course.features.length > 0 && (
          <div className="mb-3">
            <div className="text-xs font-semibold text-gray-700 mb-2">
              Особенности программы:
            </div>
            <ul className="space-y-1.5">
              {course.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-2 items-start text-sm text-gray-700"
                >
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      {/* Modules */}
      {course.modules && course.modules.length > 0 && (
        <div className="mb-3">
          <div className="text-xs font-semibold text-gray-700 mb-2">
            Программа курса:
          </div>
          <div className="space-y-2">
            {course.modules.map((module, index) => (
              <div
                key={index}
                className="rounded-lg border border-orange-100 bg-orange-50/30 p-3"
              >
                <div className="font-semibold text-sm text-gray-800 mb-1">
                  {module.name} <span className="text-xs">({module.hours})</span>
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  {module.topics}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Requirement */}
      {course.requirement && (
        <div className="mb-3 flex gap-2 items-start
          rounded-lg border border-blue-200 bg-blue-50 p-3">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-800">{course.requirement}</div>
        </div>
      )}

      {/* Price */}
      <div className="text-2xl font-bold text-orange-700 mb-4">
        {course.price}
      </div>

      {/* Contact Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-white
          rounded-lg bg-green-500 px-4 py-3
          transition-colors
          hover:bg-green-600"
      >
        <MessageCircle className="w-4 h-4" />
        Записаться
      </a>
    </div>
  )
}
