'use client'

import React, { useState } from 'react'
import { Clock } from 'lucide-react'
import { FAMILY_SERVICES } from '@/constants/services'
import {
  FamilyPricingCard,
  type FamilyPricingOption,
} from './FamilySection/FamilyPricingCard'
import { ContactCard } from '@/app/components/shared/ContactCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import { FAMILY_GALLERY } from '@/constants/gallery'
import { GridWrapper } from '../uiElements/wrappers/GridWrapper'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import { CardItemHeader, CardItemSubHeader } from '../uiElements/Typography'
import { MainColumn } from '../uiElements/wrappers/MainColumn'

// ============================================================================
// Pricing Options Configuration
// ============================================================================

const FAMILY_PRICING_OPTIONS: FamilyPricingOption[] = [
  {
    name: FAMILY_SERVICES.personalSession.types[0].name,
    description: FAMILY_SERVICES.personalSession.types[0].description,
    price: FAMILY_SERVICES.personalSession.types[0].priceFormatted,
    additional: FAMILY_SERVICES.personalSession.types[0].additional,
    message:
      'Здравствуйте, Элеонора! Интересует консультация "Гармония отношений в паре, родитель/ребенок". Расскажите подробнее...',
  },
  {
    name: FAMILY_SERVICES.personalSession.types[1].name,
    description: FAMILY_SERVICES.personalSession.types[1].description,
    price: FAMILY_SERVICES.personalSession.types[1].priceFormatted,
    message:
      'Здравствуйте, Элеонора! Интересует консультация "Разрешение конфликтов в паре". Расскажите подробнее...',
  },
]

// ============================================================================
// Main Component
// ============================================================================

const FamilySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="family" className="section-even">
      <GridWrapper>
        {/* Left Column - Pricing */}
        <MainColumn>
          {/* Title Card */}
          <HeaderCardItem>
            <CardItemHeader text={FAMILY_SERVICES.personalSession.title} />
          </HeaderCardItem>

          {/* Pricing Card */}
          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-md font-semibold text-gray-800 mb-3">
              Виды консультаций:
            </h3>
            <ul className="space-y-3 text-sm text-gray-800 leading-relaxed">
              {FAMILY_PRICING_OPTIONS.map((option, index) => (
                <FamilyPricingCard key={index} option={option} />
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <ContactCard message="Здравствуйте, Элеонора! Интересует семейная консультация. Расскажите подробнее о..." />
        </MainColumn>

        {/* Right Column - Duration and Gallery */}
        <MainColumn>
          {/* Description Card */}
          <HeaderCardItem>
            <CardItemSubHeader
              text={FAMILY_SERVICES.personalSession.description}
            />
          </HeaderCardItem>
          <div className="flex-1 flex flex-col gap-3">
            {/* Duration Card */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
              <div className="flex gap-3 items-center">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>
                    Продолжительность {FAMILY_SERVICES.personalSession.duration}
                  </strong>
                </p>
              </div>
            </div>

            {/* Gallery Card */}
            <GalleryCard
              images={FAMILY_GALLERY}
              onImageClick={setSelectedImage}
            />
          </div>
        </MainColumn>
      </GridWrapper>

      {/* Image Popup Modal */}
      <ImagePopup
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}

export default FamilySection
