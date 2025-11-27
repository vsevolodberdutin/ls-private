import React from 'react'

export interface MobileVisibleWrapperProps {
  id?: string
  children: React.ReactNode
  isMobile?: boolean
}

export const MobileVisibleWrapper: React.FC<MobileVisibleWrapperProps> = ({
  children,
  isMobile = false,
}) => (
  <div className={isMobile ? 'lg:hidden' : 'hidden lg:block'}>{children}</div>
)
