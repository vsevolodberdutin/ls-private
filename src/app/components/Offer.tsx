import React from 'react'
import Image from 'next/image'
import { Header, SubHeader } from '@/app/uiElements/typography/Typograghy'
import * as homepageTypography from '@/data/homepage-typography.json'

export const Offer: React.FC = () => (
  <div className="mb-8 flex flex-col items-center">
    <div className="mb-2">
      <Header text={homepageTypography.title} />
    </div>
    <div className="flex flex-col px-8 py-1 w-fit">
      <Image
        className="relative opacity-40 -ml-7 h-auto size-4 lg:size-7"
        src="/quote.svg"
        alt="quote"
        width={30}
        height={30}
      />
      <SubHeader text={homepageTypography.subtitle1} />
      <SubHeader text={homepageTypography.subtitle2} />
      <SubHeader text={homepageTypography.subtitle3} />
      <Image
        className="relative rotate-180 opacity-40 -mr-10 self-end size-4 lg:size-7"
        src="/quote.svg"
        alt="quote"
        width={30}
        height={30}
      />
    </div>
  </div>
)
