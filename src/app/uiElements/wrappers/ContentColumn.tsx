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
  <div className="flex-col gap-3 mb-2 lg:flex lg:h-[430px] hidden overflow-y-auto rounded-xl custom-scrollbar pr-1">
    {children}
  </div>
)
