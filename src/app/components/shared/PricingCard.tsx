'use client'

import React from 'react'
import { Send } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'
import Separator from '@/app/uiElements/Separator'
import { CardSubHeader, PricingDescription } from '@/app/uiElements/Typography'

export type PricingOption = {
  label: string
  price: string
  locations?: string
  description?: readonly string[]
  message: string
}

/**
 * Pricing card button with hover effect showing "Записаться" (Register)
 */
export const PricingCard: React.FC<{ option: PricingOption }> = ({
  option,
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(option.message)
    window.location.href = `${CONTACTS.telegram.url}&text=${encodedMessage}`
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="group relative w-full cursor-pointer text-left text-sm text-gray-600
          rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 min-h-16
          hover:shadow-md
          transition-all duration-200
          hover:border-orange-400 hover:bg-white"
        aria-label={`Записаться на ${option.label}`}
      >
        <span className="flex items-center justify-between group-hover:opacity-0 transition-opacity duration-200">
          <div className="flex flex-col gap-1">
            <strong>{option.label}</strong>

            {option.description && (
              <div className="mt-1 space-y-0.5">
                {option.description.map((item, index) => (
                  <PricingDescription key={index} text={`- ${item}`} />
                ))}
              </div>
            )}
          </div>
          <strong className="self-start">{option.price}</strong>
        </span>

        <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold text-orange-700">
          <Send className="w-4 h-4" />
          Записаться
        </span>
      </button>
    </div>
  )
}
