import React from 'react'
import * as Typography from '@/app/uiElements/Typography'
import {
  ABOUT,
  ABOUT_PUBLICATIONS,
  ABOUT_CONFERENCES,
} from '@/constants/about'
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
  School,
} from 'lucide-react'

/**
 * Icon mapping utility
 * Maps icon names from constants to actual icon components
 */
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Book: <Book />,
    FileText: <FileText />,
    BookOpen: <BookOpen />,
    Presentation: <Presentation />,
    Users: <Users />,
    ClipboardCheck: <ClipboardCheck />,
    Shield: <Shield />,
    GraduationCap: <GraduationCap />,
    Briefcase: <Briefcase />,
    UserCircle: <UserCircle />,
    Brain: <Brain />,
    Moon: <Moon />,
    School: <School />,
  }
  return iconMap[iconName] || <BookOpen />
}


// Tab Content Components

export const IntroductionContent: React.FC = () => {
  return (
    <ListColumn>
      {/* Introduction Section */}

      <div className=" bg-white/60 rounded-2xl border border-white/60 p-6">
        {ABOUT.text.split('\n\n').map((paragraph, idx) => (
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
          icon={<BoxIcon icon={getIconComponent(item.icon)} variant="default" />}
        >
          <h4 className="text-sm self-center font-medium opacity-70 transition-colors">
            {item.text}
          </h4>
        </ListItemRow>
      ))}
    </ListColumn>
  )
}

export const PublicationContent: React.FC = () => {
  return (
    <ListColumn>
      {ABOUT_PUBLICATIONS.map((article, index) => {
        return (
          <ListItemRow
            key={index}
            icon={
              <BoxIcon
                icon={getIconComponent(article.icon)}
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
  return (
    <ListColumn>
      {ABOUT_CONFERENCES.map((conference, index) => {
        return (
          <ListItemRow
            key={index}
            icon={
              <BoxIcon
                icon={getIconComponent(conference.icon)}
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
