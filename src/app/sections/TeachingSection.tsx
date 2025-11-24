'use client'

import React, { useState } from 'react'
import {
  Award,
  Users,
  Lightbulb,
  Settings,
  UserPlus,
  Brain,
  ShipWheel,
} from 'lucide-react'
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
import {
  CardItemHeader,
  CardItemSubHeader,
  Footnote,
} from '../uiElements/Typography'
import { CardItem } from '../uiElements/cardItems/CardItem'
import { ContentColumn } from '../uiElements/wrappers/ContentColumn'
import { MainColumn } from '../uiElements/wrappers/MainColumn'
import { DurationContent } from '../uiElements/cardItems/content/DurationContent'
import { ProductHeader } from '../uiElements/cardItems/content/ProductHeader'
import { TargetClientContent } from '../uiElements/cardItems/content/TargetClientContent'
import { ReportContent } from '../uiElements/cardItems/content/ReportContent'
import { ProgramContent } from '../uiElements/cardItems/content/ProgramContent'
import { PricingCard, type PricingOption } from '../components/shared/PricingCard'
import { ModuleCard } from '../uiElements/cardItems/content/ModuleCard'

// ============================================================================
// Courses Configuration
// ============================================================================

const INTENSIV_MODULES: PricingOption[] = [
  {
    label: 'Модуль 1: BASICS',
    description: [
      'Теоретические основы',
      'Модель А',
      '16 психотипов',
      'методы диагностики',
    ],
    price: '12 000 ₽',
    message:
      'Здравствуйте, Элеонора! Интересует "Модуль 1: BASICS". Расскажите подробнее...',
  },
  {
    label: 'Модуль 2: MEDIUM',
    description: [
      'Интертипные отношения',
      'малые группы',
      'признаки Рейнина',
      'методика определения психотипа',
    ],
    price: '12 000 ₽',
    message:
      'Здравствуйте, Элеонора! Интересует "Модуль 2: MEDIUM". Расскажите подробнее...',
  },
]

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
  }),
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
        {/* Course 1: ИНТЕНСИВ */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Курс ИНТЕНСИВ" />
            </CardItem>

            {/* Modules */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={INTENSIV_MODULES[0]} />
                <PricingCard option={INTENSIV_MODULES[1]} />
                <PricingCard
                  option={{
                    label: 'Курс ИНТЕНСИВ - в записи',
                    price: '15 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Курс ИНТЕНСИВ - в записи". Расскажите подробнее...',
                  }}
                />

                <Footnote
                  text={[
                    'Для зарубежных клиентов — повышающий коэффициент',
                    'Оплата: PayPal / WU',
                  ]}
                />
              </ContentColumn>
            </CardItem>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <TargetClientContent text="Руководители, HR-специалисты, психологи, люди, занимающиеся саморазвитием" />
            </CardItem>
            <CardItem>
              <DurationContent
                text="36 академических часов (каждый модуль)"
                note="3 онлайн-тренинга (12ч), 6 тренингов в записи (24ч) + живые встречи, закрытый телеграм-чат группы"
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                items={[
                  {
                    icon: Users,
                    text: 'Сочетание соционики и теории управления людьми',
                  },
                  {
                    icon: UserPlus,
                    text: 'Осознанный подбор членов команды',
                  },
                  {
                    icon: Settings,
                    text: 'Ярко выраженный прикладной характер',
                  },
                  {
                    icon: ShipWheel,
                    text: 'Методики применения в управлении',
                  },
                  {
                    icon: Brain,
                    text: 'Методики определения психотипов с личной практикой',
                  },
                ]}
              />
            </CardItem>
          </ContentColumn>
        </GridProductWrapper>

        {/* Course 2: ИНТЕНСИВ - в записи */}
        <GridProductWrapper>
          <TeachingPricingCard course={TEACHING_COURSES[1]} />
        </GridProductWrapper>

        {/* Course 3: ТОНКОСТИ ТИПИРОВАНИЯ */}
        <GridProductWrapper>
          <TeachingPricingCard course={TEACHING_COURSES[2]} />
        </GridProductWrapper>

        {/* Course 4: ПРАКТИКА 3.0. */}
        <GridProductWrapper>
          <TeachingPricingCard course={TEACHING_COURSES[3]} />
        </GridProductWrapper>

        {/* Strategic Session */}
        <GridProductWrapper>
          <CardItem>
            <ContentColumn>
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
