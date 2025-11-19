'use client'

import React, { useState } from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { SectionTitle } from '../components/shared/SectionTitle'
import { SectionDescription } from '../components/shared/SectionDescription'
import { FAQCard } from '../components/shared/FAQCard'
import { SessionTypesCard } from './FamilySection/SessionTypesCard'
import { AreasCard } from './FamilySection/AreasCard'
import { GalleryCard } from '../components/shared/GalleryCard'
import { ImagePopup } from '../components/shared/ImagePopup'
import { FAMILY_GALLERY } from '@/constants/gallery'

/**
 * Family Section - Family Counseling
 * Follows PrivateSession structure with title/description cards and two-column layout
 */
const FamilySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="family" className="section-even py-10">
      <SectionWrapper>
        {/* Title Card */}
        <SectionTitle title="Семейная консультация" />
        {/* Description Card */}
        <SectionDescription description="- Улучшение отношений в семье, с партнером, детско — родительские отношения, примирение при конфликтах" />
      </SectionWrapper>

      <div className="-mt-4">
        <SectionWrapper>
          {/* Left Column - Session Types */}
          <div className="flex-1 flex flex-col gap-3 mx-6">
            {/* Session Types */}
            <SessionTypesCard />

            {/* FAQ Card */}
            <FAQCard message="Здравствуйте, Элеонора! Интересует семейная консультация. Расскажите подробнее о..." />
          </div>

          {/* Right Column - Areas and Contact */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Areas Cards */}
            <AreasCard />

            {/* Gallery Card */}
            <GalleryCard images={FAMILY_GALLERY} onImageClick={setSelectedImage} />
          </div>
        </SectionWrapper>
      </div>

      {/* Image Popup Modal */}
      <ImagePopup
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}

export default FamilySection