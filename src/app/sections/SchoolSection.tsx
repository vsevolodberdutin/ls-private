'use client'

import React, { useState } from 'react'
import { GridWrapper } from '../uiElements/wrappers/GridWrapper'
import { BookOpen, FileText } from 'lucide-react'
import { SCHOOL_SERVICES } from '@/constants/services'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import {
  CardItemHeader,
  CardItemSubHeader,
} from '../uiElements/Typography'
import { InfoCard } from '../components/shared/InfoCard'
import { FAQCard } from '../components/shared/FAQCard'
import { OnlineCourseCard } from './SchoolSection/OnlineCourseCard'
import { PsychotypeCard } from './SchoolSection/PsychotypeCard'
import { GalleryCard } from '../components/shared/GalleryCard'
import { ImagePopup } from '../components/shared/ImagePopup'
import { SCHOOL_GALLERY } from '@/constants/gallery'

/**
 * School Section - Conscious Parents School
 * Follows PrivateSession structure with title/description cards and two-column layout
 */
const SchoolSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="school" className="section-odd py-10">
      <GridWrapper>
        {/* Title Card */}
        <HeaderCardItem>
          <CardItemHeader text={'Школа осознанных родителей'} />
        </HeaderCardItem>
        {/* Description Card */}
        <HeaderCardItem>
          <CardItemSubHeader
            text={
              'Изучение методик направленных на лучшее понимание своего ребенка и раскрытие его талантов'
            }
          />
        </HeaderCardItem>
      </GridWrapper>

      <div className="-mt-4">
        <GridWrapper>
          {/* Left Column - Online Course */}
          <div className="flex-1 flex flex-col gap-3 mx-6">
            {/* Course Header */}
            <InfoCard icon={BookOpen}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {SCHOOL_SERVICES.onlineCourse.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>{SCHOOL_SERVICES.onlineCourse.format}</strong>
                  </p>
                </div>
              </div>
            </InfoCard>

            {/* Course Modules */}
            <OnlineCourseCard />

            {/* FAQ Card */}
            <FAQCard message="Здравствуйте, Элеонора! Интересует обучение в школе соционики. Расскажите подробнее о..." />
          </div>

          {/* Right Column - Psychotype Assessment */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Assessment Header */}
            <InfoCard icon={FileText}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {SCHOOL_SERVICES.psychotypeAssessment.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>{SCHOOL_SERVICES.psychotypeAssessment.format}</strong>
                  </p>
                </div>
              </div>
            </InfoCard>

            {/* Assessment Details */}
            <PsychotypeCard />

            {/* Gallery Card */}
            <GalleryCard images={SCHOOL_GALLERY} onImageClick={setSelectedImage} />
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

export default SchoolSection