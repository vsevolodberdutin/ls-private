import React from 'react'
import { Check } from 'lucide-react'

export interface ModuleCardProps {
  name: string
  description: string[]
  price: string
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  name,
  description,
  price,
}) => (
  <div className="rounded-lg border border-orange-200 bg-orange-50/30 p-4">
    <div className="mb-2 font-semibold text-sm text-gray-800">{name}</div>
    <ul className="mb-3 space-y-1">
      {description.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-2 text-xs text-gray-700"
        >
          <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-orange-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="text-base font-bold text-orange-700">{price}</div>
  </div>
)
