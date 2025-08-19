import { IconButtonProps } from "@/components/types/IconButton"
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
    className: "bg-gradient-to-tr text-white/80 from-yellow-400 via-pink-500 rounded-lg to-purple-600 hover:text-white hover:scale-110 transition-transform duration-300"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nightmarepog",
    icon: SiLinkedin,
    className: "text-blue-600 hover:text-blue-800"
  },
]

export default socials