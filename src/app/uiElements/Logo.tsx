'use client'

import React from 'react'
import Image from 'next/image'

const Logo = () => {
  const scrollToTop = () => {
    const mainSection = document.getElementById('main')
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="">
      <button
        onClick={scrollToTop}
        className="cursor-pointer bg-transparent border-none p-0
          transition-opacity duration-200"
        aria-label="Scroll to top"
      >
        <Image
          src="/ls_logo.svg"
          alt="logo"
          style={{ filter: 'var(--logo-filter)' }}
          width={140}
          height={40}
          priority
        />
      </button>
    </div>
  )
}

export default Logo
