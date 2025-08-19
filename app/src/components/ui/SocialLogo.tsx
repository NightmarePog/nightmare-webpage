import { Social } from "@/constants/Socials"
import React from "react"

interface Props {
  src: Social
  className?: string
  style?: React.CSSProperties
}

export function SocialLogo({ src, className = "", style }: Props) {
  const Icon = src.icon
  return (
    <a href={src.link} target="_blank" rel="noopener noreferrer">
      <Icon className={`h-10 w-10 m-2 ${className}`} style={style} />
    </a>
  )
}
