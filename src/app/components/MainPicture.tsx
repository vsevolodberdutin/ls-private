import React from 'react'
import Image from 'next/image'
import { ShadowImgWrapper } from '../uiElements/wrappers/ShadowImgWrapper'
import { RoundImgWrapper } from '../uiElements/wrappers/RoundImgWrapper'
import { MobileWrapper } from '../uiElements/wrappers/MobileWrapper'
import { WhiteCircleWrapper } from '../uiElements/wrappers/WhiteCircleWrapper'

export const MainPicture: React.FC = () => (
  <ShadowImgWrapper>
    <WhiteCircleWrapper>
      <Image
        className="relative hidden
          tablet:flex tablet:w-[307px]
          desktop:w-96"
        src="/main.svg"
        alt="Eleanor main"
        width={500}
        height={500}
        priority
      />
    </WhiteCircleWrapper>
  </ShadowImgWrapper>
)

export const MobileMainPicture: React.FC = () => (
  <MobileWrapper>
    <RoundImgWrapper>
      <Image
        className="relative inset-y-8 scale-150"
        src="/main.svg"
        alt="Eleanor main"
        width={100}
        height={100}
        priority
      />
    </RoundImgWrapper>
  </MobileWrapper>
)
