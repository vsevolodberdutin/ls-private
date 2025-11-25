'use client'

import { useState, useEffect } from 'react'

export const useScrollPosition = (threshold: number = 0) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container')
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop
        setIsScrolled(scrollTop > threshold)
      }
    }

    const scrollContainer = document.querySelector('.scroll-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial position

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [threshold])

  return isScrolled
}
