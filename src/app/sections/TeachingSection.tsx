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
import { InfoCard } from '@/app/components/shared/InfoCard'
import { TEACHING_GALLERY } from '@/constants/gallery'
import { GridProductWrapper } from '../uiElements/wrappers/GridWrapper'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import { CardItemHeader, CardItemSubHeader } from '../uiElements/Typography'
import { CardItem } from '../uiElements/cardItems/CardItem'
import { ContentColumn } from '../uiElements/wrappers/ContentColumn'
import { MainColumn } from '../uiElements/wrappers/MainColumn'

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
      <MainColumn>
        {/* HEADER */}
        <GridProductWrapper>
          {/* Title Card */}
          <HeaderCardItem>
            <CardItemHeader text={TEACHING_SERVICES.title} />
          </HeaderCardItem>
          {/* Description Card */}
          <HeaderCardItem>
            <CardItemSubHeader text={TEACHING_SERVICES.description} />
          </HeaderCardItem>
        </GridProductWrapper>

        {/* PRODUCTS */}
        <GridProductWrapper>
          {/* Left Column - Courses + Strategic Session */}
          <CardItem>
            <ContentColumn>
              {TEACHING_COURSES.map((course, index) => (
                <TeachingPricingCard key={index} course={course} />
              ))}

              {/* Strategic Session */}
              <InfoCard
                icon={<Award />}
                title={TEACHING_SERVICES.strategicSession.name}
                items={[
                  {
                    label: 'Цель:',
                    value: TEACHING_SERVICES.strategicSession.goal,
                  },
                  {
                    label: 'Состав:',
                    value: TEACHING_SERVICES.strategicSession.format,
                  },
                ]}
                price={TEACHING_SERVICES.strategicSession.priceFormatted}
                message="Здравствуйте, Элеонора! Интересует индивидуальная стратегическая сессия для управленцев. Расскажите подробнее..."
              />
            </ContentColumn>
          </CardItem>

          {/* Right Column - Gallery */}
          <GalleryCard
            images={TEACHING_GALLERY}
            onImageClick={setSelectedImage}
          />
        </GridProductWrapper>

        {/* Contact Card */}
        <GridProductWrapper>
          <ContactCard message="Здравствуйте, Элеонора! Интересует обучение соционике. Расскажите подробнее о..." />
        </GridProductWrapper>
      </MainColumn>

      {/* Image Popup Modal */}
      <ImagePopup
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}

export default TeachingSection
