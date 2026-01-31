import React from 'react'

export interface WhiteCircleWrapperProps {
  id?: string
  children: any
}

export const WhiteCircleWrapper: React.FC<WhiteCircleWrapperProps> = ({
  children,
}) => (
  <div
    className="relative flex items-center justify-center rounded-2xl bg-white overflow-hidden shadow-2xl shadow-white bg-opacity-10
      tablet:w-[280px] tablet:h-[400px]
      desktop:w-[380px] desktop:h-[520px]"
  >
    {children}
  </div>
)
