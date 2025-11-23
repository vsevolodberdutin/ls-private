import React from 'react'
import {
  Lightbulb,
  Network,
  GitMerge,
  GitCompareArrows,
  Shapes,
} from 'lucide-react'
import Image from 'next/image'

export const PhilosophyContent: React.FC = () => {
  const philosophyCards = [
    {
      title: 'Основа индивидуальных различий',
      icon: <Shapes className="w-full h-full" />,
      text: 'Люди различаются в своем видении мира. Мы, зачастую, никак не можем понять мотивов, поступков, интересов друг друга. Мы говорим на разных языках, но не осознавая этого, не утруждаемся переводом чужих слов. Результатом служит отсутствие эффективного взаимодействия, непонимание и взаимные обиды.',
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

  return (
    <div className="flex flex-col gap-4">
      {philosophyCards.map((card, index) => (
        <div key={index} className="rounded-xl animate-fadeIn">
          <div className="relative flex flex-col gap-4 overflow-hidden
            rounded-2xl border border-gray-800/20 bg-white/30 backdrop-blur-xl px-6 py-5
            shadow-[0_8px_32px_rgba(251,146,60,0.15)]
            transition-all duration-500
            hover:shadow-[0_12px_40px_rgba(251,146,60,0.25)]">
            <div className="flex flex-col gap-4">
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[48px] h-[48px] flex-shrink-0
                  rounded-lg border border-gray-800/20 bg-white/20 backdrop-blur-sm p-3">
                  <div className="w-6 h-6 text-gray-800/80">{card.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800/80">
                  {card.title}
                </h3>
              </div>
              <div className="grid grid-cols-[1fr_3fr] gap-8">
                {/* Image */}
                <div className="flex justify-center items-center bg-gray-900/90 rounded-xl border border-white/10">
                  <div className="relative w-48 h-40">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-sm leading-[1.6] text-gray-800/90 font-normal tracking-normal">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none
              bg-gradient-to-t from-orange-500/10 to-transparent" />
          </div>
        </div>
      ))}
    </div>
  )
}
