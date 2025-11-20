import React from 'react'
import * as Typography from '@/app/uiElements/Typography'

export interface TypographyProps {
  id?: string
  text: string
}

export const Header: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h1
      className={`mb-3 lg:text-3xl text-2xl font-semibold text-pink-950 text-center`}
    >
      {text}
    </h1>
  )
}
export const SubHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <p className={` lg:text-base text-xs font-normal opacity-50 italic`}>
      {text}
    </p>
  )
}

export const CardHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h3 className={`mb-3 lg:text-2xl text-xl font-semibold`}>
      {text} <span className="">-&gt;</span>
    </h3>
  )
}
export const CardItemHeader: React.FC<TypographyProps> = ({ text }) => {
  return <h3 className={`lg:text-2xl text-xl font-semibold`}>{text}</h3>
}
export const CardItemSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <div className={`w-full flex gap-2`}>
      <h3 className={`text-m text-gray-500`}>-</h3>
      <h3 className={`text-m text-gray-500`}>{text}</h3>
    </div>
  )
}
export const CardSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <p
      className={`m-0 text-sm opacity-50 whitespace-nowrap md:hover:whitespace-normal overflow-hidden truncate`}
    >
      {text}
    </p>
  )
}

export const PageHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <p
      className={`lg:text-lg text-base opacity-70 text-pink-950 lg:whitespace-normal whitespace-nowrap  font-bold`}
    >
      {text}
    </p>
  )
}

export const InfoTypography: React.FC<TypographyProps> = ({ text }) => {
  return (
    <p
      className={`lg:text-base text-xs opacity-80 text-white whitespace-pre-line font-bold`}
    >
      {text}
    </p>
  )
}
