import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://livesocionics.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/ls_logo.svg"
          alt="logo"
          className=""
          width={220}
          height={100}
          priority
        />
      </a>
    </div>
  )
}

export default Logo
