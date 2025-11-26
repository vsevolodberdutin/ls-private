import React from 'react'

export interface GridWrapperProps {
  id?: string
  children: React.ReactNode
}

export const GridWrapper: React.FC<GridWrapperProps> = ({ children }) => (
  <div className="h-fit w-full p-10 grid grid-cols-1 lg:grid-cols-[450px_850px] justify-center items-start gap-5">{children}</div>
)
export const GridProductWrapper: React.FC<GridWrapperProps> = ({ children }) => (
  <div className="h-fit w-full px-10 grid grid-cols-1 lg:grid-cols-[450px_850px] justify-center items-start gap-5">{children}</div>
)
