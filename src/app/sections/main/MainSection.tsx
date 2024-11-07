import React from 'react'
import { Offer } from '@/app/components/Offer'
import { MainPicture, MobileMainPicture } from '@/app/components/MainPicture'
import MainMenu from '@/app/components/mainMenu/MainMenu'

const MainSection = () => {
  return (
    <main className="relative z-0 justify-center items-start p-4 flex h-svh w-svw max-h-[85svh]">
      <MainPicture />
      <div className="flex flex-col items-center pt-14 sm:pt-28">
        <MobileMainPicture />
        <Offer />
        <MainMenu />
      </div>
    </main>
  )
}

export default MainSection
