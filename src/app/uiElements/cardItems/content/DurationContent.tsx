import React from 'react'
import { Clock } from 'lucide-react'
import { ContentRow } from '../../wrappers/ContentRow'
import { CircleIconWrapper } from '../../wrappers/IconWrapper'
import { InfoItemHeader, InfoItemSubHeader } from '../../Typography'

export interface DurationContentProps {
  text: string
  note?: string
}

export const DurationContent: React.FC<DurationContentProps> = ({
  text,
  note = '',
}) => (
  <ContentRow>
    <CircleIconWrapper>
      <Clock />
    </CircleIconWrapper>
    <div className="flex flex-col justify-space-between">
      <InfoItemHeader text={text} />
      <InfoItemSubHeader text={note} />
    </div>
  </ContentRow>
)
