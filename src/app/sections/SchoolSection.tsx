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
  Baby,
  Heart,
  TrendingUp,
  Sparkles,
  Smile,
  Crosshair,
  PlayCircle,
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
import { PricingCard } from '../components/shared/PricingCard'
import { Separator } from '../uiElements/Separator'

const SchoolSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="school"
      className="section-odd"
      style={{ scrollMarginTop: 'var(--scroll-margin-top)' }}
    >
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
                <PricingCard
                  option={{
                    label: 'Модуль 1',
                    price: '5 500 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует Курс "Пойми меня, МАМА! - Модуль 1". Расскажите подробнее о...',
                  }}
                />

                <PricingCard
                  option={{
                    label: 'Модуль 2',
                    price: '5 500 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует Курс "Пойми меня, МАМА! - Модуль 2". Расскажите подробнее о...',
                  }}
                />
                <PricingCard
                  option={{
                    label: 'Полный курс (M1+M2)',
                    price: '10 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Пойми меня, МАМА!" "Полный курс (M1+M2)". Расскажите подробнее о...',
                  }}
                />
                <PricingCard
                  option={{
                    label: 'Полный курс (M1+M2) + консультации',
                    description: [
                      '4 личных ZOOM-консультации с детальным разбором',
                    ],
                    price: '28 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует  "Пойми меня, МАМА!"  "Полный курс (M1+M2)+ консультации". Расскажите подробнее...',
                  }}
                />
                <PricingCard
                  option={{
                    label: 'Семейный коучинг',
                    description: [
                      'Полный курс (M1+M2)',
                      'ZOOM-консультации с экспертом (любое количество)',
                      'Приезд эксперта (по РФ)',
                    ],
                    price: '120 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Семейный коучинг". Расскажите подробнее о...',
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
