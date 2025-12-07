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
import { INTERNATIONAL_PRICING_FOOTNOTE } from '@/constants/contacts'
import { SCHOOL_UNDERSTAND_ME_MAMA } from '@/constants/school'
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

/**
 * Icon mapping utility
 */
const getIconComponent = (iconName: string): typeof BookOpen => {
  const iconMap: Record<string, typeof BookOpen> = {
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
  }
  return iconMap[iconName] || BookOpen
}

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
              <ProductHeader text={SCHOOL_UNDERSTAND_ME_MAMA.header.title} />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                {SCHOOL_UNDERSTAND_ME_MAMA.pricingOptions.map(
                  (option, index) => (
                    <PricingCard key={index} option={option} />
                  )
                )}

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <ProgramContent
                headerText={SCHOOL_UNDERSTAND_ME_MAMA.goals.headerText}
                headerIcon={getIconComponent(
                  SCHOOL_UNDERSTAND_ME_MAMA.goals.headerIcon
                )}
                items={SCHOOL_UNDERSTAND_ME_MAMA.goals.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText={SCHOOL_UNDERSTAND_ME_MAMA.composition.headerText}
                headerIcon={getIconComponent(
                  SCHOOL_UNDERSTAND_ME_MAMA.composition.headerIcon
                )}
                items={SCHOOL_UNDERSTAND_ME_MAMA.composition.items.map(
                  (item) => ({
                    icon: getIconComponent(item.icon),
                    text: item.text,
                  })
                )}
              />
            </CardItem>
          </ContentColumn>
        </GridProductWrapper>

        {/* Gallery & Contact */}
        <GridProductWrapper>
          <ContactCard message={SCHOOL_UNDERSTAND_ME_MAMA.contactMessage} />
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
