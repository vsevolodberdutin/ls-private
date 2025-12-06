'use client'

import React, { useState } from 'react'
import {
  Heart,
  Waves,
  Briefcase,
  Target,
  Brain,
  ShipWheel,
  Headset,
} from 'lucide-react'
import { PRICING, INTERNATIONAL_PRICING_FOOTNOTE } from '@/constants/contacts'
import {
  PRIVATE_PERSONAL_SESSION,
  PRIVATE_STRATEGIC_SESSION,
} from '@/constants/private'
import {
  PricingCard,
  type PricingOption,
} from '../components/shared/PricingCard'

import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import {
  PRIVATE_SESSION_GALLERY,
  TEACHING_STRATEGIC_GALLERY,
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
import { ContactCard } from '../components/shared/ContactCard'
import { MainColumn } from '../uiElements/wrappers/MainColumn'
import { DurationContent } from '../uiElements/cardItems/content/DurationContent'
import { ReportContent } from '../uiElements/cardItems/content/ReportContent'
import { Separator } from '../uiElements/Separator'
import { ProgramContent } from '../uiElements/cardItems/content/ProgramContent'
import { TargetClientContent } from '../uiElements/cardItems/content/TargetClientContent'
import { ProductHeader } from '../uiElements/cardItems/content/ProductHeader'
import { MobileVisibleWrapper } from '../uiElements/wrappers/MobileVisibleWrapper'

/**
 * Icon mapping utility
 */
const getIconComponent = (iconName: string): typeof Heart => {
  const iconMap: Record<string, typeof Heart> = {
    Heart,
    Waves,
    Briefcase,
    Target,
    Brain,
    ShipWheel,
    Headset,
  }
  return iconMap[iconName] || Briefcase
}

// ============================================================================
// Pricing Options Configuration
// ============================================================================

const PRICING_OPTIONS: PricingOption[] = PRIVATE_PERSONAL_SESSION.pricingOptions.map(
  (option) => {
    const pricingData =
      PRICING[option.type as keyof typeof PRICING]
    return {
      label: pricingData.label,
      price: pricingData.formatted,
      description: 'descriptions' in pricingData ? pricingData.descriptions : undefined,
      message: option.message,
    }
  }
)

// ============================================================================
// Main Component
// ============================================================================

const PrivateSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="private"
      className="section-even"
      style={{ scrollMarginTop: 'var(--scroll-margin-top)' }}
    >
      <Separator />
      <MainColumn>
        {/* HEADER */}
        <GridProductWrapper>
          {/* Title Card */}
          <HeaderCardItem>
            <CardItemHeader text={PRIVATE_PERSONAL_SESSION.header.title} />
          </HeaderCardItem>
          {/* Description Card */}
          <HeaderCardItem>
            <CardItemSubHeader
              text={PRIVATE_PERSONAL_SESSION.header.description}
            />
          </HeaderCardItem>
        </GridProductWrapper>

        {/* PRODUCT 1 */}
        <GridProductWrapper>
          {/* Left Column */}
          {/* Pricing Card */}
          <CardItem>
            <ContentColumn>
              {PRICING_OPTIONS.map((option, index) => (
                <PricingCard key={index} option={option} />
              ))}

              <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
            </ContentColumn>
          </CardItem>

          {/* Right Column */}
          <ContentColumn>
            {/* Duration Card */}
            <CardItem>
              <DurationContent text={PRIVATE_PERSONAL_SESSION.duration.text} />
            </CardItem>

            {/* Report Card */}
            <CardItem>
              <ReportContent
                headerText={PRIVATE_PERSONAL_SESSION.report.headerText}
                items={PRIVATE_PERSONAL_SESSION.report.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>
          </ContentColumn>
        </GridProductWrapper>
        {/* Contact Card && Gallery Card */}
        <GridProductWrapper>
          {/* Contact Card */}
          <ContactCard />

          {/* Gallery Card */}
          <GalleryCard
            images={PRIVATE_SESSION_GALLERY}
            onImageClick={setSelectedImage}
          />
        </GridProductWrapper>

        {/* Strategic Session */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text={PRIVATE_STRATEGIC_SESSION.header.title} />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={PRIVATE_STRATEGIC_SESSION.pricing} />
              </ContentColumn>
            </CardItem>
            {/* Contact Card */}
            <MobileVisibleWrapper>
              <ContactCard
                message={PRIVATE_STRATEGIC_SESSION.contactMessage}
              />
            </MobileVisibleWrapper>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <TargetClientContent
                text={PRIVATE_STRATEGIC_SESSION.targetClient.text}
              />
            </CardItem>
            <CardItem>
              <DurationContent
                text={PRIVATE_STRATEGIC_SESSION.duration.text}
                note={PRIVATE_STRATEGIC_SESSION.duration.note}
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText={PRIVATE_STRATEGIC_SESSION.program.headerText}
                items={PRIVATE_STRATEGIC_SESSION.program.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>
            <MobileVisibleWrapper isMobile>
              <ContactCard
                message={PRIVATE_STRATEGIC_SESSION.contactMessage}
              />
            </MobileVisibleWrapper>
            <GalleryCard
              images={TEACHING_STRATEGIC_GALLERY}
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

export default PrivateSection
