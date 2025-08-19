import useIsMobile from "@/hook/useIsMobile"
import { ReactNode } from "react"

interface SubtitleProps {
  children: ReactNode
  className?: string
}

export const Subtitle = ({ children, className = "" }: SubtitleProps) => {
  const isMobile = useIsMobile()
  return (
    <h2 className={isMobile ? 'text-xl' : 'text-2xl ' +`font-semibold  ${className}`}>
      {children}
    </h2>
  )
}
