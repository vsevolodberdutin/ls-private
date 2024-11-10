import React from 'react'
import {
  CardHeader,
  CardSubHeader,
} from '@/app/uiElements/typography/Typography'

export interface MenuItemProps {
  id: string
  title: string
  subtitle: string
}

export const CardItem: React.FC<MenuItemProps> = ({ id, title, subtitle }) => (
  <div
    id={id}
    className="border-b border-gray-300 bg-zinc-200 p-6 backdrop-blur-2xl w-[340px] h-fit transition duration-500 rounded-xl border cursor-pointer hover:bg-white  "
  >
    <CardHeader text={title} />
    <CardSubHeader text={subtitle} />
  </div>
)