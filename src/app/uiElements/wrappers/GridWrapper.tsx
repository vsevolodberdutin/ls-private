import React from 'react'

export interface GridWrapperProps {
  id?: string
  children: any
}

export const GridWrapper: React.FC<GridWrapperProps> = ({ children }) => (
  <div className="h-fit w-svw px-10 py-4 pb-10 grid grid-cols-1 lg:grid-cols-[450px_850px] justify-center items-start">{children}</div>
)
