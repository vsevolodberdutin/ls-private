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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

  }

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="block max-w-[340px] cursor-pointer no-underline
        rounded-xl border border-gray-300 bg-white p-6
        opacity-90 shadow-lg shadow-gray-600/50
        transition duration-500
        hover:scale-[103%] hover:border-white hover:opacity-100"
    >
      <CardHeader text={title} />
      <CardSubHeader text={subtitle} />
    </a>
  )
}
