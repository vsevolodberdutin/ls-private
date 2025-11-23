import React from 'react'

export interface ContentColumnProps {
  id?: string
  children: any
}

export const ContentColumn: React.FC<ContentColumnProps> = ({ children }) => (
  <div className="flex flex-col gap-3 mb-2">{children}</div>
)

export const FixedContentColumn: React.FC<ContentColumnProps> = ({ children }) => (
  <div className="flex flex-col gap-3 mb-2 lg:h-[430px]">{children}</div>
)

