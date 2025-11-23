import React, { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { ListColumn } from '@/app/uiElements/wrappers/ListColumn'

interface InfoItem {
  label: string
  value: string
}

interface InfoCardProps {
  icon: ReactNode
  title?: string
  description?: string
  items?: InfoItem[]
  price?: string
  message?: string
  children?: ReactNode
  className?: string
}

/**
 * Reusable info card component with icon, title, and description
 * Matches the PrivateSession card styling with glass-morphism effect
 * Supports both simple content (title/description) and custom children for complex layouts
 */
export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  items,
  price,
  message,
  children,
  className = '',
}) => {
  return (
    <div
      className={`bg-white/60 backdrop-blur-xl rounded-2xl border border-orange-200 p-6
        shadow-sm
        transition
        hover:shadow-md ${className}`}
    >
      {children ? (
        children
      ) : (
        <ListColumn gap="2">
          {/* Header with icon and title */}
          {title && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 flex-shrink-0 rounded-full border border-orange-200 bg-orange-50">
                <div className="w-6 h-6 text-orange-500">{icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
          )}

          {/* Items list */}
          {items && items.length > 0 && (
            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index}>
                  <div className="text-xs font-semibold text-gray-700 mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Price */}
          {price && (
            <div className="text-2xl font-bold text-orange-700 pt-2">{price}</div>
          )}

          {/* Contact Button */}
          {message && (
            <a
              href={`https://wa.me/79103811250?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-white
                rounded-lg bg-green-500 px-4 py-3
                transition-colors
                hover:bg-green-600"
            >
              Записаться
            </a>
          )}
        </ListColumn>
      )}
    </div>
  )
}
