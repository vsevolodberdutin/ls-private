'use client'

import React, { useState } from 'react'
import { Heart, Users, Handshake, UserCheck } from 'lucide-react'
import { FAMILY_SERVICES } from '@/constants/services'
import { INTERNATIONAL_PRICING_FOOTNOTE } from '@/constants/contacts'
import { FAMILY_HARMONY, FAMILY_CONFLICT } from '@/constants/family'
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
import { MobileVisibleWrapper } from '../uiElements/wrappers/MobileVisibleWrapper'

/**
 * Icon mapping utility
 */
const getIconComponent = (iconName: string): typeof Users => {
  const iconMap: Record<string, typeof Users> = {
    Users,
    Heart,
    UserCheck,
    Handshake,
  }
  return iconMap[iconName] || Users
}

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
              <ProductHeader text={FAMILY_HARMONY.header.title} />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                {FAMILY_HARMONY.pricingOptions.map((option, index) => {
                  const serviceType =
                    FAMILY_SERVICES.personalSession.types[option.type]
                  const pricingOption: PricingOption = {
                    label: serviceType.name,
                    description:
                      'description' in serviceType
                        ? serviceType.description
                        : undefined,
                    price: serviceType.priceFormatted,
                    message: option.message,
                  }
                  return <PricingCard key={index} option={pricingOption} />
                })}

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <MobileVisibleWrapper>
              <ContactCard message={FAMILY_HARMONY.contactMessage} />
            </MobileVisibleWrapper>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <DurationContent
                text={FAMILY_HARMONY.duration.text}
                note={FAMILY_HARMONY.duration.note}
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText={FAMILY_HARMONY.program.headerText}
                items={FAMILY_HARMONY.program.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>
            <MobileVisibleWrapper isMobile>
              <ContactCard message={FAMILY_HARMONY.contactMessage} />
            </MobileVisibleWrapper>
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
              <ProductHeader text={FAMILY_CONFLICT.header.title} />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                {(() => {
                  const serviceType =
                    FAMILY_SERVICES.personalSession.types[
                      FAMILY_CONFLICT.pricing.type
                    ]
                  const pricingOption: PricingOption = {
                    label: serviceType.name,
                    price: serviceType.priceFormatted,
                    message: FAMILY_CONFLICT.pricing.message,
                  }
                  return <PricingCard option={pricingOption} />
                })()}

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <MobileVisibleWrapper>
              <ContactCard message={FAMILY_CONFLICT.contactMessage} />
            </MobileVisibleWrapper>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <DurationContent
                text={FAMILY_CONFLICT.duration.text}
                note={FAMILY_CONFLICT.duration.note}
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText={FAMILY_CONFLICT.program.headerText}
                items={FAMILY_CONFLICT.program.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>
            <MobileVisibleWrapper isMobile>
              <ContactCard message={FAMILY_CONFLICT.contactMessage} />
            </MobileVisibleWrapper>
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
