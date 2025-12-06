'use client'

import React from 'react'
import {
  TabContainer,
  type TabConfig,
} from '@/app/components/TabSystem/TabContainer'
import {
  IntroductionContent,
  PublicationContent,
  ConferenceContent,
} from '@/app/components/TabSystem/TabContent'
import { PhilosophyContent } from '@/app/components/TabSystem/PhilosophyContent'
import {
  UserCircle,
  BookOpen,
  Presentation,
  Shapes,
} from 'lucide-react'
import { ABOUT_TABS } from '@/constants/about'

const AboutSection = () => {
  const tabs: TabConfig[] = [
    {
      id: ABOUT_TABS.introduction.id,
      label: ABOUT_TABS.introduction.label,
      icon: <UserCircle className="w-full h-full" />,
      content: <IntroductionContent />,
    },
    {
      id: ABOUT_TABS.publications.id,
      label: ABOUT_TABS.publications.label,
      icon: <BookOpen className="w-full h-full" />,
      content: <PublicationContent />,
    },
    {
      id: ABOUT_TABS.conferences.id,
      label: ABOUT_TABS.conferences.label,
      icon: <Presentation className="w-full h-full" />,
      content: <ConferenceContent />,
    },
    {
      id: ABOUT_TABS.philosophy.id,
      label: ABOUT_TABS.philosophy.label,
      icon: <Shapes className="w-full h-full" />,
      content: <PhilosophyContent />,
    },
  ]

  return (
    <section
      id="about"
      className="section-odd"
      style={{ scrollMarginTop: 'var(--scroll-margin-top)' }}
    >

      <TabContainer tabs={tabs} defaultActiveTab="introduction" />
    </section>
  )
}

export default AboutSection
