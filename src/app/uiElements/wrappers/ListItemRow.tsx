import React, { type ReactNode } from 'react'

interface ListItemRowProps {
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export const ListItemRow: React.FC<ListItemRowProps> = ({
  icon,
  children,
  className = '',
}) => {
  return (
    <div
      className={`group flex items-start  gap-4 rounded-xl border px-4 py-2
        border-white/50 bg-white/20 backdrop-blur-lg
        transition-all
        hover:bg-white/30 hover:border-white/30
        ${className}`}
    >
      {icon}
      {children}
    </div>
  )
}
