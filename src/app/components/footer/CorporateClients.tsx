import React from 'react'
import Image from 'next/image'
import { COMPANIES } from '@/constants/companies'

export const CorporateClients: React.FC = () => {
  return (
    <div className="border-t border-white/50 pt-12 mb-12 w-full">
      <div className="h-fit grid grid-cols-1 justify-center items-start max-w-[1300px] mx-auto">
        <div className="flex items-center gap-4 lg:gap-11 mb-6">
          <h3 className="text-xl font-bold text-amber-100 whitespace-nowrap">
            Мои клиенты
          </h3>
          <div className="w-2 h-2 rounded-full bg-amber-100 opacity-50 flex-shrink-0 hidden lg:block"></div>
          <p className="text-xl font-light text-amber-100 opacity-50 hidden lg:block">
            компании, прошедшие соционическую диагностику и формирование
            эффективных команд
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {COMPANIES.map((company, index) => (
            <div key={index} className="group relative">
              <div className="flex items-center justify-center w-[60px] h-[60px] overflow-hidden rounded-full border-4 border-white bg-white/100 backdrop-blur-sm transition-all duration-200 lg:hover:border-amber-100 lg:hover:bg-white lg:hover:scale-110">
                <Image
                  src={`/companies/${company.data}_logo.png`}
                  alt={company.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              {/* Tooltip */}
              <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 pointer-events-none whitespace-nowrap z-10 text-xs text-amber-50 rounded-lg bg-[#282934] backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {company.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#282934]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
