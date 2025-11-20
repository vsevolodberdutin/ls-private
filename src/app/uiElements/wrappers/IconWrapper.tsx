import React from 'react'

export interface IconWrapperProps {
  id?: string
  children: any
}

export const CircleIconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 text-orange-500">
    {children}
  </div>
)

export const EmptyIconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div className=" text-orange-500 flex-shrink-0">{children}</div>
)
