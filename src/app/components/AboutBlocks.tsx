import React from 'react'
import * as Typography from '@/app/uiElements/Typography'
import { ABOUT } from '@/constants/about'
import { ARTICLES } from '@/constants/articles'
import { COMPANIES } from '@/constants/companies'
import { CONFERENCES } from '@/constants/conferences'
import { GridWrapper } from '@/app/uiElements/wrappers/GridWrapper'
import Image from 'next/image'
import Icon from '@/app/uiElements/Icon'
import { Book, FileText, BookOpen, Presentation } from 'lucide-react'

/**
 * Type definition for publication types
 */
type PublicationType = 'монография' | 'статья' | 'учебное пособие' | null

/**
 * Props for menu item components (RowItem, LabelItem)
 * @property id - Optional HTML element ID for anchor linking
 * @property text - Display text content
 * @property publicationType - Optional publication type for icon display
 */
interface MenuItemProps {
  readonly id?: string
  readonly text: string
  readonly publicationType?: PublicationType
}

const RowItem: React.FC<MenuItemProps> = ({ id, text, publicationType }) => {
  const iconSize = 'w-5 h-5'
  const iconColor = 'text-orange-600'

  const iconMap = {
    монография: <Book className={`${iconSize} ${iconColor}`} />,
    статья: <FileText className={`${iconSize} ${iconColor}`} />,
    'учебное пособие': <BookOpen className={`${iconSize} ${iconColor}`} />,
  }

  return (
    <div
      id={id}
      className="border-b border-gray-200 bg-neutral-900/[.1] px-6 py-2 w-full h-full rounded-xl border hover:scale-[105%] group-hover:bg-pink-900/[.3] bg-pink-900/[.2] transition-transform duration-200 flex items-center gap-3"
    >
      {publicationType && iconMap[publicationType] && (
        <div className="flex items-center justify-center rounded-lg bg-orange-50 border border-orange-200 p-2 min-w-[40px] flex-shrink-0">
          {iconMap[publicationType]}
        </div>
      )}
      {text && <Typography.InfoTypography text={text} />}
    </div>
  )
}

const LabelItem: React.FC<MenuItemProps> = ({ id, text }) => (
  <div
    id={id}
    className="border-b border-gray-200 bg-neutral-900/[.1] ml-3 px-2 py-1 max-w-[70svw] lg:w-full h-[30px] rounded-lg border hover:scale-[105%] bg-white/[.5] transition-transform duration-200"
  >
    {text && <Typography.CardSubHeader text={text} />}
  </div>
)

export const IntroductionBlock: React.FC = () => {
  return (
    <GridWrapper>
      <Icon
        src="/blockIcons/introduction.svg"
        name="introduction"
        text={'Будем\nзнакомы!'}
      />
      <div className="grid gap-0.5 rounded-xl">
        <div className="group">
          <RowItem text={ABOUT.introduction} />
        </div>
      </div>
    </GridWrapper>
  )
}

export const EducationBlock: React.FC = () => {
  return (
    <GridWrapper>
      <Icon
        src="/blockIcons/education.svg"
        name="education"
        text={'Академическая\nоснова'}
      />
      <div className="grid gap-1 rounded-xl">
        {ABOUT.education.map((item, index) => (
          <div className="group" key={`education-${index}`}>
            <RowItem text={item} />
          </div>
        ))}
      </div>
    </GridWrapper>
  )
}

/**
 * Extract publication type from the name field
 * @param name - Publication name with type in parentheses
 * @returns Publication type or null if not found
 */
const extractPublicationType = (name: string): PublicationType => {
  const match = name.match(/\((монография|статья|учебное пособие)\)/)
  return match ? (match[1] as PublicationType) : null
}

export const PublicationBlock: React.FC = () => {
  return (
    <GridWrapper>
      <Icon
        src="/blockIcons/publications.svg"
        name="publications"
        text={'Научные\nпубликации'}
      />
      <div className="grid grid-cols-1 gap-1 h-fit">
        {ARTICLES.map((item, index) => {
          const publicationType = extractPublicationType(item.name)
          return (
            <div
              className="grid grid-cols-[2fr_1fr] gap-1.5 hover:gap-5 hover:scale-[101%] group rounded-xl transition-all duration-200"
              key={`article-${index}`}
            >
              <RowItem text={item.name} publicationType={publicationType} />
              <RowItem text={item.data} />
            </div>
          )
        })}
      </div>
    </GridWrapper>
  )
}

export const CompaniesBlock: React.FC = () => {
  return (
    <GridWrapper>
      <Icon
        src="/blockIcons/companies.svg"
        name="companies"
        text={'Мои\nклиенты'}
      />
      <div className="flex w-full flex-wrap justify-center">
        {COMPANIES.map((item, index) => (
          <div
            className="px-4 py-2 flex items-center grid-flow-dense"
            key={`company-${index}`}
          >
            <Image
              src={`/companies/${item.data}_logo.png`}
              alt={`${item.name} logo`}
              width={50}
              height={50}
              loading="lazy"
              tabIndex={0}
              className="rounded-full w-10 h-10 hover:mx-3 object-contain bg-white hover:scale-150 focus:scale-150 focus:ring-2 focus:ring-orange-400 transition-all duration-200"
            />
            <LabelItem text={item.name} />
          </div>
        ))}
      </div>
    </GridWrapper>
  )
}

export const ConferenceBlock: React.FC = () => {
  return (
    <GridWrapper>
      <div className="group flex w-fit items-center mx-auto">
        <div className="w-20 h-20 p-5 flex items-center justify-center border rounded-full mr-5 bg-pink-900/[.3] hover:scale-105 focus-within:scale-105 lg:scale-100 scale-75 transition-all duration-200">
          <Presentation className="w-[50px] h-[50px] text-white" />
        </div>
        <div className="w-fit lg:w-[50px]">
          <Typography.PageHeader text={'Выступления'} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1 h-fit">
        {CONFERENCES.map((item, index) => {
          return (
            <div
              className="grid grid-cols-[2fr_1fr] gap-1.5 hover:gap-5 hover:scale-[101%] group rounded-xl transition-all duration-200"
              key={`conference-${index}`}
            >
              <RowItem text={item.name} />
              <RowItem text={item.data} />
            </div>
          )
        })}
      </div>
    </GridWrapper>
  )
}
