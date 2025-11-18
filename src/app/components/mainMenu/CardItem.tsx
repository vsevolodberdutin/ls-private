'use client'

import React from 'react'
import { CardHeader, CardSubHeader } from '@/app/uiElements/Typography'

export interface MenuItemProps {
  id: string
  title: string
  subtitle: string
}

export const CardItem: React.FC<MenuItemProps> = ({ id, title, subtitle }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="block border-b border-gray-300 bg-zinc-200 p-6 backdrop-blur-2xl w-[340px] h-fit transition duration-500 rounded-xl border cursor-pointer hover:bg-white hover:scale-[102%] no-underline"
    >
      <CardHeader text={title} />
      <CardSubHeader text={subtitle} />
    </a>
  )
}
