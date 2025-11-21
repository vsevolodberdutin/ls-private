import React from 'react'
import * as Typography from '@/app/uiElements/Typography'
import { ABOUT } from '@/constants/about'
import { ARTICLES } from '@/constants/articles'
import { CONFERENCES } from '@/constants/conferences'
import { Book, FileText, BookOpen } from 'lucide-react'

/**
 * Type definition for publication types
 */
type PublicationType = 'монография' | 'статья' | 'учебное пособие' | null

/**
 * Props for menu item components (RowItem)
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
      className="border-b border-gray-200 bg-neutral-900/[.1] px-6 py-2 w-full h-full rounded-xl border group-hover:bg-pink-900/[.3] bg-pink-900/[.2] transition-colors duration-200 flex items-center gap-3"
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

/**
 * Extract publication type from the name field
 */
const extractPublicationType = (name: string): PublicationType => {
  const match = name.match(/\((монография|статья|учебное пособие)\)/)
  return match ? (match[1] as PublicationType) : null
}

// Tab Content Components

export const IntroductionContent: React.FC = () => {
  return (
    <div className="grid gap-0.5 rounded-xl">
      <div className="group">
        <RowItem text={ABOUT.introduction} />
      </div>
    </div>
  )
}

export const EducationContent: React.FC = () => {
  return (
    <div className="grid gap-1 rounded-xl">
      {ABOUT.education.map((item, index) => (
        <div className="group" key={`education-${index}`}>
          <RowItem text={item} />
        </div>
      ))}
    </div>
  )
}

export const PublicationContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-1 h-fit">
      {ARTICLES.map((item, index) => {
        const publicationType = extractPublicationType(item.name)
        return (
          <div
            className="grid grid-cols-[2fr_1fr] gap-1.5 group rounded-xl transition-all duration-200"
            key={`article-${index}`}
          >
            <RowItem text={item.name} publicationType={publicationType} />
            <RowItem text={item.data} />
          </div>
        )
      })}
    </div>
  )
}

export const ConferenceContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-1 h-fit">
      {CONFERENCES.map((item, index) => {
        return (
          <div
            className="grid grid-cols-[2fr_1fr] gap-1.5 group rounded-xl transition-all duration-200"
            key={`conference-${index}`}
          >
            <RowItem text={item.name} />
            <RowItem text={item.data} />
          </div>
        )
      })}
    </div>
  )
}
