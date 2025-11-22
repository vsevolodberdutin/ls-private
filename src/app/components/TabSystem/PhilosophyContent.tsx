import React from 'react'
import { Lightbulb, Network, GitMerge } from 'lucide-react'
import Image from 'next/image'

export const PhilosophyContent: React.FC = () => {
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
      text: 'Ни один принцип не работает эффективно в отдельности. Признание бесконечных индивидуальных различий без структурных рамок становится бессмысленным — «бесконечность значит ноль». И наоборот, игнорирование уникальности сводит людей к пустым категориям. Соcionика устраняет этот разрыв, сочетая признание подлинных различий с систематической психологической архитектурой для обеспечения значимого общения и взаимопонимания.',
      image: '/philosophy/integration.svg',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {philosophyCards.map((card, index) => (
        <div key={index} className="rounded-xl animate-fadeIn">
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(251,146,60,0.15)] hover:shadow-[0_12px_40px_rgba(251,146,60,0.25)] transition-all duration-500 overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-4">
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-400/20 to-pink-400/20 backdrop-blur-sm border border-white/30 p-3 w-[48px] h-[48px] flex-shrink-0">
                  <div className="w-6 h-6 text-white/90">{card.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white/95">
                  {card.title}
                </h3>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="relative w-full h-32">
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
                <p className="text-sm leading-[1.6] text-white/95 font-normal tracking-normal">
                  {card.text}
                </p>
              </div>
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
          </div>
        </div>
      ))}
    </div>
  )
}
