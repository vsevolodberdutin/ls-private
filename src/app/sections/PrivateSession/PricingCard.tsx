'use client'

import React from 'react'
import { Send } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'

export type PricingOption = {
  label: string
  price: string
  locations?: string
  message: string
}

/**
 * Pricing card button with hover effect showing "Записаться" (Register)
 */
export const PricingCard: React.FC<{ option: PricingOption }> = ({ option }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(option.message)
    window.location.href = `${CONTACTS.telegram.url}&text=${encodedMessage}`
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full text-left px-4 py-3 rounded-lg border border-orange-200 hover:border-orange-400 bg-orange-50 hover:bg-white hover:shadow-md cursor-pointer transition-all duration-200 group relative text-gray-600 text-sm"
        aria-label={`Записаться на ${option.label}`}
      >
        <span className="group-hover:opacity-0 transition-opacity duration-200">
          <strong>{option.label}</strong>
          {option.locations && ` (${option.locations})`}
          <br />
          <strong>{option.price}</strong>
        </span>
        <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold text-orange-700">
          <Send className="w-4 h-4" />
          Записаться
        </span>
      </button>
    </div>
  )
}
