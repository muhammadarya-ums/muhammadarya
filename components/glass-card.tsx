import React from 'react'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  accentColor?: 'green' | 'gray'
  withBorder?: boolean
}

export function GlassCard({
  children,
  accentColor = 'green',
  withBorder = true,
  className = '',
  ...props
}: GlassCardProps) {
  const borderColor = accentColor === 'green' ? 'border-primary' : 'border-muted'
  const borderClasses = withBorder ? `border ${borderColor}` : ''

  return (
    <div
      className={`
        relative backdrop-blur-xl bg-secondary/30 rounded-lg p-6
        ${borderClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
