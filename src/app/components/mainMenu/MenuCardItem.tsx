'use client'

import React from 'react'
import { CardHeader, CardSubHeader } from '@/app/uiElements/Typography'

export interface MenuItemProps {
  id: string
  title: string
  subtitle: string
}

export const MenuCardItem: React.FC<MenuItemProps> = ({
  id,
  title,
  subtitle,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className=" hover:opacity-100 opacity-90 hover:border-gray-600 hover:shadow-lg shadow-gray-800 block border-b border-gray-300 bg-white p-6 backdrop-blur-2xl w-[340px] transition duration-500 rounded-xl border cursor-pointer hover:bg-white hover:scale-[103%] no-underline"
    >
      <CardHeader text={title} />
      <CardSubHeader text={subtitle} />
    </a>
  )
}
