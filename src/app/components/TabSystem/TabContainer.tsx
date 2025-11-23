'use client'

import React, { useState, ReactNode, useRef } from 'react'

import { GridWrapper } from '@/app/uiElements/wrappers/GridWrapper'

import {
  ContentColumn,
  TabPanelColumn,
} from '@/app/uiElements/wrappers/ContentColumn'
import { CircleIcon } from '@/app/uiElements/CircleIcon'

export interface TabConfig {
  id: string
  label: string
  icon: ReactNode
  content: ReactNode
}

interface TabContainerProps {
  tabs: TabConfig[]
  defaultActiveTab?: string
}

export const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  defaultActiveTab,
}) => {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id || '',
  )

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <GridWrapper>
      <ContentColumn>
        {/* Left side: Vertical tab buttons */}

        {tabs.map((tab) => (
          <div key={tab.id} className="flex flex-col gap-3">
            <TabButton
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
            {/* Mobile content - shows below active button on small screens */}
            {activeTab === tab.id && (
              <div className="lg:hidden">
                <TabPanelColumn>{tab.content}</TabPanelColumn>
              </div>
            )}
          </div>
        ))}
      </ContentColumn>

      {/* Right side: Tab content panel - hidden on mobile, shown on desktop */}
      <TabPanelColumn>{activeTabContent}</TabPanelColumn>
    </GridWrapper>
  )
}

interface TabButtonProps {
  id: string
  label: string
  icon: ReactNode
  isActive: boolean
  onClick: () => void
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-lg border px-6 py-4
        ${isActive ? 'bg-white/60' : 'bg-white/30'}
        transition duration-500
        hover:scale-[103%] hover:bg-white/80`}
    >
      <div className="flex items-center gap-3">
        <CircleIcon icon={icon} isActive={isActive} size="md" />
        <p className="font-semibold text-gray-700 lg:text-lg">{label}</p>
      </div>

      {isActive && <div className="h-2 w-2 rounded-full bg-white" />}
    </button>
  )
}
