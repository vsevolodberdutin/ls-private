import {
  CardHeader,
  CardSubHeader,
} from '@/app/uiElements/typography/Typograghy'
import React from 'react'

export interface MenuItemProps {
  id: string
  title: string
  subtitle: string
}

export const CardItem: React.FC<MenuItemProps> = ({ id, title, subtitle }) => (
  <div
    id={id}
    className="border-b border-gray-300 bg-zinc-200 p-6 backdrop-blur-2xl w-[340px] min-h-fit rounded-xl border cursor-pointer  hover:bg-gray-100   "
  >
    <CardHeader text={title} />
    <CardSubHeader text={subtitle} />
  </div>
)
export const BlockItem: React.FC<MenuItemProps> = ({ id, title, subtitle }) => (
  <div
    id={id}
    className="border-b border-gray-300 bg-zinc-400 p-6 backdrop-blur-2xl w-[100%] min-h-fit rounded-xl border cursor-pointer  hover:bg-gray-100   "
  >
    <CardHeader text={title} />
    <CardSubHeader text={subtitle} />
  </div>
)
