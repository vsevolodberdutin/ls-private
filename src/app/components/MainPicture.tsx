import React from 'react'
import Image from 'next/image'
import { ShadowImgWrapper } from '../uiElements/wrappers/ShadowImgWrapper'
import { RoundImgWrapper } from '../uiElements/wrappers/RoundImgWrapper'
import { MobileWrapper } from '../uiElements/wrappers/MobileWrapper'

export const MainPicture: React.FC = () => (
  <ShadowImgWrapper>
    <Image
      className="relative hidden lg:flex"
      src="/main.svg"
      alt="Eleonora main"
      width={400}
      height={400}
      priority
    />
  </ShadowImgWrapper>
)

export const MobileMainPicture: React.FC = () => (
  <MobileWrapper>
    <RoundImgWrapper>
      <Image
        className="relative inset-y-8 scale-150"
        src="/main.svg"
        alt="Eleonora main"
        width={100}
        height={100}
        priority
      />
    </RoundImgWrapper>
  </MobileWrapper>
)
