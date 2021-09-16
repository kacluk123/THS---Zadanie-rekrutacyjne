import * as React from 'react'

export interface IconProps {
  width?: number
  height?: number
  viewBox?: string
  color?: string
}

export const IconGenerator: React.FC<IconProps> = ({ 
  height = 24,
  width = 24,
  viewBox = "0 0 24 24",
  children,
  color = '#1A1B1D'
}) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={color} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  )
}
