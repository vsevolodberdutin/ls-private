'use client'

import React, { useState, ReactNode } from 'react'

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
    defaultActiveTab || tabs[0]?.id || ''
  )

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div className="h-fit w-svw px-10 py-10 grid grid-cols-1 lg:grid-cols-[450px_850px] justify-center items-start gap-5">
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

      {/* Right side: Tab content panel */}
      <TabPanel>{activeTabContent}</TabPanel>
    </div>
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
        group flex w-full items-center gap-4 px-6 py-4 rounded-lg border
        transition-colors duration-200
        ${
          isActive
            ? 'bg-orange-50/30 border-white'
            : 'bg-orange-50/30 border-orange-200 hover:bg-orange-100/40 hover:border-orange-300'
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
        w-16 h-16 p-3 flex items-center justify-center border-2 rounded-full
        transition-colors duration-200
        ${
          isActive
            ? 'bg-white border-orange-400'
            : 'bg-orange-50/40 border-orange-300'
        }
      `}
      >
        <div className="w-10 h-10 text-gray-600">{icon}</div>
      </div>

      {/* Label */}
      <div className="flex-1 text-left">
        <p
          className={`
          lg:text-lg text-base font-bold whitespace-nowrap
          transition-colors duration-200
          ${
            isActive
              ? 'text-gray-800'
              : 'text-gray-700'
          }
        `}
        >
          {label.replace(/\n/g, ' ')}
        </p>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="w-2 h-2 rounded-full bg-orange-500" />
      )}
    </button>
  )
}

interface TabPanelProps {
  children: ReactNode
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return (
    <div className="grid gap-0.5 rounded-xl animate-fadeIn">{children}</div>
  )
}
