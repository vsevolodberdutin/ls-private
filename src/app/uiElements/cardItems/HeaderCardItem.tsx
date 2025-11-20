import React from 'react'

export interface HeaderCardItemProps {
  children: React.ReactNode
}

export const HeaderCardItem: React.FC<HeaderCardItemProps> = ({ children }) => (
  <div className="min-h-[110px] p-8 flex items-center justify-center bg-white/90 border border-orange-200 rounded-2xl shadow-md">
    {children}
  </div>
)
