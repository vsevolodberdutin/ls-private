import React from 'react'

export interface ProductHeaderProps {
  text: string
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ text }) => (
  <h3 className="text-lg font-semibold text-black/80">-{'>'} {text}</h3>
)
