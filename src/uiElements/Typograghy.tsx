import React from 'react'

export interface TypographyProps {
  id?: string
  text: string
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
