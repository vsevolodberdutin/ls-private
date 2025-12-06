'use client'

import React, { useState } from 'react'
import {
  Users,
  Settings,
  UserPlus,
  Brain,
  ShipWheel,
  Crown,
  UserRoundSearch,
  Video,
  MessageSquare,
  ClipboardList,
  GraduationCap,
} from 'lucide-react'
import { TEACHING_SERVICES } from '@/constants/services'
import { INTERNATIONAL_PRICING_FOOTNOTE } from '@/constants/contacts'
import {
  TEACHING_INTENSIV,
  TEACHING_TYPING,
  TEACHING_PRACTICE,
} from '@/constants/teaching'

import { ContactCard } from '@/app/components/shared/ContactCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'

import {
  TEACHING_INTENSIV_GALLERY,
  TEACHING_TYPING_GALLERY,
  TEACHING_PRACTICE_GALLERY,
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
import { TargetClientContent } from '../uiElements/cardItems/content/TargetClientContent'
import { ProgramContent } from '../uiElements/cardItems/content/ProgramContent'
import { PricingCard } from '../components/shared/PricingCard'
import { Separator } from '../uiElements/Separator'
import { MobileVisibleWrapper } from '../uiElements/wrappers/MobileVisibleWrapper'

/**
 * Icon mapping utility
 */
const getIconComponent = (iconName: string): typeof Users => {
  const iconMap: Record<string, typeof Users> = {
    Users,
    Settings,
    UserPlus,
    Brain,
    ShipWheel,
    Crown,
    UserRoundSearch,
    Video,
    MessageSquare,
    ClipboardList,
    GraduationCap,
  }
  return iconMap[iconName] || Users
}

// ============================================================================
// Main Component
// ============================================================================

const TeachingSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="learn"
      className="section-odd"
      style={{ scrollMarginTop: 'var(--scroll-margin-top)' }}
    >
      <Separator />
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
              <ProductHeader text={TEACHING_INTENSIV.header.title} />
            </CardItem>

            {/* Modules */}
            <CardItem>
              <ContentColumn>
                {TEACHING_INTENSIV.modules.map((module, index) => (
                  <PricingCard key={index} option={module} />
                ))}

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <MobileVisibleWrapper>
              <ContactCard message={TEACHING_INTENSIV.contactMessage} />
            </MobileVisibleWrapper>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <TargetClientContent
                text={TEACHING_INTENSIV.targetClient.text}
              />
            </CardItem>
            <CardItem>
              <DurationContent
                text={TEACHING_INTENSIV.duration.text}
                note={TEACHING_INTENSIV.duration.note}
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                items={TEACHING_INTENSIV.program.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>

            <MobileVisibleWrapper isMobile>
              <ContactCard message={TEACHING_INTENSIV.contactMessage} />
            </MobileVisibleWrapper>

            <GalleryCard
              images={TEACHING_INTENSIV_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
        </GridProductWrapper>

        {/* Course 3: ТОНКОСТИ ТИПИРОВАНИЯ */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text={TEACHING_TYPING.header.title} />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={TEACHING_TYPING.pricing} />

                <Footnote text={[TEACHING_TYPING.footnote]} />
                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <MobileVisibleWrapper>
              <ContactCard message={TEACHING_TYPING.contactMessage} />
            </MobileVisibleWrapper>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <DurationContent
                text={TEACHING_TYPING.duration.text}
                note={TEACHING_TYPING.duration.note}
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText={TEACHING_TYPING.program.headerText}
                items={TEACHING_TYPING.program.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>

            <MobileVisibleWrapper isMobile>
              <ContactCard message={TEACHING_TYPING.contactMessage} />
            </MobileVisibleWrapper>
            <GalleryCard
              images={TEACHING_TYPING_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
        </GridProductWrapper>

        {/* Course 4: ПРАКТИКА 3.0. */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text={TEACHING_PRACTICE.header.title} />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={TEACHING_PRACTICE.pricing} />

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <MobileVisibleWrapper>
              <ContactCard message={TEACHING_PRACTICE.contactMessage} />
            </MobileVisibleWrapper>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <ProgramContent
                headerText={TEACHING_PRACTICE.program.headerText}
                items={TEACHING_PRACTICE.program.items.map((item) => ({
                  icon: getIconComponent(item.icon),
                  text: item.text,
                }))}
              />
            </CardItem>
            <MobileVisibleWrapper isMobile>
              <ContactCard message={TEACHING_PRACTICE.contactMessage} />
            </MobileVisibleWrapper>
            <GalleryCard
              images={TEACHING_PRACTICE_GALLERY}
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

export default TeachingSection
