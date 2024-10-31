import React from 'react'

export interface TypographyProps {
  id?: string
  text: string
}

export const Header: React.FC<TypographyProps> = ({ text }) => {
  return <h1 className={`mb-3 text-3xl font-semibold text-pink-950`}>{text}</h1>
}
export const PageHeader: React.FC<TypographyProps> = ({ text }) => {
  return <h2 className={`mb-3 text-3xl font-semibold text-pink-850`}>{text}</h2>
}
export const SubHeader: React.FC<TypographyProps> = ({ text }) => {
  return <p className={` text-lg font-normal opacity-50 italic`}>{text}</p>
}
export const CardHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h3 className={`mb-3 text-2xl font-semibold`}>
      {text} <span className="">-&gt;</span>
    </h3>
  )
}
export const BlockHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h3 className={`mb-3 text-2xl font-semibold`}>
      {text} <span className="">-&gt;</span>
    </h3>
  )
}
export const CardSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return <p className={`m-0 text-sm opacity-50`}>{text}</p>
}
