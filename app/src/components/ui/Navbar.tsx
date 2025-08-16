import { ReactNode } from "react"
import { LinkButton } from "./buttons/LinkButton"
import { PageInfo } from "@/constants/PageInfo"

interface props {
    children?: ReactNode
}

const Navbar = ({children}: props) => {
    return <header className="bg-primary border-primary-foreground border-b-1 relative flex items-center justify-between p-4">

  <div className="flex items-center">
    {children}
  </div>

  <div className="flex items-center space-x-4 mr-50">
    {PageInfo.map((item) => (
      <LinkButton
        key={item.title}
        title={item.title}
        link={item.link}
      />
    ))}
  </div>
</header>

}


export default Navbar