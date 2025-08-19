import { ReactNode, useEffect, useState } from "react"
import { LinkButton } from "./button/LinkButton"
import { PageInfo } from "@/constants/PageInfo"
import { Menu } from "./Menu"

interface Props {
  children?: ReactNode
}

// navbar which you can see up
const Navbar = ({ children }: Props) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="bg-primary border-primary-foreground border-b-1 relative flex items-center justify-between p-4">
      <div className="flex items-center">
        {children}
      </div>

      <div className="flex items-center space-x-4 mr-5">
        {isMobile
          ? <div><Menu/></div>
          : PageInfo.map((item) => (
              <LinkButton key={item.title} title={item.title} link={item.link} />
            ))}
      </div>
    </header>
  )
}

export default Navbar
