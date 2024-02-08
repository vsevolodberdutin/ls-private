import React from 'react'

export interface MenuWrapperProps {
  id?: string
  children: any
}

export const MenuWrapper: React.FC<MenuWrapperProps> = ({ children }) => (
  <div className="grid h-fit w-fit grid-cols-2 gap-2">{children}</div>
)
