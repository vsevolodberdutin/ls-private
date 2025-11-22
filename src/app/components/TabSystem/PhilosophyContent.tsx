'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Lightbulb, Network, GitMerge } from 'lucide-react'
import Image from 'next/image'

export const PhilosophyContent: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const philosophyCards = [
    {
      title: 'Основа индивидуальных различий',
      icon: <Lightbulb className="w-full h-full" />,
      text: 'Люди воспринимают и понимают мир принципиально по-разному, создавая барьеры в общении, подобные Вавилонской башне. Мы говорим на разных языках, но не осознаем этого. Признание разнообразия точек зрения формирует первый столп понимания соционики.',
      image: '/philosophy/individual.svg',
    },
    {
      title: 'Психологическая структура и классификация',
      icon: <Network className="w-full h-full" />,
      text: 'Человеческая психика следует определенным законам и имеет организованную структуру, подобно человеческому телу. Определяя эти структурные паттерны, можно классифицировать людей на группы со схожими психологическими конфигурациями. Этот систематический подход превращает абстрактные различия в измеримые, категоризируемые типы.',
      image: '/philosophy/structure.svg',
    },
    {
      title: 'Интеграция обоих принципов',
      icon: <GitMerge className="w-full h-full" />,
      text: 'Ни один принцип не работает эффективно в отдельности. Признание бесконечных индивидуальных различий без структурных рамок становится бессмысленным — «бесконечность значит ноль». И наоборот, игнорирование уникальности сводит людей к пустым категориям. Соционика устраняет этот разрыв, сочетая признание подлинных различий с систематической психологической архитектурой для обеспечения значимого общения и взаимопонимания.',
      image: '/philosophy/integration.svg',
    },
  ]

  const goToNext = () => {
    setCurrentCard((prev) => (prev + 1) % philosophyCards.length)
  }

  const goToPrevious = () => {
    setCurrentCard(
      (prev) => (prev - 1 + philosophyCards.length) % philosophyCards.length,
    )
  }

  const currentCardData = philosophyCards[currentCard]

  return (
    <div className="flex flex-col h-full">
      {/* Top Button Space */}
      <div className="h-14 flex items-center justify-center mb-2">
        {currentCard > 0 && (
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-orange-50/30 border border-orange-200 hover:bg-orange-100/40 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Previous card"
          >
            <ChevronUp className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 rounded-xl animate-fadeIn">
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(251,146,60,0.15)] hover:shadow-[0_12px_40px_rgba(251,146,60,0.25)] transition-all duration-500 overflow-hidden h-full">
          <div className="px-6 py-7 flex flex-col gap-6 h-full">
            {/* Icon and Title */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-400/20 to-pink-400/20 backdrop-blur-sm border border-white/30 p-3 w-[56px] h-[56px] flex-shrink-0">
                <div className="w-8 h-8 text-white/90">
                  {currentCardData.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white/95">
                {currentCardData.title}
              </h3>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="relative w-full h-48">
                <Image
                  src={currentCardData.image}
                  alt={currentCardData.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <p className="text-base leading-[1.7] text-white/95 font-normal tracking-normal">
                {currentCardData.text}
              </p>
            </div>

            {/* Card Counter */}
            <div className="flex justify-center gap-2">
              {philosophyCards.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentCard
                      ? 'w-8 bg-orange-400'
                      : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Bottom Button Space */}
      <div className="h-14 flex items-center justify-center mt-2">
        {currentCard < philosophyCards.length - 1 && (
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-orange-50/30 border border-orange-200 hover:bg-orange-100/40 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Next card"
          >
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  )
}
