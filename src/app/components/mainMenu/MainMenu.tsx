import React from 'react'
import { CardItem } from '@/app/components/mainMenu/CardItem'
import { MenuWrapper } from '@/app/uiElements/wrappers/MenuWrapper'
import { PRODUCTS } from '@/constants/products'

const MainMenu = () => {
  return (
    <MenuWrapper>
      {PRODUCTS.map((item) => (
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
