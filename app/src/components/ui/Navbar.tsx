import { LinkButton } from './LinkButton'
import { info } from '@/constants/NavBar'

export function NavBar() {
  return (
    <>
    <div className="flex justify-end">
      {info.map((Item) => {
        return <LinkButton title={Item.title} link={Item.link} />
      })}
    </div>
    </>
  )
}
