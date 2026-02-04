import React from 'react'

export interface WhiteCircleWrapperProps {
  id?: string
  children: any
}

export const WhiteCircleWrapper: React.FC<WhiteCircleWrapperProps> = ({
  children,
}) => (
  <div
    className="relative flex items-center justify-center rounded-full bg-white overflow-hidden shadow-2xl shadow-white bg-opacity-10 -inset-y-10
      border-gray-400/30 border-[4px]
      tablet:w-[280px] tablet:h-[280px]
      desktop:w-[380px] desktop:h-[380px]"
  >
    {children}
  </div>
)
