import React from 'react'
import Logo from '@/app/uiElements/Logo'
import {
  TelegramBtn,
  ViberBtn,
  WhatsappBtn,
} from '@/app/uiElements/buttons/ContactButton'

const Navigation = () => {
  return (
    <header className="bg-red-400 mb-24 py-2 px-3 lg:px-8 w-[100vw] flex items-center justify-between opacity-60 absolute z-10">
      <Logo />
      <div className="flex space-x-2">
        <WhatsappBtn />
        <ViberBtn />
        <TelegramBtn />
      </div>
    </header>
  )
}

export default Navigation
