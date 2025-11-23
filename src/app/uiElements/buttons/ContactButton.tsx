import React from 'react'
import Image from 'next/image'

const size = 24

interface ContactButtonProps {
  url?: string
}

export const WhatsappBtn: React.FC<ContactButtonProps> = ({ url = '' }) => {
  return (
    <a
      href={url || 'whatsapp://send?phone=79103811250&text='}
      target="_top"
      aria-label="What's App"
      className="rounded-full border-[1px] border-slate p-2
        hover:shadow-slate-500 bg-white/90
        transition-all duration-300
        focus:outline-none focus:ring hover:bg-green-500"
    >
      <Image
        className=""
        src="/whatsapp.svg"
        alt="whatsapp"
        width={size}
        height={size}
      />
    </a>
  )
}

export const ViberBtn: React.FC<ContactButtonProps> = ({ url = '' }) => {
  return (
    <a
      href={url || 'viber://chat?number=%2B79103811250'}
      target="_top"
      aria-label="Viber"
      className="rounded-full border-[1px] border-slate p-2
        hover:shadow-slate-500 bg-white/90
        transition-all duration-300
        focus:outline-none focus:ring hover:bg-violet-500"
    >
      <Image
        className=""
        src="/viber.svg"
        alt="viber"
        width={size}
        height={size}
        priority
      />
    </a>
  )
}

export const TelegramBtn: React.FC<ContactButtonProps> = ({ url = '' }) => {
  return (
    <a
      href={url || 'tg://resolve?domain=eleanor_live'}
      target="_top"
      aria-label="Telegram"
      className="rounded-full border-[1px] border-slate p-2
        hover:shadow-slate-500 bg-white/90
        transition-all duration-300
        focus:outline-none focus:ring hover:bg-blue-500"
    >
      <Image
        className=""
        src="/telegram.svg"
        alt="telegram"
        width={size}
        height={size}
        priority
      />
    </a>
  )
}
