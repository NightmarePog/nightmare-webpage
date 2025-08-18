import { ReactNode } from "react"

interface TitleProps {
  children: ReactNode
  className?: string
}

export const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold ${className}`}>
      {children}
    </h1>
  )
}
