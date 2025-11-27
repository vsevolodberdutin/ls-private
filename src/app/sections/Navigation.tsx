import React from 'react'
import Logo from '@/app/uiElements/Logo'
import {
  TelegramBtn,
  MaxBtn,
  WhatsappBtn,
} from '@/app/uiElements/buttons/ContactButton'

const Navigation = () => {
  return (
    <header
      className="absolute z-10 w-full flex items-center justify-between
        py-2 px-3 lg:px-8
        opacity-95"
      style={{ backgroundColor: 'var(--navigation-rgb)' }}
    >
      <Logo />
      <div className="flex space-x-2 r-10">
        <WhatsappBtn />
        <MaxBtn />
        <TelegramBtn />
      </div>
    </header>
  )
}

export default Navigation
