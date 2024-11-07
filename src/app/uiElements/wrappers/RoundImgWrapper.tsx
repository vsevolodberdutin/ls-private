import React from 'react'

export interface ShadowImgProps {
  id?: string
  children: any
}

export const RoundImgWrapper: React.FC<ShadowImgProps> = ({ children }) => (
  <div className="relative place-items-center w-[100px] h-[100px] z-50 rounded-full overflow-hidden object-none border-wite-900 border-1 bg-red-100 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] lg:hidden mb-3">
    {children}
  </div>
)
