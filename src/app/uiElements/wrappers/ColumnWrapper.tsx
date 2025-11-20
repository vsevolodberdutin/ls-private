import React from 'react'

export interface ColumnWrapperProps {
  id?: string
  children: any
}

export const ColumnWrapper: React.FC<ColumnWrapperProps> = ({ children }) => (
  <div className="flex flex-col gap-6">{children}</div>
)

