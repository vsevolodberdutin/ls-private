import React, { useState } from 'react'
import * as Typography from '@/app/uiElements/Typography'
import { ABOUT } from '@/constants/about'
import { ARTICLES } from '@/constants/articles'
import { CONFERENCES } from '@/constants/conferences'
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
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Network,
  GitMerge,
} from 'lucide-react'
import Image from 'next/image'

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
        rounded-xl border border-b border-gray-200 bg-pink-900/[.2] bg-neutral-900/[.1] px-6 py-2
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
  const iconSize = 'w-5 h-5'
  const iconColor = 'text-white/90'

  // Different icons for education items
  const getEducationIcon = (educationText: string, index: number) => {
    if (educationText.includes('Диплом')) {
      // Use different diploma/certificate icons for each diploma
      if (index === 0) {
        return <Shield className={`${iconSize} ${iconColor}`} />
      } else if (index === 1) {
        return <BookOpen className={`${iconSize} ${iconColor}`} />
      } else {
        return <Book className={`${iconSize} ${iconColor}`} />
      }
    } else if (educationText.includes('Международная школа')) {
      return <GraduationCap className={`${iconSize} ${iconColor}`} />
    } else {
      return <FileText className={`${iconSize} ${iconColor}`} />
    }
  }

  return (
    <div className="flex flex-col gap-2 ">
      {/* Introduction Section - Glassmorphism Design */}
      <div className="relative group">
        {/* Glassmorphism card container */}
        <div className=" bg-orange-50/70 rounded-2xl border border-white/20">
          {/* Content area with padding */}
          <div className="px-6 py-7">
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

        </div>
      </div>

      {/* Education Items - Glassmorphism Cards */}
      <div className="flex flex-col gap-2">
        {ABOUT.education.map((item, index) => (
          <div key={`education-${index}`} className="relative group">
            <div
              className="flex align-middle gap-3 relative
              rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg px-4 py-[7px]
              transition-all duration-300
              hover:bg-white/15 hover:border-white/30"
            >
              <div
                className="min-w-[40px] h-[40px] text-gray-700
                rounded-lg border border-white/30 p-2"
              >
                {getEducationIcon(item, index)}
              </div>

              <h4
                className="text-sm self-center font-medium text-gray-700
                transition-colors
                group-hover:text-gray-700"
              >
                {item}
              </h4>
            </div>
          </div>
        ))}
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
  const iconSize = 'w-5 h-5'
  const iconColor = 'text-orange-600'

  const iconMap = {
    монография: <Book className={`${iconSize} ${iconColor}`} />,
    статья: <FileText className={`${iconSize} ${iconColor}`} />,
    'учебное пособие': <BookOpen className={`${iconSize} ${iconColor}`} />,
  }

  return (
    <div className="flex flex-col">
      {ARTICLES.map((article, index) => {
        const publicationType = extractPublicationType(article.name)
        return (
          <div
            key={index}
            className="group
              rounded-lg p-3
              transition-all duration-200
              hover:bg-pink-900/20"
          >
            <div className="flex items-start gap-3">
              {publicationType && iconMap[publicationType] && (
                <div
                  className="flex items-center justify-center min-w-[40px] flex-shrink-0 mt-0.5
                  rounded-lg border border-orange-200 bg-orange-50 p-2"
                >
                  {iconMap[publicationType]}
                </div>
              )}
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
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const ConferenceContent: React.FC = () => {
  const iconSize = 'w-5 h-5'
  const iconColor = 'text-orange-600'

  // Different icons based on unique keywords in conference topics
  const getConferenceIcon = (conferenceName: string) => {
    if (conferenceName.includes('коммуникации')) {
      return <Presentation className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('оценке')) {
      return <ClipboardCheck className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('ассесмента')) {
      return <FileText className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('подбора персонала')) {
      return <Users className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('конфликту')) {
      return <Shield className={`${iconSize} ${iconColor}`} />
    } else if (
      conferenceName.includes('профориентации') &&
      conferenceName.includes('детей')
    ) {
      return <GraduationCap className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('HR')) {
      return <Briefcase className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('ТОП - менеджера')) {
      return <UserCircle className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('детских домов')) {
      return <GraduationCap className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('медицинского')) {
      return <Book className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('дифференциальной диагностике')) {
      return <Brain className={`${iconSize} ${iconColor}`} />
    } else if (conferenceName.includes('расстройства сна')) {
      return <Moon className={`${iconSize} ${iconColor}`} />
    } else {
      return <BookOpen className={`${iconSize} ${iconColor}`} />
    }
  }

  return (
    <div className="flex flex-col">
      {CONFERENCES.map((conference, index) => {
        return (
          <div
            key={index}
            className="group
              rounded-lg p-3
              transition-all duration-200
              hover:bg-pink-900/20"
          >
            <div className="flex items-start gap-3">
              <div
                className="flex items-center justify-center min-w-[40px] flex-shrink-0 mt-0.5
                rounded-lg border border-orange-200 bg-orange-50 p-2"
              >
                {getConferenceIcon(conference.name)}
              </div>
              <div className="flex flex-col gap-1">
                <h4
                  className="text-sm font-semibold text-gray-800
                  transition-colors
                  group-hover:text-gray-900"
                >
                  {conference.name}
                </h4>
                <p className="text-xs text-gray-600 italic">
                  {conference.data}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
