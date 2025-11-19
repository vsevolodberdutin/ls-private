'use client'

import React from 'react'
import Image from 'next/image'
import { CONTACTS } from '@/constants/contacts'

/**
 * Contact buttons for messengers (WhatsApp, Viber, Telegram)
 * Reusable card component across all sections
 * Matches the PrivateSession card styling with glass-morphism effect
 */
export const ContactButtons: React.FC<{ message?: string }> = ({ message = '' }) => {
  const messengers = [
    {
      name: 'WhatsApp',
      url: message ? `${CONTACTS.whatsapp.url}${encodeURIComponent(message)}` : CONTACTS.whatsapp.url,
      icon: '/whatsapp.svg',
      hoverColor: 'hover:bg-green-300',
    },
    {
      name: 'Viber',
      url: message ? `${CONTACTS.viber.url}&text=${encodeURIComponent(message)}` : CONTACTS.viber.url,
      icon: '/viber.svg',
      hoverColor: 'hover:bg-violet-400',
    },
    {
      name: 'Telegram',
      url: message ? `${CONTACTS.telegram.url}&text=${encodeURIComponent(message)}` : CONTACTS.telegram.url,
      icon: '/telegram.svg',
      hoverColor: 'hover:bg-blue-400',
    },
  ]

  return (
    <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-700 font-medium mb-4 text-center">
        Есть вопросы? Свяжитесь с нами!
      </p>
      <div className="flex gap-3 justify-center">
        {messengers.map((messenger) => (
          <a
            key={messenger.name}
            href={messenger.url}
            target="_top"
            aria-label={messenger.name}
            className={`rounded-full p-3 hover:shadow-lg ${messenger.hoverColor} border-[1px] border-orange-200 transition-all duration-300 hover:scale-110`}
          >
            <Image
              src={messenger.icon}
              alt={messenger.name.toLowerCase()}
              width={32}
              height={32}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
