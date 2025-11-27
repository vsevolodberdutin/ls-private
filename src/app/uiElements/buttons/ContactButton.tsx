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
        bg-white/90
        transition-all duration-200
        hover:border-emerald-400/60 hover:bg-emerald-500/70 hover:scale-105"
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

export const MaxBtn: React.FC<ContactButtonProps> = ({ url = '' }) => {
  return (
    <a
      href={
        url ||
        'https://max.ru/u/f9LHodD0cOIJoLU5SKENjsmyWNU3DgWX3SyAtSucFRVBzon9hS4reIglDpk'
      }
      target="_top"
      aria-label="Max"
      className="rounded-full border-[1px] border-slate p-2
        bg-white/90
        transition-all duration-200
        hover:border-violet-300/60 hover:bg-violet-400/70 hover:scale-105"
    >
      <Image
        className=""
        src="/max.svg"
        alt="max"
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
        bg-white/90
        transition-all duration-200
        hover:border-sky-400/60 hover:bg-sky-500/70 hover:scale-105"
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
