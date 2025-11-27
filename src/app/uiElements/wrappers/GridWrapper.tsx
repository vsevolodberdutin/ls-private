import React from 'react'

export interface GridWrapperProps {
  id?: string
  children: React.ReactNode
}

export const GridWrapper: React.FC<GridWrapperProps> = ({ children }) => (
  <div
    className="h-fit w-full px-5 py-10 sp-10
      grid grid-cols-1 justify-center items-start gap-5
      tablet:grid-cols-[1fr_2fr] tablet:px-8 tablet:gap-4
      desktop:grid-cols-[450px_850px] desktop:px-10 desktop:gap-5"
  >
    {children}
  </div>
)
export const GridProductWrapper: React.FC<GridWrapperProps> = ({
  children,
}) => (
  <div
    className="h-fit w-full px-5 py-1
      grid grid-cols-1 justify-center items-start gap-5
      tablet:grid-cols-[1fr_2fr] tablet:px-8 tablet:gap-4
      desktop:grid-cols-[450px_850px] desktop:px-10 desktop:gap-5"
  >
    {children}
  </div>
)
