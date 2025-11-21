import React from 'react'
import Logo from '@/app/uiElements/Logo'
import {
  TelegramBtn,
  ViberBtn,
  WhatsappBtn,
} from '@/app/uiElements/buttons/ContactButton'

const Navigation = () => {
  return (
    <header
      className="py-2 px-3 lg:px-8 w-svw flex items-center justify-between opacity-95 absolute z-10"
      style={{ backgroundColor: 'var(--navigation-rgb)' }}
    >
      <Logo />
      <div className="flex space-x-2 r-10">
        <WhatsappBtn />
        <ViberBtn />
        <TelegramBtn />
      </div>
    </header>
  )
}

export default Navigation
