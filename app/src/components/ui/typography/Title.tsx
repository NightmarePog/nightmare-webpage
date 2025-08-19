import { ReactNode } from "react"

interface TitleProps {
  children: ReactNode
  size?: "big" | "small"
  className?: string
}

export const Title = ({ children, size = "big", className = "" }: TitleProps) => {
  const sizeClass = size === "big" ? "text-4xl md:text-6xl" : "text-sm md:text-base"

  return (
    <h1 className={`font-bold ${sizeClass} ${className}`}>
      {children}
    </h1>
  )
}
