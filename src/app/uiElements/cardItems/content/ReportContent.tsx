import React from 'react'
import { FileText, Briefcase, Heart, Waves, LucideIcon } from 'lucide-react'
import { ContentRow } from '../../wrappers/ContentRow'
import { ContentColumn } from '../../wrappers/ContentColumn'
import {
  CircleIconWrapper,
  EmptyIconWrapper,
} from '../../wrappers/IconWrapper'
import { InfoItemHeader, InfoItemSubHeader } from '../../Typography'
import Separator from '../../Separator'

export interface ReportItem {
  icon: LucideIcon
  text: string
}

export interface ReportContentProps {
  headerText: string
  items: ReportItem[]
}

export const ReportContent: React.FC<ReportContentProps> = ({
  headerText,
  items,
}) => (
  <>
    <ContentRow>
      <CircleIconWrapper>
        <FileText />
      </CircleIconWrapper>
      <InfoItemHeader text={headerText} />
    </ContentRow>

    <Separator />

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
