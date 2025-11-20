import React from 'react'

export interface HeaderCardItemProps {
  children: React.ReactNode
}

export const CardItem: React.FC<HeaderCardItemProps> = ({ children }) => (
  <div className="min-h-[110px] p-6 pb-8 bg-white/60 backdrop-blur-xl border border-orange-200 rounded-2xl shadow-md">
    {children}
  </div>
)
