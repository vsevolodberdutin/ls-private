'use client'

import React, { useState } from 'react'
import { BookOpen, Target } from 'lucide-react'
import { SCHOOL_SERVICES } from '@/constants/services'
import {
  SchoolPricingCard,
  type SchoolPackage,
} from './SchoolSection/SchoolPricingCard'
import { ContactCard } from '@/app/components/shared/ContactCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import { SCHOOL_GALLERY } from '@/constants/gallery'
import { GridWrapper } from '../uiElements/wrappers/GridWrapper'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import { CardItemHeader, CardItemSubHeader } from '../uiElements/Typography'

// ============================================================================
// Pricing Options Configuration
// ============================================================================

const SCHOOL_PACKAGES: SchoolPackage[] = SCHOOL_SERVICES.packages.map(
  (pkg, index) => ({
    name: pkg.name,
    price: pkg.priceFormatted,
    note: 'note' in pkg ? pkg.note : undefined,
    features: pkg.features,
    message: `Здравствуйте, Элеонора! Интересует "${pkg.name}". Расскажите подробнее...`,
  })
)

// ============================================================================
// Main Component
// ============================================================================

const SchoolSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="school" className="section-odd">
      <GridWrapper>
        {/* Title Card */}
        <HeaderCardItem>
          <CardItemHeader text={SCHOOL_SERVICES.title} />
        </HeaderCardItem>
        {/* Description Card */}
        <HeaderCardItem>
          <CardItemSubHeader text={SCHOOL_SERVICES.description} />
        </HeaderCardItem>

        {/* Left Column - Course Goals and Marathon Info */}
        <div className="flex-1 flex flex-col gap-3 mx-6">
          {/* Course Goals Card */}
          <div className="bg-white/60 backdrop-blur-xl
            rounded-2xl border border-orange-200 p-6
            shadow-sm
            transition
            hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-11 h-11 flex-shrink-0
                rounded-full border border-orange-200 bg-orange-50">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-md font-semibold text-gray-800">
                Видео-курс из 16 уроков о том как:
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed ml-3">
              {SCHOOL_SERVICES.courseGoals.map((goal, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-orange-500 font-semibold">
                    {index + 1})
                  </span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Marathon Info Card */}
          <div className="bg-white/60 backdrop-blur-xl
            rounded-2xl border border-orange-200 p-6
            shadow-sm
            transition
            hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-11 h-11 flex-shrink-0
                rounded-full border border-orange-200 bg-orange-50">
                <BookOpen className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-md font-semibold text-gray-800">
                2 Марафона по 8 уроков
              </h3>
            </div>
            <div className="space-y-3">
              {SCHOOL_SERVICES.marathons.map((marathon, index) => (
                <div key={index} className="text-sm">
                  <div className="font-semibold text-gray-800 mb-1">
                    {marathon.name}
                  </div>
                  <div className="text-gray-600 leading-relaxed">
                    {marathon.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <ContactCard message="Здравствуйте, Элеонора! Интересует обучение в школе соционики. Расскажите подробнее о..." />
        </div>

        {/* Right Column - Pricing Packages */}
        <div className="flex-1 flex flex-col gap-3">
          {SCHOOL_PACKAGES.map((pkg, index) => (
            <SchoolPricingCard key={index} package={pkg} />
          ))}

          {/* Gallery Card */}
          <GalleryCard
            images={SCHOOL_GALLERY}
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

export default SchoolSection
