'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Send } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'
import { PricingDescription } from '@/app/uiElements/Typography'

export type PricingOption = {
  label: string
  price: string
  locations?: string
  description?: readonly string[]
  message: string
}

/**
 * Pricing card button with hover effect showing "Записаться" (Register)
 * On mobile: first click shows hover state, second click navigates
 * Active state auto-resets after 5 seconds
 */
export const PricingCard: React.FC<{ option: PricingOption }> = ({
  option,
}) => {
  const [isActive, setIsActive] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    // Check if on mobile (< 1024px)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      if (!isActive) {
        // First click: show hover state
        setIsActive(true)

        // Auto-reset after 5 seconds
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
          setIsActive(false)
        }, 5000)

        return
      }
      // Second click: navigate
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }

    // Desktop or second mobile click: navigate immediately
    setIsActive(false)
    const encodedMessage = encodeURIComponent(option.message)
    window.location.href = `${CONTACTS.telegram.url}&text=${encodedMessage}`
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={`group relative w-full cursor-pointer text-left text-sm text-gray-600
          rounded-lg border px-4 py-3 min-h-16
          transition-all duration-200
          ${
            isActive
              ? 'border-orange-400 bg-white shadow-md'
              : 'border-orange-200 bg-orange-50 hover:shadow-md hover:border-orange-400 hover:bg-white'
          }`}
        aria-label={`Записаться на ${option.label}`}
      >
        <span
          className={`flex items-start justify-between transition-opacity duration-200
            ${isActive ? 'opacity-0' : 'group-hover:opacity-0'}`}
        >
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
          <strong className="ml-4 flex-shrink-0">{option.price}</strong>
        </span>

        <span
          className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-200 font-semibold text-orange-700
            ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        >
          <Send className="w-4 h-4" />
          Записаться
        </span>
      </button>
    </div>
  )
}
