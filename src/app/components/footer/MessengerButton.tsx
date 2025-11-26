import React from 'react'
import Image from 'next/image'

interface MessengerButtonProps {
  href: string
  icon: string
  label: string
  colorClasses: string
}

export const MessengerButton: React.FC<MessengerButtonProps> = ({
  href,
  icon,
  label,
  colorClasses,
}) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-2.5
        rounded-full shadow-xl shadow-white/10
        transition-all duration-200
        hover:scale-105 ${colorClasses}`}
      aria-label={`Связаться через ${label}`}
    >
      <Image src={icon} alt={label} width={20} height={20} />
      <span className="text-sm font-medium text-amber-100">{label}</span>
    </a>
  )
}
