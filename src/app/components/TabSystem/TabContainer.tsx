'use client'

import React, { useState, ReactNode, useRef } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { GridWrapper } from '@/app/uiElements/wrappers/GridWrapper'
import { MainColumn } from '@/app/uiElements/wrappers/MainColumn'
import {
  ContentColumn,
  FixedContentColumn,
} from '@/app/uiElements/wrappers/ContentColumn'

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

  // Calculate total height of left side buttons
  const buttonHeight = 98 // approximate height per button
  const gap = 12 // gap-3 = 12px
  const totalLeftHeight = tabs.length * buttonHeight + (tabs.length - 1) * gap
  const minHeight = 4 * buttonHeight + 3 * gap + 112 // Height of 4 buttons

  return (
    <GridWrapper>
      <MainColumn>
        {/* Left side: Vertical tab buttons */}
        <div className="flex flex-col gap-3">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </MainColumn>

      {/* Right side: Tab content panel with fixed height */}
      <FixedContentColumn>
        <TabPanel>{activeTabContent}</TabPanel>
      </FixedContentColumn>
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
      className={`
        group flex w-full items-center gap-2 px-6 py-4 rounded-lg border
        transition-colors duration-200
        ${
          isActive
            ? ' bg-orange-50/70 '
            : 'bg-orange-50/30 border-orange-200 hover:bg-orange-100/40 hover:border-orange-300'
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
        w-16 h-16 p-3 flex items-center justify-center border border-gray-500 rounded-full text-gray-500
        transition-colors duration-200
        ${isActive ? 'bg-white  ' : 'bg-white/50  '}
      `}
      >
        <div className="w-9 h-9">{icon}</div>
      </div>

      {/* Label */}
      <div className="flex-1 text-left">
        <p
          className={`
          lg:text-lg text-base  whitespace-nowrap
          transition-colors duration-200 font-semibold text-gray-700
          
        `}
        >
          {label.replace(/\n/g, ' ')}
        </p>
      </div>

      {/* Active indicator */}
      {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
    </button>
  )
}

interface TabPanelProps {
  children: ReactNode
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return (
    <div className="h-full overflow-y-auto rounded-xl animate-fadeIn custom-scrollbar pr-1">
      {children}
    </div>
  )
}
