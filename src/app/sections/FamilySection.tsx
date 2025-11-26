'use client'

import React, { useState } from 'react'
import { Heart, Users, Handshake, UserCheck } from 'lucide-react'
import { FAMILY_SERVICES } from '@/constants/services'
import { INTERNATIONAL_PRICING_FOOTNOTE } from '@/constants/contacts'
import { ContactCard } from '@/app/components/shared/ContactCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import {
  FAMILY_HARMONY_GALLERY,
  FAMILY_CONFLICT_GALLERY,
} from '@/constants/gallery'
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
import { ProgramContent } from '../uiElements/cardItems/content/ProgramContent'
import {
  PricingCard,
  type PricingOption,
} from '../components/shared/PricingCard'
import { Separator } from '../uiElements/Separator'

// ============================================================================
// Pricing Options Configuration
// ============================================================================

const FAMILY_PRICING_OPTIONS: PricingOption[] = [
  {
    label: FAMILY_SERVICES.personalSession.types[0].name,
    description: FAMILY_SERVICES.personalSession.types[0].description,
    price: FAMILY_SERVICES.personalSession.types[0].priceFormatted,
    message:
      'Здравствуйте, Элеонора! Интересует консультация "Гармония отношений в паре, родитель/ребенок". Расскажите подробнее...',
  },
  {
    label: FAMILY_SERVICES.personalSession.types[1].name,

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
    <section
      id="family"
      className="section-even"
      style={{ scrollMarginTop: 'var(--scroll-margin-top)' }}
    >
      <Separator />
      <MainColumn>
        {/* HEADER */}
        <GridProductWrapper>
          {/* Title Card */}
          <HeaderCardItem>
            <CardItemHeader text={FAMILY_SERVICES.personalSession.title} />
          </HeaderCardItem>
          {/* Description Card */}
          <HeaderCardItem>
            <CardItemSubHeader
              text={FAMILY_SERVICES.personalSession.description}
            />
          </HeaderCardItem>
        </GridProductWrapper>

        {/* Consultation 1: Гармония отношений */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Гармония отношений родитель/ребенок" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={FAMILY_PRICING_OPTIONS[0]} />

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <ContactCard message="Здравствуйте, Элеонора! Интересует семейная консультация по гармонии отношений с ребенком. Расскажите подробнее о..." />
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <DurationContent
                text="4 часа"
                note="2 личных сессии + разбор отношений на второй встрече"
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText="Что включает:"
                items={[
                  {
                    icon: Users,
                    text: 'Первая сессия - индивидуальная встреча',
                  },
                  {
                    icon: Heart,
                    text: 'Вторая сессия - разбор отношений',
                  },
                  {
                    icon: UserCheck,
                    text: 'Улучшение взаимопонимания',
                  },
                  {
                    icon: Handshake,
                    text: 'Гармонизация отношений',
                  },
                ]}
              />
            </CardItem>
            <GalleryCard
              images={FAMILY_HARMONY_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
        </GridProductWrapper>

        {/* Consultation 2: Разрешение конфликтов */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Разрешение конфликтов в паре" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={FAMILY_PRICING_OPTIONS[1]} />

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>

            <ContactCard message="Здравствуйте, Элеонора! Интересует семейная консультаци по разрешению конфликтов. Расскажите подробнее о..." />
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <DurationContent
                text="4 часа"
                note="2 личных сессии участников конфликта + 1-2 сессии по примирению"
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText="Что включает:"
                items={[
                  {
                    icon: Users,
                    text: 'Личные сессии каждого участника конфликта',
                  },
                  {
                    icon: Handshake,
                    text: 'Сессии по примирению сторон',
                  },
                  {
                    icon: Heart,
                    text: 'Выработка осознанной позиции',
                  },
                  {
                    icon: UserCheck,
                    text: 'Формирование мирной стратегии',
                  },
                ]}
              />
            </CardItem>
            <GalleryCard
              images={FAMILY_CONFLICT_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
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

export default FamilySection
