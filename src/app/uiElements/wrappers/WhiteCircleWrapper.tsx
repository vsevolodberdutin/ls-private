import React from 'react'

export interface WhiteCircleWrapperProps {
  id?: string
  children: any
}

export const WhiteCircleWrapper: React.FC<WhiteCircleWrapperProps> = ({
  children,
}) => (
  <div
    className="relative flex items-center justify-center rounded-full bg-white overflow-hidden shadow-md shadow-white bg-opacity-10
      tablet:w-[360px] tablet:h-[360px]
      desktop:w-[450px] desktop:h-[450px]"
  >
    {children}
  </div>
)
