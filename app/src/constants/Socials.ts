import { IconButtonProps } from "@/types/IconButton"
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"



const socials: IconButtonProps[] = [
  {
    name: "GitHub",
    link: "https://github.com/NightmarePog",
    icon: SiGithub,
    description: "most of my projects are here!",
    className: "text-white/60 hover:text-white"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nightmarepog/",
    icon: SiInstagram,
    description: "sometimes I post my work here",
    className: "text-white/80 hover:text-white hover:scale-110 transition-transform duration-300"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/luk%C3%A1%C5%A1-erl-7011102a6/",
    icon: SiLinkedin,
    className: "text-blue-600 hover:text-blue-800"
  },

  
]

export default socials