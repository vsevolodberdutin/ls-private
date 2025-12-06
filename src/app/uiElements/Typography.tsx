import React from 'react'

export interface TypographyProps {
  id?: string
  text: string | string[] | readonly string[]
}

export const Header: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h1
      className="mb-3 lg:text-3xl text-2xl font-semibold text-center"
      style={{ color: '#4c0519' }}
    >
      {text}
    </h1>
  )
}
export const SubHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <p
      className={` lg:text-base text-xs font-normal opacity-50 italic`}
      style={{ color: 'var(--subheader-text-rgb)' }}
    >
      {text}
    </p>
  )
}

export const CardHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h3 className={`mb-3 lg:text-2xl text-xl font-semibold `}>
      {text} <span className="">-&gt;</span>
    </h3>
  )
}
export const CardItemHeader: React.FC<TypographyProps> = ({ text }) => {
  return <h3 className={`lg:text-2xl text-xl font-semibold`}>{text}</h3>
}
export const InfoItemHeader: React.FC<TypographyProps> = ({ text }) => {
  return <h3 className={`text-sm text-gray-700 font-semibold`}>{text}</h3>
}
export const InfoItemSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return <h3 className={`text-sm text-black/70`}>{text}</h3>
}

export const CardItemSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return (
    <div className={`w-full flex gap-2`}>
      <h3 className={`text-m text-gray-500`}>-</h3>
      <h3 className={`text-m text-gray-500`}>{text}</h3>
    </div>
  )
}
export const Footnote: React.FC<TypographyProps> = ({ text }) => {
  return (
    <div className={`w-full flex gap-2`}>
      <h3 className={`text-xs text-gray-500`}>*</h3>
      <div className={`flex flex-col gap-1`}>
        {Array.isArray(text)
          ? text.map((line, i) => (
              <h3 className={`text-xs text-gray-500`} key={i}>
                {line}
              </h3>
            ))
          : text}
      </div>
    </div>
  )
}
export const CardSubHeader: React.FC<TypographyProps> = ({ text }) => {
  return <p className={`m-0 text-sm opacity-50`}>{text}</p>
}
export const PricingDescription: React.FC<TypographyProps> = ({ text }) => {
  return <p className={`m-0 text-sm text-black/70`}>{text}</p>
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
