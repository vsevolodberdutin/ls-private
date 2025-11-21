'use client'

import React, { useState, ReactNode, useRef } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

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

  // Calculate total height of left side buttons
  const buttonHeight = 98 // approximate height per button
  const gap = 12 // gap-3 = 12px
  const totalLeftHeight = tabs.length * buttonHeight + (tabs.length - 1) * gap
  const minHeight = 4 * buttonHeight + 3 * gap + 112 // Height of 4 buttons

  return (
    <div className="h-fit w-svw px-10 py-10 grid grid-cols-1 lg:grid-cols-[450px_850px] justify-center items-start gap-5">
      {/* Left side: Vertical tab buttons */}
      <div className="flex flex-col gap-3 mt-[58px] mb-[58px]">
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

      {/* Right side: Tab content panel with fixed height */}
      <div
        style={{
          height: `${totalLeftHeight}px`,
          minHeight: `${minHeight}px`,
        }}
      >
        <TabPanel>{activeTabContent}</TabPanel>
      </div>
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
        group flex w-full items-center gap-2 px-6 py-4 rounded-lg border
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
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showUpButton, setShowUpButton] = useState(false)
  const [showDownButton, setShowDownButton] = useState(false)

  // Check scroll position and content scrollability
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const isScrollable = container.scrollHeight > container.clientHeight

      if (!isScrollable) {
        setShowUpButton(false)
        setShowDownButton(false)
        return
      }

      const scrollTop = container.scrollTop
      const maxScroll = container.scrollHeight - container.clientHeight

      // Show up button if not at top
      setShowUpButton(scrollTop > 0)
      // Show down button if not at bottom
      setShowDownButton(scrollTop < maxScroll - 1)
    }
  }

  // Check scrollability on mount and content change
  React.useEffect(() => {
    checkScroll()
    const timer = setTimeout(checkScroll, 100)
    return () => clearTimeout(timer)
  }, [children])

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 200
      container.scrollTo({
        top: Math.max(0, container.scrollTop - scrollAmount),
        behavior: 'smooth',
      })
      // Update button visibility after scroll
      setTimeout(checkScroll, 300)
    }
  }

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 200
      const maxScroll = container.scrollHeight - container.clientHeight
      container.scrollTo({
        top: Math.min(maxScroll, container.scrollTop + scrollAmount),
        behavior: 'smooth',
      })
      // Update button visibility after scroll
      setTimeout(checkScroll, 300)
    }
  }

  const buttonSpaceHeight = 56 // h-14 (56px) for button space
  const totalButtonSpaceHeight = buttonSpaceHeight * 2 // Top and bottom spaces
  const additionalContentHeight = buttonSpaceHeight * 2 + 16 // Add 2 button spaces + gaps (8px each)

  return (
    <div className="flex flex-col h-full">
      {/* Top Button Space - Always Reserved */}
      <div className="h-14 flex items-center justify-center mb-2">
        {showUpButton && (
          <button
            onClick={scrollUp}
            className="w-12 h-12 bg-orange-50/30 border border-orange-200 hover:bg-orange-100/40 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Scroll up"
          >
            <ChevronUp className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        onWheel={(e) => e.preventDefault()}
        className="flex-1 overflow-y-auto rounded-xl animate-fadeIn scrollbar-hide"
        style={{
          maxHeight: `calc(100% - ${totalButtonSpaceHeight}px + ${additionalContentHeight}px)`,
        }}
      >
        {children}
      </div>

      {/* Bottom Button Space - Always Reserved */}
      <div className="h-14 flex items-center justify-center mt-2">
        {showDownButton && (
          <button
            onClick={scrollDown}
            className="w-12 h-12 bg-orange-50/30 border border-orange-200 hover:bg-orange-100/40 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  )
}
