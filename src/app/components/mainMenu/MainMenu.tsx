'use client'

import React from 'react'

import { MenuWrapper } from '@/app/uiElements/wrappers/MenuWrapper'
import { PRODUCTS } from '@/constants/products'
import { MenuCardItem } from './MenuCardItem'

const MainMenu = () => {
  return (
    <MenuWrapper>
      {PRODUCTS.map((item) => (
        <MenuCardItem
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
