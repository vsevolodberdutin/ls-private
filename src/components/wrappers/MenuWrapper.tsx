import { CardHeader, CardSubHeader } from '@/uiElements/Typograghy'
import React from 'react'

export interface MenuWrapperProps {
  id?: string
  children: any
}

export const MenuWrapper: React.FC<MenuWrapperProps> = ({ children }) => (
  <div className="ml-20 grid h-fit w-fit grid-cols-2 gap-2 text-left">
    {children}
  </div>
)
