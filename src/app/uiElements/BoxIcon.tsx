import React, { type ReactNode } from 'react'

interface BoxIconProps {
  icon: ReactNode
  variant?: 'default' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variantConfig = {
  default: 'border-white/40 bg-transparent text-white/90  w-5 h-5',
  white:
    'border-white/40 bg-white/10 backdrop-blur-lg text-gray-800/80  w-6 h-6',
}

const sizeConfig = {
  sm: 'p-1.5 w-[32px] h-[32px]',
  md: 'p-2 w-[40px] h-[40px]',
  lg: 'p-3 w-[48px] h-[48px]',
}

export const BoxIcon: React.FC<BoxIconProps> = ({
  icon,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 rounded-lg border
        ${variantConfig[variant]}
        ${sizeConfig[size]}
        ${className}`}
    >
      {icon}
    </div>
  )
}
