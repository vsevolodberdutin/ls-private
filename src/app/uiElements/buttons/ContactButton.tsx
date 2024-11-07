import React from 'react'
import Image from 'next/image'

const size = 24

export const WhatsappBtn = () => {
  return (
    <a
      href="whatsapp://send?phone=79103811250&amp;text="
      target="_top"
      aria-label="What’s App"
      className="rounded-full p-2 hover:shadow-slate-500 hover:bg-green-300  border-[1px] focus:outline-none focus:ring border-slate transition-all duration-300"
    >
      <img
        className=""
        src="/whatsapp.svg"
        alt="whatsapp"
        width={size}
        height={size}
      />
    </a>
  )
}

export const ViberBtn = () => {
  return (
    <a
      href="viber://chat?number=%2B79103811250"
      target="_top"
      aria-label="Viber"
      className="rounded-full p-2 hover:shadow-slate-500 hover:bg-violet-400 border-[1px] focus:outline-none focus:ring border-slate transition-all duration-300"
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
export const TelegramBtn = () => {
  return (
    <a
      href="tg://resolve?domain=eleanor_live"
      target="_top"
      aria-label="Telegram"
      className="rounded-full p-2 hover:shadow-slate-500 hover:bg-blue-400  border-[1px] focus:outline-none focus:ring border-slate transition-all duration-300"
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
