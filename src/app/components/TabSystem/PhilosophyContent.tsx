import React from 'react'
import { Network, GitMerge, Shapes } from 'lucide-react'
import Image from 'next/image'
import { ListColumn } from '@/app/uiElements/wrappers/ListColumn'
import { BoxIcon } from '@/app/uiElements/BoxIcon'
import { ABOUT_PHILOSOPHY } from '@/constants/about'

/**
 * Icon mapping utility for philosophy cards
 */
const getPhilosophyIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Shapes: <Shapes className="w-full h-full" />,
    Network: <Network className="w-full h-full" />,
    GitMerge: <GitMerge className="w-full h-full" />,
  }
  return iconMap[iconName] || <Shapes className="w-full h-full" />
}

export const PhilosophyContent: React.FC = () => {
  const philosophyCards = ABOUT_PHILOSOPHY.cards

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
            <BoxIcon icon={getPhilosophyIcon(card.icon)} variant="white" size="lg" />

            <h3 className="text-lg font-bold text-gray-800/80">{card.title}</h3>
          </div>
          <div className="grid sm:grid-cols-[1fr_3fr] gap-8">
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
