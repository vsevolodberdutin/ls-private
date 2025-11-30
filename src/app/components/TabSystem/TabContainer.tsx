'use client'

import React, { useState, useRef, type ReactNode } from 'react'

import { GridWrapper } from '@/app/uiElements/wrappers/GridWrapper'

import {
  ContentColumn,
  TabPanelColumn,
} from '@/app/uiElements/wrappers/ContentColumn'
import { CircleIcon } from '@/app/uiElements/CircleIcon'
import { CircleMinus, CirclePlus } from 'lucide-react'

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
  const tabButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)

    // Scroll to the clicked tab on mobile with offset
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const buttonElement = tabButtonRefs.current.get(tabId)
      const scrollContainer =
        document.querySelector<HTMLElement>('.scroll-container')

      if (buttonElement && scrollContainer) {
        // Wait for React to update DOM and render expanded content

        requestAnimationFrame(() => {
          // Instantly scroll button to top
          buttonElement.scrollIntoView({
            behavior: 'instant',
            block: 'start',
          })

          // Apply offset with smooth animation
          const SCROLL_OFFSET = 70 // px from top
          scrollContainer.scrollTo({
            top: Math.max(0, scrollContainer.scrollTop - SCROLL_OFFSET),
            behavior: 'smooth',
          })
        })
      }
    }
  }

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <GridWrapper>
      <ContentColumn>
        {/* Left side: Vertical tab buttons */}

        {tabs.map((tab) => (
          <div key={tab.id} className="flex flex-col gap-3 ">
            <TabButton
              ref={(el) => {
                if (el) {
                  tabButtonRefs.current.set(tab.id, el)
                } else {
                  tabButtonRefs.current.delete(tab.id)
                }
              }}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            />
            {/* Mobile content - shows below active button on small screens */}
            {activeTab === tab.id && (
              <div
                className="mb-2 gap-3 rounded-xl pr-1
                  flex flex-col
                  overflow-y-auto
                  custom-scrollbar
                  lg:hidden"
              >
                {tab.content}
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
  style?: React.CSSProperties
}

const TabButton = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ label, icon, isActive, onClick, style }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        style={style}
        className={`flex w-full items-center justify-between rounded-lg border px-6 py-4 shadow-md shadow-black/10
          ${isActive ? 'bg-white/70' : 'bg-white/20'}
          transition duration-500
          hover:scale-[103%] hover:bg-white/80`}
      >
        <div className="flex items-center gap-3">
          <CircleIcon icon={icon} isActive={isActive} size="md" />
          <p className="font-semibold text-gray-700 lg:text-lg text-left">
            {label}
          </p>
        </div>

        {isActive ? (
          <CircleMinus className="h-5 w-5 text-gray-800" />
        ) : (
          <CirclePlus className="h-5 w-5 text-gray-400" />
        )}
      </button>
    )
  },
)

TabButton.displayName = 'TabButton'
