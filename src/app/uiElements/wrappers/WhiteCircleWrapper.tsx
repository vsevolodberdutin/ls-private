import React from 'react'

export interface WhiteCircleWrapperProps {
  id?: string
  children: any
}

export const WhiteCircleWrapper: React.FC<WhiteCircleWrapperProps> = ({
  children,
}) => (
  <div className="relative flex items-center justify-center w-[450px] h-[450px] rounded-full bg-white overflow-hidden shadow-md shadow-white bg-opacity-10">
    {children}
  </div>
)
