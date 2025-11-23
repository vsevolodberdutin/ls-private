'use client'

import React from 'react'
import { MessageCircleQuestion } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'
import { CircleIcon } from '@/app/uiElements/CircleIcon'
import {
  TelegramBtn,
  ViberBtn,
  WhatsappBtn,
} from '@/app/uiElements/buttons/ContactButton'

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
    <div
      className="bg-white/30 backdrop-blur-xl
      rounded-2xl border border-wite/90 p-6
      shadow-sm
      transition"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <CircleIcon icon={<MessageCircleQuestion />} size="sm" />
          <p className="text-sm opacity-50">Есть вопросы? Пишите!</p>
        </div>

        <div className="flex gap-3">
          <WhatsappBtn />
          <ViberBtn />
          <TelegramBtn />
        </div>
      </div>
    </div>
  )
}
