import React from 'react'
import Image from 'next/image'
import * as Typography from '@/app/uiElements/Typography'

interface IconProps {
  readonly src: string
  readonly name: string
  readonly text: string
}

const Icon: React.FC<IconProps> = ({ src, name, text }) => {
  return (
    <div className="group flex w-fit items-center mx-auto">
      <div className="w-20 h-20 p-5 flex items-center justify-center border rounded-full mr-5 bg-pink-900/[.3] hover:scale-105 focus-within:scale-105 lg:scale-100 scale-75 transition-all duration-200">
        <Image
          src={src}
          alt={name}
          width={90}
          height={90}
          className="object-contain"
        />
      </div>
      <div className="w-fit lg:w-[50px]">
        <Typography.PageHeader text={text} />
      </div>
    </div>
  )
}

export default Icon
