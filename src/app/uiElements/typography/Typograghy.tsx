import React from 'react'

export interface TypographyProps {
  id?: string
  text: string
}

export const Header: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h1 className={`mb-3 lg:text-3xl text-2xl font-semibold text-pink-950 text-center`}>
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
export const CardSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return <p className={`m-0 text-sm opacity-50 text-nowrap md:hover:text-wrap overflow-hidden truncate`}>{text}</p>
}

export const PageHeader: React.FC<TypographyProps> = ({ text }) => {
  return <h2 className={`mb-3 text-3xl font-semibold text-pink-850`}>{text}</h2>
}
