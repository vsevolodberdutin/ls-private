import React from 'react'
import { Network, GitMerge, Shapes } from 'lucide-react'
import Image from 'next/image'
import { ListColumn } from '@/app/uiElements/wrappers/ListColumn'
import { BoxIcon } from '@/app/uiElements/BoxIcon'

export const PhilosophyContent: React.FC = () => {
  const philosophyCards = [
    {
      title: 'Основа индивидуальных различий',
      icon: <Shapes className="w-full h-full" />,
      text: 'Люди различаются в своем видении мира. Мы, зачастую, никак не можем понять мотивов, поступков, интересов друг друга. Мы говорим на разных языках, но не осознавая этого, не утруждаемся переводом чужих слов. Результатом служит отсутствие эффективного взаимодействия, непонимание и взаимные обиды.',
      image: '/philosophy/individual.jpg',
    },
    {
      title: 'Психологическая структура и классификация',
      icon: <Network className="w-full h-full" />,
      text: 'Человеческая психика следует определенным законам и имеет организованную структуру, подобно человеческому телу. Определяя эти структурные паттерны, можно классифицировать людей на группы со схожими психологическими конфигурациями. Этот систематический подход превращает абстрактные различия в измеримые, категоризируемые типы.',
      image: '/philosophy/structure.jpg',
    },
    {
      title: 'Интеграция обоих принципов',
      icon: <GitMerge className="w-full h-full" />,
      text: 'Ни один принцип не работает эффективно в отдельности. Признание бесконечных индивидуальных различий без структурных рамок становится бессмысленным — «бесконечность значит ноль». И наоборот, игнорирование уникальности сводит людей к пустым категориям. Соционика устраняет этот разрыв, сочетая признание подлинных различий с систематической психологической архитектурой для обеспечения значимого общения и взаимопонимания.',
      image: '/philosophy/integration.jpg',
    },
  ]

  return (
    <ListColumn>
      {philosophyCards.map((card, index) => (
        <div
          key={index}
          className=" flex flex-col gap-6 rounded-2xl border px-6 py-5
            border-white/40 bg-white/50 backdrop-blur-xl
            transition-all duration-500 animate-fadeIn"
        >
          {/* Icon and Title */}
          <div className="flex items-center gap-4">
            <BoxIcon icon={card.icon} variant="white" size="lg" />

            <h3 className="text-lg font-bold text-gray-800/80">{card.title}</h3>
          </div>
          <div className="grid grid-cols-[1fr_3fr] gap-8">
            {/* Image */}
            <div className="flex justify-center items-center bg-gray-900/90 rounded-xl border border-white/10 relative w-48 h-40">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <p className="text-sm leading-relaxed opacity-70">{card.text}</p>
          </div>
        </div>
      ))}
    </ListColumn>
  )
}
