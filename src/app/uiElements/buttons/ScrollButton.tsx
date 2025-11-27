import React from 'react'

interface ScrollButtonProps {
  id: string
  label: string
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({ id, label }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-3 py-2 xl:text-sm text-xs font-medium text-white/40 no-underline whitespace-nowrap
        transition-all duration-300
        hover:text-white hover:scale-105"
      aria-label={`Scroll to ${label}`}
    >
      {label}
    </button>
  )
}
