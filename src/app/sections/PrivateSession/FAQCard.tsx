'use client'

import React from 'react'
import Image from 'next/image'
import { MessageCircleQuestion } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'

/**
 * FAQ contact card with messenger buttons
 */
export const FAQCard: React.FC = () => {
  const baseMessage =
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
          {messengers.map((messenger) => (
            <a
              key={messenger.name}
              href={messenger.url}
              target="_top"
              aria-label={messenger.name}
              className={`rounded-full p-3 hover:shadow-slate-500 ${messenger.hoverColor} border-[1px] focus:outline-none focus:ring border-orange-200 transition-all duration-300`}
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
