import React from 'react'

export interface ShadowImgProps {
  id?: string
  children: any
}

export const ShadowImgWrapper: React.FC<ShadowImgProps> = ({ children }) => (
  <div
    className="relative place-items-center self-end hidden
      tablet:grid
      before:absolute before:rounded-full before:bg-gradient-radial before:from-white/80 before:to-transparent before:blur-2xl before:content-['']
      after:absolute after:-z-20 after:bg-gradient-conic after:from-sky-200/30 after:via-blue-200/50 after:blur-2xl after:content-[''] z-[-1]
      tablet:before:h-[1040px] tablet:before:w-[560px] tablet:before:-translate-x-1/4 tablet:after:h-[432px] tablet:after:w-[216px] tablet:after:translate-x-1/2
      desktop:before:h-[1300px] desktop:before:w-[700px] desktop:before:-translate-x-1/4 desktop:after:h-[540px] desktop:after:w-[270px] desktop:after:translate-x-1/2"
  >
    {children}
  </div>
)
