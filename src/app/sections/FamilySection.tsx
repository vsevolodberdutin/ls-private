'use client'

import React, { useState } from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { Heart } from 'lucide-react'
import { FAMILY_SERVICES } from '@/constants/services'
import { SectionTitle } from '../components/shared/SectionTitle'
import { SectionDescription } from '../components/shared/SectionDescription'
import { InfoCard } from '../components/shared/InfoCard'
import { ContactButtons } from '../components/shared/ContactButtons'
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
            {/* Session Header */}
            <InfoCard icon={Heart}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {FAMILY_SERVICES.personalSession.title}
                  </h2>
                </div>
              </div>
            </InfoCard>

            {/* Session Types */}
            <SessionTypesCard />
          </div>

          {/* Right Column - Areas and Contact */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Areas Cards */}
            <AreasCard />

            {/* Gallery Card */}
            <GalleryCard images={FAMILY_GALLERY} onImageClick={setSelectedImage} />

            {/* Contact Buttons */}
            <ContactButtons message="Здравствуйте, меня интересует семейная консультация. Расскажите подробнее..." />
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