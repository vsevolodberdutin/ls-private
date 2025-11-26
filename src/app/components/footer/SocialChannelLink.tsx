import React from 'react'

interface SocialChannelLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  username: string
  hoverColorClasses: string
}

export const SocialChannelLink: React.FC<SocialChannelLinkProps> = ({
  href,
  icon,
  label,
  username,
  hoverColorClasses,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 p-4
        rounded-xl border border-white/20 bg-white/5
        transition-all duration-200
        hover:scale-[102%] ${hoverColorClasses}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-base font-semibold text-amber-100 group-hover:text-amber-300">
          {username}
        </p>
      </div>
    </a>
  )
}
