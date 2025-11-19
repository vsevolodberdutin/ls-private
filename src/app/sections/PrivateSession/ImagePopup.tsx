'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

/**
 * Image popup modal with backdrop and keyboard navigation
 */
export const ImagePopup: React.FC<{
  imageSrc: string | null
  onClose: () => void
}> = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (imageSrc) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [imageSrc, onClose])

  if (!imageSrc) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg animate-in fade-in duration-300 cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
    >
      <div className="relative w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
        <Image
          src={imageSrc}
          alt="Просмотр отчета"
          fill
          className="object-cover"
          sizes="600px"
          priority
        />
      </div>
    </div>
  )
}
