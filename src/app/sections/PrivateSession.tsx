'use client'

import React, { useState } from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { Heart, Waves, Briefcase, Clock, FileText } from 'lucide-react'
import { PRICING } from '@/constants/contacts'
import { PricingCard, type PricingOption } from './PrivateSession/PricingCard'
import { FAQCard } from './PrivateSession/FAQCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'
import { PRIVATE_SESSION_GALLERY } from '@/constants/gallery'

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

const PrivateSession: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="private" className="section-even py-10">
      <SectionWrapper>
        {/* Title Card */}
        <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 mx-6 h-[110px] rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800">Личная сессия</h2>
        </div>
        {/* Description Card */}
        <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 h-[110px] rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition flex items-center">
          <p className="text-m text-gray-500 max-w-3xl mx-auto ">
            - На ней мы pазберем сильные и слабые стороны вашего психотипа,
            профориентирование, понимание мотивации и развитие потенциала
            личности
          </p>
        </div>
      </SectionWrapper>
      <div className="-mt-4">
        <SectionWrapper>
          {/* Left Column - Pricing and FAQ */}
          <div className="flex-1 flex flex-col gap-3 mx-6">
            {/* Pricing Card */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
              <ul className="space-y-3 text-sm text-gray-800 leading-relaxed">
                {PRICING_OPTIONS.map((option, index) => (
                  <PricingCard key={index} option={option} />
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                * Для зарубежных клиентов — повышающий коэффициент. Оплата:
                PayPal / WU
              </p>
            </div>

            {/* FAQ Card */}
            <FAQCard />
          </div>

          {/* Info Cards Column */}
          <div className="flex-1 flex flex-col gap-1">
            {/* Duration Card */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
              <div className="flex gap-3 items-center">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Продолжительность 2 часа</strong>
                </p>
              </div>
            </div>

            {/* Report Card */}
            <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
              <div className="flex gap-3 items-center">
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>
                    После консультации вы получаете отчет / лист профориентации
                    с рекомендациями:
                  </strong>
                </p>
              </div>

              <hr className="my-4 border-orange-300" />

              <ul className="space-y-2 ml-3 text-sm text-gray-700 leading-relaxed">
                <li className="flex gap-3 items-center">
                  <Briefcase className="w-4 h-4 text-orange-500 flex-shrink-0" />{' '}
                  Как развить потенциал и построить карьеру
                </li>
                <li className="flex gap-3 items-center">
                  <Heart className="w-4 h-4 text-orange-500 flex-shrink-0" />{' '}
                  Какие отношения подходят для гармоничной жизни
                </li>
                <li className="flex gap-3 items-center">
                  <Waves className="w-4 h-4 text-orange-500 flex-shrink-0" />{' '}
                  Как восстанавливать энергию и ресурс
                </li>
              </ul>
            </div>

            {/* Gallery Card */}
            <GalleryCard images={PRIVATE_SESSION_GALLERY} onImageClick={setSelectedImage} />
          </div>
        </SectionWrapper>
      </div>

      {/* Image Popup Modal */}
      <ImagePopup
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}

export default PrivateSession
