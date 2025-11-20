'use client'

import React, { useState } from 'react'
import { GridWrapper } from '../uiElements/wrappers/GridWrapper'
import { Users, TrendingUp } from 'lucide-react'
import { TEACHING_SERVICES } from '@/constants/services'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import {
  CardItemHeader,
  CardItemSubHeader,
} from '../uiElements/Typography'
import { InfoCard } from '../components/shared/InfoCard'
import { FAQCard } from '../components/shared/FAQCard'
import { GroupTrainingCard } from './TeachingSection/GroupTrainingCard'
import { StrategicCoachingCard } from './TeachingSection/StrategicCoachingCard'
import { GalleryCard } from '../components/shared/GalleryCard'
import { ImagePopup } from '../components/shared/ImagePopup'
import { TEACHING_GALLERY } from '@/constants/gallery'

/**
 * Teaching Section - Socionics Training
 * Follows PrivateSession structure with title/description cards and two-column layout
 */
const TeachingSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="learn" className="section-odd py-10">
      <GridWrapper>
        {/* Title Card */}
        <HeaderCardItem>
          <CardItemHeader text={'Обучение соционике'} />
        </HeaderCardItem>
        {/* Description Card */}
        <HeaderCardItem>
          <CardItemSubHeader
            text={
              'Изучение основ соционики, с акцентом на практики определения психотипов'
            }
          />
        </HeaderCardItem>
      </GridWrapper>

      <div className="-mt-4">
        <GridWrapper>
          {/* Left Column - Group Training */}
          <div className="flex-1 flex flex-col gap-3 mx-6">
            {/* Training Header */}
            <InfoCard icon={Users}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {TEACHING_SERVICES.groupTraining.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>{TEACHING_SERVICES.groupTraining.format}</strong>
                  </p>
                </div>
              </div>
            </InfoCard>

            {/* Training Details */}
            <GroupTrainingCard />

            {/* FAQ Card */}
            <FAQCard message="Здравствуйте, Элеонора! Интересует групповое обучение/коучинг. Расскажите подробнее о..." />
          </div>

          {/* Right Column - Strategic Coaching */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Coaching Header */}
            <InfoCard icon={TrendingUp}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {TEACHING_SERVICES.strategicCoaching.title}
                  </h2>
                </div>
              </div>
            </InfoCard>

            {/* Coaching Details */}
            <StrategicCoachingCard />

            {/* Gallery Card */}
            <GalleryCard images={TEACHING_GALLERY} onImageClick={setSelectedImage} />
          </div>
        </GridWrapper>
      </div>

      {/* Image Popup Modal */}
      <ImagePopup
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}

export default TeachingSection