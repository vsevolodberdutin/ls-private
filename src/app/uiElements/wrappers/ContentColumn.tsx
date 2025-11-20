import React from 'react'

export interface ContentColumnProps {
  id?: string
  children: any
}

export const ContentColumn: React.FC<ContentColumnProps> = ({ children }) => (
  <div className="flex flex-col gap-3">{children}</div>
)

