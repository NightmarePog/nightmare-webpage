
import { LinkButton } from "./button/LinkButton"
import { PageInfo } from "@/constants/PageInfo"
import { Menu } from "./Menu"
import { HomeIcon } from "lucide-react"
import useIsMobile from "@/hook/useIsMobile"


// navbar which you can see up
const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <header className={"bg-primary border-primary-foreground border-b-1 relative flex items-center justify-between " + (isMobile ? "p-1" : "p-4")}>
      <div className="flex items-center">
        <LinkButton  link={"/"} ><HomeIcon className="size-8"/></LinkButton>
      </div>

      <div className="flex items-center space-x-4 mr-5">
        {isMobile
          ? <div><Menu/></div>
          : PageInfo.map((item) => (
              item.link !== "/" && (
                <LinkButton key={item.link} link={item.link}>
                  {item.title}
                </LinkButton>
              )
            ))
        }
      </div>
    </header>
  )
}

export default Navbar
