import React, { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface InfoCardProps {
  icon: LucideIcon
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}

/**
 * Reusable info card component with icon, title, and description
 * Matches the PrivateSession card styling with glass-morphism effect
 * Supports both simple content (title/description) and custom children for complex layouts
 */
export const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  description,
  children,
  className = '',
}) => {
  return (
    <div
      className={`bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition ${className}`}
    >
      {(title || description) && !children ? (
        <div className="flex gap-3 items-center">
          <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-orange-500" />
          </div>
          <div className="flex-1">
            {title && (
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>{title}</strong>
              </p>
            )}
            {description && (
              <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  )
}
