import React from 'react'

export interface ContentColumnProps {
  id?: string
  children: any
}

export const ContentColumn: React.FC<ContentColumnProps> = ({ children }) => (
  <div className="flex flex-col gap-3 mb-2">{children}</div>
)

export const TabPanelColumn: React.FC<ContentColumnProps> = ({
  children,
}) => (
  <div
    className="mb-2 gap-3 rounded-xl pr-1
      hidden lg:flex lg:flex-col lg:h-[430px]
      overflow-y-auto
      custom-scrollbar"
  >
    {children}
  </div>
)
