import React from 'react'
import {
  FileText,
  Briefcase,
  Heart,
  Waves,
  LucideIcon,
  CalendarRange,
} from 'lucide-react'
import { ContentRow } from '../../wrappers/ContentRow'
import { ContentColumn } from '../../wrappers/ContentColumn'
import { CircleIconWrapper, EmptyIconWrapper } from '../../wrappers/IconWrapper'
import { InfoItemHeader, InfoItemSubHeader } from '../../Typography'
import { CardSeparator, Separator } from '../../Separator'

export interface ReportItem {
  icon: LucideIcon
  text: string
}

export interface ProgramContentProps {
  headerText?: string
  items: ReportItem[]
}

export const ProgramContent: React.FC<ProgramContentProps> = ({
  headerText = 'Особенности программы:',
  items,
}) => (
  <>
    <ContentRow>
      <CircleIconWrapper>
        <CalendarRange />
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
