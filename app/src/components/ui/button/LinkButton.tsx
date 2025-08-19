import { useNavigate } from 'react-router-dom'
import { Button } from './button'
import { ReactNode } from 'react'

interface props {
  children?: ReactNode
  link: string
  className?: string
}

export function LinkButton({ children, link, className }: props) {
  const navigate = useNavigate()

  return (
    <>
      <Button className={"m-2 text-xl hover text-secondary cursor-pointer "+className} variant={"link"} onClick={() => navigate(link)}>
        {children} 
      </Button>
    </>
  )
}
