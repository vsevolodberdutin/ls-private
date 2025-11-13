import React from 'react'
import { Offer } from '@/app/components/Offer'
import { MainPicture, MobileMainPicture } from '@/app/components/MainPicture'
import MainMenu from '@/app/components/mainMenu/MainMenu'
import { GridWrapper } from '@/app/uiElements/wrappers/GridWrapper'

const MainSection = () => {
  return (
    <main className="relative z-0 w-svw h-fit">
      <GridWrapper>
        <MainPicture />
        <div className="flex flex-col items-center pt-14 sm:pt-28">
          <MobileMainPicture />
          <Offer />
          <MainMenu />
        </div>
        </GridWrapper>
    </main>
  )
}

export default MainSection
