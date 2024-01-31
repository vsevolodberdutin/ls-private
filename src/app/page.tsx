import { MenuWrapper } from '@/components/wrappers/MenuWrapper'
import { CardItem } from '@/components/menuItems/CardItem'
import * as products from '@/data/products.json'
import Image from 'next/image'
import { ShadowImgWrapper } from '@/components/wrappers/ShadowImgWrapper'
import Logo from '@/uiElements/Logo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Logo />

      <div className="flex w-fit cursor-pointer">
        <ShadowImgWrapper>
          <Image
            className="relative w-[460px]"
            src="/main.svg"
            alt="Eleonora main"
            width={0}
            height={0}
            priority
          />
        </ShadowImgWrapper>

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
    </main>
  )
}
