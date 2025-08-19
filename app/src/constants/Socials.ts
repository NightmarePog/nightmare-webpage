import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"

export interface Social {
    name: string,
    link: string,
    icon: React.ElementType
}

const socials: Social[] = [
  {
    name: "GitHub",
    link: "https://github.com/NightmarePog",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nightmarepog/",
    icon: SiInstagram,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nightmarepog",
    icon: SiLinkedin,
  },
]

export default socials