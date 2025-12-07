'use client'

import React from 'react'
import Image from 'next/image'
import { Eye } from 'lucide-react'

/**
 * Gallery card with clickable image thumbnails
 * Displays circular image buttons with eye icon overlay on hover
 */
export const GalleryCard: React.FC<{
  images: readonly string[]
  onImageClick: (imageSrc: string) => void
}> = ({ images, onImageClick }) => {
  return (
    <div className="flex justify-center gap-3 flex-wrap p-6">
      {images.map((imageSrc, index) => (
        <button
          key={index}
          onClick={() => onImageClick(imageSrc)}
          className="group relative w-20 h-20 sm:w-20 sm:h-20 flex-shrink-0
              rounded-full border-2 border-black/50 overflow-hidden
              shadow-md
              transition-all duration-200
              hover:border-white/50 hover:scale-110 hover:shadow-lg"
          aria-label={`Просмотреть изображение ${index + 1}`}
        >
          <Image
            src={imageSrc}
            alt={`Пример ${index + 1}`}
            fill
            className="object-cover transition-all duration-300"
            sizes="80px"
            loading="lazy"
          />
          {/* Smooth background overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
            {/* Eye icon */}
            <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
          </div>
        </button>
      ))}
    </div>
  )
}
