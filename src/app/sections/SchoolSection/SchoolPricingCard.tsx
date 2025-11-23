'use client'

import React from 'react'
import { MessageCircle, Check } from 'lucide-react'

export interface SchoolPackage {
  name: string
  price: string
  note?: string
  features: readonly string[]
  message: string
}

interface SchoolPricingCardProps {
  package: SchoolPackage
}

/**
 * Pricing card for school packages
 * Displays package name, features, price, and contact button
 */
export const SchoolPricingCard: React.FC<SchoolPricingCardProps> = ({
  package: pkg,
}) => {
  const whatsappUrl = `https://wa.me/79103811250?text=${encodeURIComponent(pkg.message)}`

  return (
    <div className="bg-white/60 backdrop-blur-xl
      rounded-2xl border border-orange-200 p-6
      shadow-sm
      transition
      hover:shadow-md">
      {/* Package Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{pkg.name}</h3>

      {/* Price */}
      <div className="text-2xl font-bold text-orange-700 mb-4">
        {pkg.price}
      </div>

      {/* Note */}
      {pkg.note && (
        <div className="text-xs text-gray-500 italic mb-4">{pkg.note}</div>
      )}

      {/* Features List */}
      <ul className="space-y-2 mb-4">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex gap-2 items-start text-sm text-gray-700">
            <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-white
          rounded-lg bg-green-500 px-4 py-3
          transition-colors
          hover:bg-green-600"
      >
        <MessageCircle className="w-4 h-4" />
        Записаться
      </a>
    </div>
  )
}
