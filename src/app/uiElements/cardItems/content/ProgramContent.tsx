import React from 'react'
import {
  type LucideIcon,
  CalendarRange,
} from 'lucide-react'
import { ContentRow } from '../../wrappers/ContentRow'
import { ContentColumn } from '../../wrappers/ContentColumn'
import { CircleIconWrapper, EmptyIconWrapper } from '../../wrappers/IconWrapper'
import { InfoItemHeader, InfoItemSubHeader } from '../../Typography'
import { CardSeparator } from '../../Separator'

export interface ReportItem {
  icon: LucideIcon
  text: string
}

export interface ProgramContentProps {
  headerText?: string
  headerIcon?: LucideIcon
  items: ReportItem[]
}

export const ProgramContent: React.FC<ProgramContentProps> = ({
  headerText = 'Особенности программы:',
  headerIcon: HeaderIcon = CalendarRange,
  items,
}) => (
  <>
    <ContentRow>
      <CircleIconWrapper>
        <HeaderIcon />
      </CircleIconWrapper>
      <InfoItemHeader text={headerText} />
    </ContentRow>

    <CardSeparator />

    <ContentColumn>
      {items.map((item, index) => (
        <ContentRow key={index}>
          <EmptyIconWrapper>
            <item.icon className="w-4 h-4" />
          </EmptyIconWrapper>
          <InfoItemSubHeader text={item.text} />
        </ContentRow>
      ))}
    </ContentColumn>
  </>
)
