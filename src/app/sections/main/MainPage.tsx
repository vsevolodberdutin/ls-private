import React from 'react'
import { CardItem } from '@/app/components/CardItem'
import Navigation from '@/app/sections/Navigation'
import { Header, SubHeader } from '@/app/uiElements/typography/Typograghy'
import { MenuWrapper } from '@/app/uiElements/wrappers/MenuWrapper'
import { ShadowImgWrapper } from '@/app/uiElements/wrappers/ShadowImgWrapper'
import Image from 'next/image'
import * as products from '@/data/products.json'
import * as homepageTypography from '@/data/homepage-typography.json'

const MainPage = () => {
  return (
    <main className="relative z-0 flex justify-center">
      <Navigation />
      <div className="flex h-svh max-h-[860px] w-[1280px] items-center mt-5">
        <ShadowImgWrapper>
          <Image
            className="relative"
            src="/main.svg"
            alt="Eleonora main"
            width={480}
            height={480}
            priority
          />
        </ShadowImgWrapper>
        <div className="-ml-10 flex flex-col items-end">
          <div className="mb-10">
            <div className="mb-5">
              <Header text={homepageTypography.title} />
            </div>
            <div className="flex flex-col px-8 py-4 w-fit">
              <Image
                className="relative opacity-40 -ml-7 h-auto"
                src="/quote.svg"
                alt="quote"
                width={30}
                height={30}
              />
              <SubHeader text={homepageTypography.subtitle1} />
              <SubHeader text={homepageTypography.subtitle2} />
              <SubHeader text={homepageTypography.subtitle3} />
              <Image
                className="relative rotate-180 opacity-40 -mr-10 self-end "
                src="/quote.svg"
                alt="quote"
                width={30}
                height={30}
              />
            </div>
          </div>

          <MenuWrapper>
            {products.map((item) => (
              <CardItem
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </MenuWrapper>
        </div>
      </div>
    </main>
  )
}

export default MainPage
