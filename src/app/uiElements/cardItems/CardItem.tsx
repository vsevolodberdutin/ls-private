import React from 'react'

export interface HeaderCardItemProps {
  children: React.ReactNode
}

export const CardItem: React.FC<HeaderCardItemProps> = ({ children }) => (
  <div className=" p-6 bg-white/60 backdrop-blur-xl border border-white/90 rounded-2xl shadow-md">
    {children}
  </div>
)
