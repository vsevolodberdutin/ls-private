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

// ============================================================================
// Pricing Options Configuration
// ============================================================================

const PRICING_OPTIONS: PricingOption[] = [
  {
    label: PRICING.online.label,
    price: PRICING.online.formatted,
    message: 'Здравствуйте, я хочу записаться на личную сессию Online',
  },
  {
    label: PRICING.inPerson.label,
    price: PRICING.inPerson.formatted,
    description: PRICING.inPerson.descriptions,
    message:
      'Здравствуйте, я хочу записаться на личную сессию-встречу в городе ...',
  },
  {
    label: PRICING.otherCities.label,
    price: PRICING.otherCities.formatted,
    description: PRICING.otherCities.descriptions,
    message:
      'Здравствуйте, я хочу записаться на личную сессию-встречу в городе ...',
  },
]

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
            <CardItemHeader text={'Личная сессия'} />
          </HeaderCardItem>
          {/* Description Card */}
          <HeaderCardItem>
            <CardItemSubHeader
              text={
                'На ней пройдет диагностика психотипа с применением комплекса методик, после чего мы разберем сильные и слабые стороны вашего психотипа, профориентирование, понимание мотивации и развитие потенциала личности'
              }
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
              <DurationContent text=" Продолжительность 2 часа" />
            </CardItem>

            {/* Report Card */}
            <CardItem>
              <ReportContent
                headerText=" После консультации вы получаете отчет / лист профориентации с рекомендациями:"
                items={[
                  {
                    icon: Briefcase,
                    text: 'Как развить потенциал и построить карьеру',
                  },
                  {
                    icon: Heart,
                    text: 'Какие отношения подходят для гармоничной жизни',
                  },
                  {
                    icon: Waves,
                    text: 'Как восстанавливать энергию и ресурс',
                  },
                ]}
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
              <ProductHeader text="Стратегическая сессия для управленцев" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard
                  option={{
                    label: 'Модуль "Стратегия"',
                    price: '50 000 ₽',

                    message:
                      'Здравствуйте, Элеонора! Интересует Модуль "Стратегия" для управленцев. Расскажите подробнее...',
                  }}
                />
              </ContentColumn>
            </CardItem>
            {/* Contact Card */}
            <MobileVisibleWrapper>
              <ContactCard message="Здравствуйте, Элеонора! Интересует стратегическая сессия для управленцев. Есть вопрос о..." />
            </MobileVisibleWrapper>
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <TargetClientContent text="Руководители, топ-менеджеры, владельцы бизнеса, HR-директора" />
            </CardItem>
            <CardItem>
              <DurationContent
                text="4 занятия еженедельно (7-8 академ.часов)"
                note="онлайн/оффлайн, онлайн-сопровождение в течение всего периода"
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText="Цель сессии:"
                items={[
                  {
                    icon: Target,
                    text: 'Проработка осознанности путей развития лидерских качеств',
                  },
                  {
                    icon: Brain,
                    text: 'Развитие с опорой на психотип',
                  },
                  {
                    icon: ShipWheel,
                    text: 'Помощь в решении управленческих кейсов',
                  },
                  {
                    icon: Headset,
                    text: 'Персональное онлайн-сопровождение',
                  },
                ]}
              />
            </CardItem>
            <MobileVisibleWrapper isMobile>
              <ContactCard message="Здравствуйте, Элеонора! Интересует стратегическая сессия для управленцев. Есть вопрос о..." />
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
