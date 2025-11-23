'use client'

import React, { useState } from 'react'
import { Award } from 'lucide-react'
import { TEACHING_SERVICES } from '@/constants/services'
import {
  TeachingPricingCard,
  type TeachingCourse,
} from './TeachingSection/TeachingPricingCard'
import { ContactCard } from '@/app/components/shared/ContactCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import { TEACHING_GALLERY } from '@/constants/gallery'
import { GridWrapper } from '../uiElements/wrappers/GridWrapper'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import { CardItemHeader, CardItemSubHeader } from '../uiElements/Typography'

// ============================================================================
// Courses Configuration
// ============================================================================

const TEACHING_COURSES: TeachingCourse[] = TEACHING_SERVICES.courses.map(
  (course) => ({
    name: course.name,
    duration: 'duration' in course ? course.duration : undefined,
    format: 'format' in course ? course.format : undefined,
    subtitle: 'subtitle' in course ? course.subtitle : undefined,
    description: 'description' in course ? course.description : undefined,
    requirement: 'requirement' in course ? course.requirement : undefined,
    target: 'target' in course ? course.target : undefined,
    features: 'features' in course ? course.features : undefined,
    modules: 'modules' in course ? course.modules : undefined,
    price: course.priceFormatted,
    message: `Здравствуйте, Элеонора! Интересует "${course.name}". Расскажите подробнее...`,
  })
)

// ============================================================================
// Main Component
// ============================================================================

const TeachingSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="learn" className="section-odd">
      <GridWrapper>
        {/* Title Card */}
        <HeaderCardItem>
          <CardItemHeader text={TEACHING_SERVICES.title} />
        </HeaderCardItem>
        {/* Description Card */}
        <HeaderCardItem>
          <CardItemSubHeader text={TEACHING_SERVICES.description} />
        </HeaderCardItem>

        {/* Left Column - Courses */}
        <div className="flex-1 flex flex-col gap-3 mx-6">
          {TEACHING_COURSES.map((course, index) => (
            <TeachingPricingCard key={index} course={course} />
          ))}

          {/* Contact Card */}
          <ContactCard message="Здравствуйте, Элеонора! Интересует обучение соционике. Расскажите подробнее о..." />
        </div>

        {/* Right Column - Strategic Session and Gallery */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Strategic Session Card */}
          <div className="bg-white/60 backdrop-blur-xl
            rounded-2xl border border-orange-200 p-6
            shadow-sm
            transition
            hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-11 h-11 flex-shrink-0
                rounded-full border border-orange-200 bg-orange-50">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {TEACHING_SERVICES.strategicSession.name}
              </h3>
            </div>

            <div className="space-y-3">
              {/* Goal */}
              <div>
                <div className="text-xs font-semibold text-gray-700 mb-1">
                  Цель:
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  {TEACHING_SERVICES.strategicSession.goal}
                </div>
              </div>

              {/* Format */}
              <div>
                <div className="text-xs font-semibold text-gray-700 mb-1">
                  Состав:
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  {TEACHING_SERVICES.strategicSession.format}
                </div>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-orange-700 pt-2">
                {TEACHING_SERVICES.strategicSession.priceFormatted}
              </div>

              {/* Contact Button */}
              <a
                href={`https://wa.me/79103811250?text=${encodeURIComponent('Здравствуйте, Элеонора! Интересует индивидуальная стратегическая сессия для управленцев. Расскажите подробнее...')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-white
                  rounded-lg bg-green-500 px-4 py-3
                  transition-colors
                  hover:bg-green-600"
              >
                Записаться
              </a>
            </div>
          </div>

          {/* Gallery Card */}
          <GalleryCard
            images={TEACHING_GALLERY}
            onImageClick={setSelectedImage}
          />
        </div>
      </GridWrapper>

      {/* Image Popup Modal */}
      <ImagePopup
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}

export default TeachingSection
