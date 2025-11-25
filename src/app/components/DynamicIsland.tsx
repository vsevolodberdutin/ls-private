'use client'

import React from 'react'
import { ScrollButton } from '@/app/uiElements/buttons/ScrollButton'
import { useScrollPosition } from '@/app/hooks/useScrollPosition'
import { PRODUCTS } from '@/constants/products'

export const DynamicIsland: React.FC = () => {
  const isScrolled = useScrollPosition(window.innerHeight)

  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 items-center justify-center mt-3 hidden xl:flex
        transition-all duration-700 ease-out
        ${
          isScrolled
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-20 pointer-events-none'
        }`}
    >
      {PRODUCTS.map((product) => (
        <ScrollButton key={product.id} id={product.id} label={product.title} />
      ))}
    </div>
  )
}
