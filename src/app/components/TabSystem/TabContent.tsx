import React from 'react'
import * as Typography from '@/app/uiElements/Typography'
import { ABOUT } from '@/constants/about'
import { ARTICLES } from '@/constants/articles'
import { CONFERENCES } from '@/constants/conferences'
import { BoxIcon } from '@/app/uiElements/BoxIcon'
import { ListItemRow } from '@/app/uiElements/wrappers/ListItemRow'
import { ListColumn } from '@/app/uiElements/wrappers/ListColumn'
import {
  Book,
  FileText,
  BookOpen,
  Presentation,
  Users,
  ClipboardCheck,
  Shield,
  GraduationCap,
  Briefcase,
  UserCircle,
  Brain,
  Moon,
} from 'lucide-react'

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

const RowItem: React.FC<MenuItemProps> = ({ id, text }) => {
  return (
    <div
      id={id}
      className="flex items-center gap-3 w-full min-h-[44px]
        rounded-xl border border-b border-gray-200  bg-neutral-900/[.1] px-6 py-2
        transition-colors duration-200
        group-hover:bg-pink-900/[.3]"
    >
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
  // Different icons for education items
  const getEducationIcon = (educationText: string, index: number) => {
    if (educationText.includes('Диплом')) {
      // Use different diploma/certificate icons for each diploma
      if (index === 0) {
        return <Shield />
      } else if (index === 1) {
        return <BookOpen />
      } else {
        return <Book />
      }
    } else if (educationText.includes('Международная школа')) {
      return <GraduationCap />
    } else {
      return <FileText />
    }
  }

  return (
    <ListColumn>
      {/* Introduction Section */}

      <div className=" bg-white/50 rounded-2xl border border-white/60 p-6">
        {ABOUT.introduction.split('\n\n').map((paragraph, idx) => (
          <p
            key={idx}
            className="text-base leading-[1.7] opacity-70 font-normal tracking-normal mb-4 last:mb-0
                  transition-colors duration-300"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Education Items */}

      {ABOUT.education.map((item, index) => (
        <ListItemRow
          key={`education-${index}`}
          icon={
            <BoxIcon icon={getEducationIcon(item, index)} variant="default" />
          }
        >
          <h4 className="text-sm self-center font-medium opacity-70 transition-colors">
            {item}
          </h4>
        </ListItemRow>
      ))}
    </ListColumn>
  )
}

export const PublicationContent: React.FC = () => {
  const iconMap = {
    монография: <Book />,
    статья: <FileText />,
    'учебное пособие': <BookOpen />,
  }

  return (
    <ListColumn>
      {ARTICLES.map((article, index) => {
        const publicationType = extractPublicationType(article.name)
        return (
          <ListItemRow
            key={index}
            icon={
              publicationType && iconMap[publicationType] ? (
                <BoxIcon
                  icon={iconMap[publicationType]}
                  variant="default"
                  className="mt-0.5"
                />
              ) : undefined
            }
          >
            <div className="flex flex-col gap-1">
              <h4
                className="text-sm font-semibold text-gray-800
                transition-colors
                group-hover:text-gray-900"
              >
                {article.name}
              </h4>
              <p className="text-xs text-gray-600 italic">{article.data}</p>
            </div>
          </ListItemRow>
        )
      })}
    </ListColumn>
  )
}

export const ConferenceContent: React.FC = () => {
  // Different icons based on unique keywords in conference topics
  const getConferenceIcon = (conferenceName: string) => {
    if (conferenceName.includes('коммуникации')) {
      return <Presentation />
    } else if (conferenceName.includes('оценке')) {
      return <ClipboardCheck />
    } else if (conferenceName.includes('ассесмента')) {
      return <FileText />
    } else if (conferenceName.includes('подбора персонала')) {
      return <Users />
    } else if (conferenceName.includes('конфликту')) {
      return <Shield />
    } else if (
      conferenceName.includes('профориентации') &&
      conferenceName.includes('детей')
    ) {
      return <GraduationCap />
    } else if (conferenceName.includes('HR')) {
      return <Briefcase />
    } else if (conferenceName.includes('ТОП - менеджера')) {
      return <UserCircle />
    } else if (conferenceName.includes('детских домов')) {
      return <GraduationCap />
    } else if (conferenceName.includes('медицинского')) {
      return <Book />
    } else if (conferenceName.includes('дифференциальной диагностике')) {
      return <Brain />
    } else if (conferenceName.includes('расстройства сна')) {
      return <Moon />
    } else {
      return <BookOpen />
    }
  }

  return (
    <ListColumn>
      {CONFERENCES.map((conference, index) => {
        return (
          <ListItemRow
            key={index}
            icon={
              <BoxIcon
                icon={getConferenceIcon(conference.name)}
                variant="white"
                className="mt-0.5"
              />
            }
          >
            <div className="flex flex-col gap-1">
              <h4
                className="text-sm font-semibold text-gray-800
                transition-colors
                group-hover:text-gray-900"
              >
                {conference.name}
              </h4>
              <p className="text-xs text-gray-600 italic">{conference.data}</p>
            </div>
          </ListItemRow>
        )
      })}
    </ListColumn>
  )
}
