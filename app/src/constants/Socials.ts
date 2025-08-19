import { IconButtonProps } from "@/components/types/IconButton"
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"



const socials: IconButtonProps[] = [
  {
    name: "GitHub",
    link: "https://github.com/NightmarePog",
    icon: SiGithub,
    description: "most of my projects are here!"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nightmarepog/",
    icon: SiInstagram,
    description: "sometimes I post my work here"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nightmarepog",
    icon: SiLinkedin,
  },
]

export default socials