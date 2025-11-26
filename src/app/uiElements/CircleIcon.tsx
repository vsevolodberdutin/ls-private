import React, { ReactNode } from 'react'

interface CircleIconProps {
  icon: ReactNode
  isActive?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeConfig = {
  sm: {
    container: 'w-10 h-10 p-2',
    icon: 'w-6 h-6',
  },
  md: {
    container: 'w-16 h-16 p-3',
    icon: 'w-9 h-9',
  },
  lg: {
    container: 'w-20 h-20 p-4',
    icon: 'w-11 h-11',
  },
}

export const CircleIcon: React.FC<CircleIconProps> = ({
  icon,
  isActive = false,
  size = 'md',
  className = '',
}) => {
  const { container, icon: iconSize } = sizeConfig[size]

  return (
    <div
      className={`flex items-center justify-center rounded-full border border-gray-500 text-gray-500
        transition-colors duration-200
        ${container}
        ${isActive ? 'bg-white' : 'bg-white/50'}
        ${className}`}
    >
      <div className={iconSize}>{icon}</div>
    </div>
  )
}
