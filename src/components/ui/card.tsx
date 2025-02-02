import React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return (
    <div
      className={`bg-card text-card-foreground flex flex-col items-center justify-center ${className}`}
      {...props}
    />
  )
}

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return (
    <div
      className={`flex flex-col space-y-1.5 p-6 w-full ${className}`}
      {...props}
    />
  )
}

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = '', ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold text-left leading-none tracking-tight ${className}`}
      {...props}
    />
  )
}

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className = '', ...props }) => {
  return (
    <p
      className={`text-sm text-muted-foreground uppercase ${className}`}
      {...props}
    />
  )
}

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props} />
  )
}

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return (
    <div
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    />
  )
}

