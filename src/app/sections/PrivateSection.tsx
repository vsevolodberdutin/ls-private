'use client'

import React, { useState } from 'react'
import { Heart, Waves, Briefcase, Clock, FileText } from 'lucide-react'
import { PRICING } from '@/constants/contacts'
import {
  PricingCard,
  type PricingOption,
} from '../components/shared/PricingCard'

import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import { PRIVATE_SESSION_GALLERY } from '@/constants/gallery'
import { GridProductWrapper } from '../uiElements/wrappers/GridWrapper'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import {
  CardItemHeader,
  CardItemSubHeader,
  Footnote,
  InfoItemHeader,
  InfoItemSubHeader,
} from '../uiElements/Typography'
import { CardItem } from '../uiElements/cardItems/CardItem'

import { ContentColumn } from '../uiElements/wrappers/ContentColumn'
import { ContactCard } from '../components/shared/ContactCard'
import { MainColumn } from '../uiElements/wrappers/MainColumn'
import { DurationContent } from '../uiElements/cardItems/content/DurationContent'
import { ReportContent } from '../uiElements/cardItems/content/ReportContent'

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
    locations: PRICING.inPerson.locations,
    message:
      'Здравствуйте, я хочу записаться на личную сессию-встречу в городе ...',
  },
  {
    label: PRICING.otherCities.label,
    price: PRICING.otherCities.formatted,
    locations: PRICING.otherCities.locations,
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
    <section id="private" className="section-even">
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

              <Footnote
                text={[
                  'Для зарубежных клиентов — повышающий коэффициент',
                  'Оплата: PayPal / WU',
                ]}
              />
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
