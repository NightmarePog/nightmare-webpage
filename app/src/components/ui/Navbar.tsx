import { LinkButton } from './LinkButton'

const info = [
  { title: 'test1', link: '/' },
  { title: 'test2', link: '/' },
]

export function NavBar() {
  return (
    <>
    <div className="flex justify-end">
      {info.map((Item, index) => {
        return <LinkButton key={index} title={Item.title} link={Item.link} />
      })}
    </div>
    </>
  )
}
