import React, { ReactNode } from 'react'

interface BoxIconProps {
  icon: ReactNode
  variant?: 'default' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variantConfig = {
  default: 'border-white/40 bg-transparent',
  white: 'border-white/40 bg-white/10 backdrop-blur-lg',
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
      className={`flex items-center justify-center flex-shrink-0 rounded-lg border text-white/90 w-5 h-5
        ${variantConfig[variant]}
        ${sizeConfig[size]}
        ${className}`}
    >
      {icon}
    </div>
  )
}
