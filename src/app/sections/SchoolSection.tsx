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


        {/* Package 1: Видеокурс 16 уроков */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Видеокурс 16 уроков" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={SCHOOL_PRICING_OPTIONS[0]} />

                <Footnote
                  text={[
                    'Марафон 1 - 5500₽ / Марафон 2 - 5500₽',
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
          </ContentColumn>
        </GridProductWrapper>


        {/* Package 2: Видеокурс + консультации */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Видеокурс + консультации" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={SCHOOL_PRICING_OPTIONS[1]} />

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
                headerText="Марафон 1: Пойми меня, МАМА!"
                items={[
                  {
                    icon: BrainCircuit,
                    text: 'Получение знаний по психотипу ребенка',
                  },
                  {
                    icon: Target,
                    text: 'Определение сильных и слабых от природы сторон',
                  },
                  {
                    icon: Heart,
                    text: 'Строим мосты ПОНИМАНИЯ между вами и ребенком!',
                  },
                ]}
              />
            </CardItem>
          </ContentColumn>
        </GridProductWrapper>


        {/* Package 3: Семейный коучинг */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Семейный коучинг" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={SCHOOL_PRICING_OPTIONS[2]} />

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
                headerText="Марафон 2: Как раскрыть таланты ребенка"
                items={[
                  {
                    icon: BrainCircuit,
                    text: 'Понимание модели психики, ее целостной работы',
                  },
                  {
                    icon: TrendingUp,
                    text: 'Определение мотивации ребенка',
                  },
                  {
                    icon: Sparkles,
                    text: 'Развитие талантов ребенка',
                  },
                  {
                    icon: Target,
                    text: 'Ранняя профориентация, уверенный выбор профессии',
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
