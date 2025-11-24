import React from 'react'
import { Users } from 'lucide-react'
import { ContentRow } from '../../wrappers/ContentRow'
import { CircleIconWrapper } from '../../wrappers/IconWrapper'
import { InfoItemHeader, InfoItemSubHeader } from '../../Typography'

export interface TargetClientContentProps {
  title?: string
  text: string
}

export const TargetClientContent: React.FC<TargetClientContentProps> = ({
  title = 'Для кого:',
  text,
}) => (
  <ContentRow>
    <CircleIconWrapper>
      <Users />
    </CircleIconWrapper>
    <div className="flex flex-col gap-1">
      <InfoItemSubHeader text={title} />
      <InfoItemHeader text={text} />
    </div>
  </ContentRow>
)
