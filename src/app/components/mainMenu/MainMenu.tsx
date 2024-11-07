import React from 'react'
import { CardItem } from '@/app/components/mainMenu/CardItem'
import { MenuWrapper } from '@/app/uiElements/wrappers/MenuWrapper'
import * as products from '@/data/products.json'

const MainMenu = () => {
  return (
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
  )
}

export default MainMenu
