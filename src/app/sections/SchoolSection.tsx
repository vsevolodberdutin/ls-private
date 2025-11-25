'use client'

import React, { useState } from 'react'
import {
  BookOpen,
  Target,
  Video,
  ClipboardCheck,
  FileText,
  Award,
  Presentation,
  Phone,
  Home,
  Baby,
  Heart,
  BrainCircuit,
  TrendingUp,
  Sparkles,
  Smile,
  Crosshair,
  PlayCircle,
  MessageCircle,
  BookCheck,
  GraduationCap,
} from 'lucide-react'
import { SCHOOL_SERVICES } from '@/constants/services'
import { ContactCard } from '@/app/components/shared/ContactCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import { SCHOOL_GALLERY } from '@/constants/gallery'
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
import { ProductHeader } from '../uiElements/cardItems/content/ProductHeader'
import { ProgramContent } from '../uiElements/cardItems/content/ProgramContent'
import {
  PricingCard,
  type PricingOption,
} from '../components/shared/PricingCard'
import { Separator } from '../uiElements/Separator'

// ============================================================================
// Pricing Options Configuration
// ============================================================================

const SCHOOL_PRICING_OPTIONS: PricingOption[] = [
  {
    label: SCHOOL_SERVICES.packages[0].name,
    description: SCHOOL_SERVICES.packages[0].features,
    price: SCHOOL_SERVICES.packages[0].priceFormatted,
    message: `Здравствуйте, Элеонора! Интересует "${SCHOOL_SERVICES.packages[0].name}". Расскажите подробнее...`,
  },
  {
    label: SCHOOL_SERVICES.packages[1].name,
    description: SCHOOL_SERVICES.packages[1].features,
    price: SCHOOL_SERVICES.packages[1].priceFormatted,
    message: `Здравствуйте, Элеонора! Интересует "${SCHOOL_SERVICES.packages[1].name}". Расскажите подробнее...`,
  },
  {
    label: SCHOOL_SERVICES.packages[2].name,
    description: SCHOOL_SERVICES.packages[2].features,
    price: SCHOOL_SERVICES.packages[2].priceFormatted,
    message: `Здравствуйте, Элеонора! Интересует "${SCHOOL_SERVICES.packages[2].name}". Расскажите подробнее...`,
  },
]

// ============================================================================
// Main Component
// ============================================================================

const SchoolSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="school" className="section-odd">
      <Separator />
      <MainColumn>
        {/* HEADER */}
        <GridProductWrapper>
          {/* Title Card */}
          <HeaderCardItem>
            <CardItemHeader text={SCHOOL_SERVICES.title} />
          </HeaderCardItem>
          {/* Description Card */}
          <HeaderCardItem>
            <CardItemSubHeader text={SCHOOL_SERVICES.description} />
          </HeaderCardItem>
        </GridProductWrapper>

        {/* Package 1: Курс «Пойми меня, МАМА! */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Курс «Пойми меня, МАМА!»" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={SCHOOL_PRICING_OPTIONS[0]} />

                <PricingCard option={SCHOOL_PRICING_OPTIONS[1]} />
                <PricingCard
                  option={{
                    label: 'Полный курс (M1+M2)',

                    price: '10 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Комплексный видео-курс + консультации". Расскажите подробнее...',
                  }}
                />
                <PricingCard
                  option={{
                    label: 'Полный курс (M1+M2) + консультации',
                    description: [
                      '4 личных SKYPE-консультации с детальным разбором',
                    ],
                    price: '28 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Комплексный видео-курс + консультации". Расскажите подробнее...',
                  }}
                />
                <PricingCard
                  option={{
                    label: 'Семейный коучинг',
                    description: [
                      'Полный курс (M1+M2)',
                      'SKYPE-консультации с экспертом (любое количество)',
                      'Приезд эксперта (по РФ)',
                    ],
                    price: '120 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Комплексный видео-курс + консультации". Расскажите подробнее...',
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
              <ProgramContent
                headerText="Цели курса:"
                headerIcon={Crosshair}
                items={[
                  {
                    icon: Baby,
                    text: 'Достичь взаимопонимания с ребенком',
                  },
                  {
                    icon: TrendingUp,
                    text: 'Эффективно его мотивировать',
                  },
                  {
                    icon: Sparkles,
                    text: 'Определить сильные стороны ребенка и развивать их',
                  },
                  {
                    icon: Target,
                    text: 'Выбрать будущую профессию для успешной реализации',
                  },
                  {
                    icon: Heart,
                    text: 'Избежать нервных срывов и депрессий',
                  },
                  {
                    icon: Smile,
                    text: 'Гордиться достижениями вашего ребенка!',
                  },
                ]}
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText="Курс состоит:"
                headerIcon={BookOpen}
                items={[
                  {
                    icon: PlayCircle,
                    text: 'Комплексный видео-курс из 16 уроков: 2 модуля по 8 уроков',
                  },
                  {
                    icon: Video,
                    text: 'Практические видео-примеры',
                  },
                  {
                    icon: ClipboardCheck,
                    text: 'Домашние задания с обратной связью',
                  },
                  {
                    icon: FileText,
                    text: 'Методические материалы',
                  },
                  {
                    icon: Presentation,
                    text: 'Видео-конференция по итогам модуля',
                  },
                  {
                    icon: Award,
                    text: 'Сертификат участника',
                  },
                ]}
              />
            </CardItem>
          </ContentColumn>
        </GridProductWrapper>


        {/* Gallery & Contact */}
        <GridProductWrapper>
          <ContactCard message="Здравствуйте, Элеонора! Интересует обучение в школе осознанных родителей. Расскажите подробнее о..." />
          <GalleryCard
            images={SCHOOL_GALLERY}
            onImageClick={setSelectedImage}
          />
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

export default SchoolSection
