import React from 'react'

export interface ShadowImgProps {
  id?: string
  children: any
}

export const MobileWrapper: React.FC<ShadowImgProps> = ({ children }) => (
  <div className="lg:hidden ">
    {children}
  </div>
)
