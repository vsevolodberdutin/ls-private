import React from 'react'

export interface ContentRowProps {
  id?: string
  children: any
}

export const ContentRow: React.FC<ContentRowProps> = ({ children }) => (
  <div className="flex gap-3  items-center ">{children}</div>
)
