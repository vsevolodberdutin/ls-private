'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'

export interface FamilyPricingOption {
  name: string
  description: string
  price: string
  additional?: string
  message: string
}

interface FamilyPricingCardProps {
  option: FamilyPricingOption
}

/**
 * Pricing card for family counseling services
 * Displays service type, description, price, and contact button
 */
export const FamilyPricingCard: React.FC<FamilyPricingCardProps> = ({
  option,
}) => {
  const whatsappUrl = `https://wa.me/${CONTACTS.whatsapp.number}?text=${encodeURIComponent(option.message)}`

  return (
    <li className="px-4 py-3 rounded-lg border border-orange-200 bg-orange-50/30">
      <div className="flex flex-col gap-2">
        {/* Service Name */}
        <div className="font-semibold text-gray-800">{option.name}</div>

        {/* Description */}
        <div className="text-sm text-gray-600 leading-relaxed">
          {option.description}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-orange-700 font-semibold">{option.price}</div>

          {/* Contact Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Записаться
          </a>
        </div>

        {/* Additional Info */}
        {option.additional && (
          <div className="text-xs text-gray-500 italic mt-1">
            {option.additional}
          </div>
        )}
      </div>
    </li>
  )
}
