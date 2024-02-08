import React from 'react'

export interface TypographyProps {
  id?: string
  text: string
}

export const Header: React.FC<TypographyProps> = ({ text }) => {
  return <h1 className={`mb-3 text-3xl font-semibold text-pink-950`}>{text}</h1>
}
export const SubHeader: React.FC<TypographyProps> = ({ text }) => {
  return <h2 className={` text-lg font-normal opacity-50 italic`}>{text}</h2>
}
export const CardHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h2 className={`mb-3 text-2xl font-semibold`}>
      {text} <span className="">-&gt;</span>
    </h2>
  )
}
export const CardSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return <p className={`m-0 text-sm opacity-50`}>{text}</p>
}
