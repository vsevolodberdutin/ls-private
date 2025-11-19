'use client'

import React from 'react'
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
} from 'lucide-react'
import { CONTACTS, PRICING } from '@/constants/contacts'

const PrivateSession: React.FC = () => {
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
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}

export default PrivateSession
