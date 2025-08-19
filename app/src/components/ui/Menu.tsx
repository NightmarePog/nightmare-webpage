import { Button } from "@/components/ui/button/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PageInfo } from "@/constants/PageInfo"
import { LinkButton } from "./button/LinkButton"
import { MenuIcon } from "lucide-react"

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button><MenuIcon/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>

        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          
          {PageInfo.map((item) => (
            <SheetClose>
            <LinkButton title={item.title} link={item.link}/>
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="default">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
