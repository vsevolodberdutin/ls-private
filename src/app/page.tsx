import { MenuWrapper } from '@/app/components/wrappers/MenuWrapper'
import { CardItem } from '@/app/components/menuItems/CardItem'
import * as products from '@/data/products.json'
import * as homepageTypography from '@/data/homepage-typography.json'
import Image from 'next/image'
import { ShadowImgWrapper } from '@/app/components/wrappers/ShadowImgWrapper'

import Navigation from '@/app/components/menuItems/Navigation'
import { Header, SubHeader } from './uiElements/Typograghy'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />
      <div className="flex w-fit cursor-pointer">
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
        <div className="w-[840px] -ml-16 flex flex-col items-end">
          <div className="mb-10">
            <div className="-mt-6 mb-5">
              <Header text={homepageTypography.title} />
            </div>
            <div className="flex flex-col px-8 py-4 w-fit">
              <Image
                className="relative opacity-40 -ml-7"
                src="/quote.svg"
                alt="quote"
                width={30}
                height={30}
              />
              <SubHeader text={homepageTypography.subtitle1} />
              <SubHeader text={homepageTypography.subtitle2} />
              <SubHeader text={homepageTypography.subtitle3} />
              <Image
                className="relative rotate-180 opacity-40 -mr-10 self-end"
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
