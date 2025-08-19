import { ReactNode } from "react"

interface SubtitleProps {
  children: ReactNode
  className?: string
}

export const Subtitle = ({ children, className = "" }: SubtitleProps) => {
  return (
    <h2 className={`text-xl md:text-2xl font-semibold  ${className}`}>
      {children}
    </h2>
  )
}
