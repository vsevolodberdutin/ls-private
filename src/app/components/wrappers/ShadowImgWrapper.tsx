import { CardHeader, CardSubHeader } from '@/app/uiElements/Typograghy'
import React from 'react'

export interface ShadowImgProps {
  id?: string
  children: any
}

const generalStyle = 'relative flex place-items-center'
const whiteShadowStyle =
  "before:absolute before:h-[1300px] before:w-[700px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']"
const blueShadowStyle =
  "after:absolute after:-z-20 after:h-[540px] after:w-[270px] after:translate-x-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] z-[-1]"

export const ShadowImgWrapper: React.FC<ShadowImgProps> = ({ children }) => (
  <div
    className={generalStyle + ' ' + whiteShadowStyle + ' ' + blueShadowStyle}
  >
    {children}
  </div>
)
