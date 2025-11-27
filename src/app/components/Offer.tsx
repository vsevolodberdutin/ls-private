import React from 'react'
import Image from 'next/image'
import { Header, SubHeader } from '@/app/uiElements/Typography'
import { HOMEPAGE } from '@/constants/homepage'

export const Offer: React.FC = () => (
  <div className="mb-8 flex flex-col items-center">
    <div className="mb-2 tablet:-ml-[280px] desktop:-ml-0">
      <Header text={HOMEPAGE.title} />
    </div>
    <div className="flex flex-col px-8 py-1 w-fit tablet:hidden desktop:flex">
      <Image
        className="relative opacity-40 -ml-7 h-auto size-4 lg:size-6"
        src="/quote.svg"
        alt="quote"
        width={30}
        height={30}
      />
      <SubHeader text={HOMEPAGE.subtitle1} />
      <SubHeader text={HOMEPAGE.subtitle2} />
      <SubHeader text={HOMEPAGE.subtitle3} />
      <Image
        className="relative rotate-180 opacity-40 -mr-7 self-end size-4 lg:size-6"
        src="/quote.svg"
        alt="quote"
        width={30}
        height={30}
      />
    </div>
  </div>
)
