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
        <Button><MenuIcon className="size-8"/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>

        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          
          {PageInfo.map((item) => (
            <SheetClose>
              {item.link !== "/" && (
                <LinkButton key={item.link} link={item.link}>
                  {item.title}
                </LinkButton>
              )}
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
