import React from 'react'

export interface IconWrapperProps {
  id?: string
  children: React.ReactNode
}

export const CircleIconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div className="w-11 h-11 rounded-full bg-white/60 border border-black/20 flex items-center justify-center flex-shrink-0 text-black/50">
    {children}
  </div>
)

export const EmptyIconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div className="text-black/50 flex-shrink-0">{children}</div>
)
