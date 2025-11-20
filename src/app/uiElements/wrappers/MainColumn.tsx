import React from 'react'

export interface MainColumnProps {
  id?: string
  children: any
}

export const MainColumn: React.FC<MainColumnProps> = ({ children }) => (
  <div className="flex flex-col gap-6">{children}</div>
)
