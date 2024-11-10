import React from 'react'
import Image from 'next/image'
import * as Typography from '@/app/uiElements/typography/Typography'

interface IconProps {
  src: string
  name: string
  text: string
}

const Icon: React.FC<IconProps> = ({ src, name, text }) => {
  return (
    <div className='flex w-fit items-center mx-auto hover:child:block child:hidden'>
      <div className="w-20 h-20 p-5 flex items-center justify-center border rounded-full mr-5 bg-pink-900/[.3] hover:scale-105 lg:scale-100 scale-75">
        <Image src={src} alt={name} width={90} height={90} />
      </div>
      <div className='w-fit lg:w-[50px]'>
      <Typography.PageHeader text={text} />
      </div>
    </div>
  )
}

export default Icon
