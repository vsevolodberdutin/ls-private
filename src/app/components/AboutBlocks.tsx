import React from 'react'
import * as Typography from '@/app/uiElements/Typography'
import * as about from '@/data/about.json'
import { GridWrapper } from '@/app/uiElements/wrappers/GridWrapper'
import Image from 'next/image'
import Icon from '@/app/uiElements/Icon'

export interface MenuItemProps {
  id?: string
  text: string
}

const RowItem: React.FC<MenuItemProps> = ({ id, text }) => (
  <div
    id={id}
    className="border-b border-gray-200 bg-neutral-900/[.1]d px-6 py-2 w-[100%] h-[100%] rounded-xl border hover:scale-[105%] group-hover:bg-pink-900/[.3] bg-pink-900/[.2] "
  >
    {text && <Typography.InfoTypography text={text} />}
  </div>
)

const LabelItem: React.FC<MenuItemProps> = ({ id, text }) => (
  <div
    id={id}
    className="border-b border-gray-200 bg-neutral-900/[.1]d ml-3 px-2 py-1 max-w-[70svw] lg:w-[100%] h-[30px] rounded-lg border hover:scale-[105%]  bg-white/[.5] "
  >
    {text && <Typography.CardSubHeader text={text} />}
  </div>
)

export const IntroductionBlock = () => {
  return (
    <GridWrapper>
      <Icon
        src={'/blockIcons/introduction.svg'}
        name={'introduction'}
        text={'Будем\nзнакомы!'}
      />
      <div className="grid gap-0.5 rounded-xl">
        <div className="group">
          <RowItem text={about.introduction} />
        </div>
      </div>
    </GridWrapper>
  )
}
export const EducationBlock = () => {
  return (
    <GridWrapper>
      <Icon
        src={'/blockIcons/education.svg'}
        name={'education'}
        text={'Академическая\nоснова'}
      />
      <div className="grid gap-1 rounded-xl">
        {about.education.map((item) => (
          <div className="group">
            <RowItem key={item} text={item} />
          </div>
        ))}
      </div>
    </GridWrapper>
  )
}

export const PublicationBlock = () => {
  return (
    <GridWrapper>
      <Icon
        src={'/blockIcons/publications.svg'}
        name={'publications'}
        text={'Научные\nпубликации'}
      />
      <div className="grid grid-cols-1 gap-1 h-fit">
        {about.articles.map((item) => (
          <div className="grid grid-cols-[2fr_1fr] gap-1.5 hover:gap-5 hover:scale-[101%] group rounded-xl">
            <RowItem key={item.name} text={item.name} />
            <RowItem key={item.data} text={item.data} />
          </div>
        ))}
      </div>
    </GridWrapper>
  )
}

export const CompaniesBlock = () => {
  return (
    <GridWrapper>
      <Icon
        src={'/blockIcons/companies.svg'}
        name={'education'}
        text={'Мои\nклиенты'}
      />
      <div className="flex w-full flex-wrap justify-center">
        {about.companies.map((item) => (
          <div
            className="px-4 py-2 flex items-center grid-flow-dense "
            key={item.name}
          >
            <Image
              src={`/companies/${item.data}_logo.png`}
              alt={item.data}
              width={50}
              height={50}
              className="rounded-full w-10 h-10 hover:mx-3 object-contain bg-white hover:scale-150 "
            />
            <LabelItem text={item.name} />
          </div>
        ))}
      </div>
    </GridWrapper>
  )
}
