import React, { type ReactNode } from 'react'

interface ListColumnProps {
  children: ReactNode
}

export const ListColumn: React.FC<ListColumnProps> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>
}
