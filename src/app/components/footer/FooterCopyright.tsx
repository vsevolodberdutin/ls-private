import React from 'react'
import { FooterSeparator } from '@/app/uiElements/Separator'

export const FooterCopyright: React.FC = () => {
  return (
    <>
      <FooterSeparator />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1300px] mx-auto">
        <p className="text-sm text-amber-100/60 text-center md:text-left">
          © {new Date().getFullYear()} Элеонора Бердутина. Школа «Живая
          соционика». Все права защищены.
        </p>
        <p className="text-xs text-amber-100/50">
          Designed with ❤️ for understanding human nature
        </p>
      </div>
    </>
  )
}
