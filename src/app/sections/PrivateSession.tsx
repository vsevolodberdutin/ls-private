'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import {
  Sparkles,
  Heart,
  Waves,
  Briefcase,
  Send,
  Clock,
  FileText,
  MessageCircleQuestion,
  X,
  Images,
  Eye,
} from 'lucide-react'
import { CONTACTS, PRICING } from '@/constants/contacts'

const PrivateSession: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    '/gallery/private_glance_1.png',
    '/gallery/private_glance_2.png',
    '/gallery/private_glance_3.png',
    '/gallery/private_glance_4.png',
  ]

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const handleBackdropClick = () => {
    closeImage()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeImage()
    }
  }

  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImage()
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])
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
                <li>
                  <button
                    onClick={() =>
                      (window.location.href = `${CONTACTS.telegram.url}&text=${encodeURIComponent('Здравствуйте, я хочу записаться на личную сессию Online')}`)
                    }
                    className="w-full text-left px-4 py-3 rounded-lg border border-orange-200 hover:border-orange-400 bg-orange-50 transition-all duration-200 group relative"
                  >
                    <span className="group-hover:opacity-0 transition-opacity duration-200">
                      <strong>{PRICING.online.label}</strong>
                      <br />
                      <strong>{PRICING.online.formatted}</strong>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold text-orange-700">
                      <Send className="w-4 h-4" />
                      Записаться
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      (window.location.href = `${CONTACTS.telegram.url}&text=${encodeURIComponent('Здравствуйте, я хочу записаться на личную сессию-встречу в городе ...')}`)
                    }
                    className="w-full text-left px-4 py-3 rounded-lg border border-orange-200 hover:border-orange-400 bg-orange-50 transition-all duration-200 group relative"
                  >
                    <span className="group-hover:opacity-0 transition-opacity duration-200">
                      <strong>{PRICING.inPerson.label}</strong> (
                      {PRICING.inPerson.locations})
                      <br />
                      <strong>{PRICING.inPerson.formatted}</strong>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold text-orange-700">
                      <Send className="w-4 h-4" />
                      Записаться
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      (window.location.href = `${CONTACTS.telegram.url}&text=${encodeURIComponent('Здравствуйте, я хочу записаться на личную сессию-встречу в городе ...')}`)
                    }
                    className="w-full text-left px-4 py-3 rounded-lg border border-orange-200 hover:border-orange-400 bg-orange-50 transition-all duration-200 group relative"
                  >
                    <span className="group-hover:opacity-0 transition-opacity duration-200">
                      <strong>{PRICING.otherCities.label}</strong> (
                      {PRICING.otherCities.locations})
                      <br />
                      <strong>{PRICING.otherCities.formatted}</strong>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold text-orange-700">
                      <Send className="w-4 h-4" />
                      Записаться
                    </span>
                  </button>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                * Для зарубежных клиентов — повышающий коэффициент. Оплата:
                PayPal / WU
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                    <MessageCircleQuestion className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-xs text-gray-100 font-medium">
                    Есть вопросы? Пишите!
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`${CONTACTS.whatsapp.url}${encodeURIComponent('Здравствуйте, Элеонора! Появился вопрос по тому как проходит личная сессия. Расскажите о ...')}`}
                    target="_top"
                    aria-label="What's App"
                    className="rounded-full p-3 hover:shadow-slate-500 hover:bg-green-300 border-[1px] focus:outline-none focus:ring border-orange-200 transition-all duration-300"
                  >
                    <Image
                      src="/whatsapp.svg"
                      alt="whatsapp"
                      width={28}
                      height={28}
                    />
                  </a>
                  <a
                    href={`${CONTACTS.viber.url}&text=${encodeURIComponent('Здравствуйте, Элеонора! Появился вопрос по тому как проходит личная сессия. Расскажите о ...')}`}
                    target="_top"
                    aria-label="Viber"
                    className="rounded-full p-3 hover:shadow-slate-500 hover:bg-violet-400 border-[1px] focus:outline-none focus:ring border-orange-200 transition-all duration-300"
                  >
                    <Image
                      src="/viber.svg"
                      alt="viber"
                      width={28}
                      height={28}
                    />
                  </a>
                  <a
                    href={`${CONTACTS.telegram.url}&text=${encodeURIComponent('Здравствуйте, Элеонора! Появился вопрос по тому как проходит личная сессия. Расскажите о ...')}`}
                    target="_top"
                    aria-label="Telegram"
                    className="rounded-full p-3 hover:shadow-slate-500 hover:bg-blue-400 border-[1px] focus:outline-none focus:ring border-orange-200 transition-all duration-300"
                  >
                    <Image
                      src="/telegram.svg"
                      alt="telegram"
                      width={28}
                      height={28}
                    />
                  </a>
                </div>
              </div>
            </div>
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
            <div className="p-12 ">
              <div className="flex justify-center gap-3 flex-wrap">
                {galleryImages.map((imageSrc, index) => (
                  <button
                    key={index}
                    onClick={() => openImage(imageSrc)}
                    className="relative w-20 h-20 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-orange-200 hover:border-orange-400 hover:scale-110 hover:shadow-lg transition-all duration-200 flex-shrink-0 group"
                    aria-label={`Просмотреть изображение ${index + 1}`}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Пример отчета ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="100px"
                    />
                    {/* Smooth background overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      {/* Eye icon */}
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg animate-in fade-in duration-300 cursor-pointer"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения"
        >
          <div className="relative w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
            <Image
              src={selectedImage}
              alt="Просмотр отчета"
              fill
              className="object-cover"
              sizes="600px"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default PrivateSession
