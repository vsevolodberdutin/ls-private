import React from 'react'
import Logo from '@/app/uiElements/Logo'

import {
  TelegramBtn,
  ViberBtn,
  WhatsappBtn,
} from '@/app/uiElements/ContactButton'

const Navigation = () => {
  return (
    <div className="bg-red-400 mb-24 py-2 px-8 w-[100vw] flex items-center justify-between opacity-60 ">
      <Logo />
      <div className="flex space-x-2">
        <WhatsappBtn />
        <ViberBtn />
        <TelegramBtn />
      </div>
    </div>
  )
}

export default Navigation
