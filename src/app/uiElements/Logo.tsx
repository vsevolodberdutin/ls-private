import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="">
      <a
        className=""
        href="https://livesocionics.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/ls_logo.svg"
          alt="logo"
          style={{ filter: 'var(--logo-filter)' }}
          width={140}
          height={40}
          priority
        />
      </a>
    </div>
  )
}

export default Logo
