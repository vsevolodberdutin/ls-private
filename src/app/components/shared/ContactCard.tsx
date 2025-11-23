'use client'

import React from 'react'
import Image from 'next/image'
import { MessageCircleQuestion } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'
import { CircleIconWrapper } from '@/app/uiElements/wrappers/IconWrapper'

/**
 * FAQ contact card with messenger buttons
 * Reusable component with customizable message
 */
export const ContactCard: React.FC<{ message?: string }> = ({ message }) => {
  const baseMessage =
    message ||
    'Здравствуйте, Элеонора! Появился вопрос по тому как проходит личная сессия. Расскажите о ...'

  const messengers = [
    {
      name: 'WhatsApp',
      url: `${CONTACTS.whatsapp.url}${encodeURIComponent(baseMessage)}`,
      icon: '/whatsapp.svg',
      hoverColor: 'hover:bg-green-300',
    },
    {
      name: 'Viber',
      url: `${CONTACTS.viber.url}&text=${encodeURIComponent(baseMessage)}`,
      icon: '/viber.svg',
      hoverColor: 'hover:bg-violet-400',
    },
    {
      name: 'Telegram',
      url: `${CONTACTS.telegram.url}&text=${encodeURIComponent(baseMessage)}`,
      icon: '/telegram.svg',
      hoverColor: 'hover:bg-blue-400',
    },
  ]

  return (
    <div className="bg-white/10 backdrop-blur-xl
      rounded-2xl border border-orange-200 p-6
      shadow-sm
      transition">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <CircleIconWrapper>
            <MessageCircleQuestion />
          </CircleIconWrapper>
          <p className="text-xs text-gray-100 font-medium">
            Есть вопросы? Пишите!
          </p>
        </div>

        <div className="flex gap-3">
          {messengers.map((messenger) => (
            <a
              key={messenger.name}
              href={messenger.url}
              target="_top"
              aria-label={messenger.name}
              className={`rounded-full border-[1px] border-orange-200 p-3
                hover:shadow-md
                transition-all duration-300
                focus:outline-none focus:ring ${messenger.hoverColor}`}
            >
              <Image
                src={messenger.icon}
                alt={messenger.name.toLowerCase()}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
