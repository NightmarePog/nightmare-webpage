import { useNavigate } from 'react-router-dom'
import { Button } from './button'

interface props {
  title: string
  link: string
}

export function LinkButton({ title, link }: props) {
  const navigate = useNavigate()

  return (
    <>
      <Button className="m-2 text-2xl hover text-secondary cursor-pointer" variant={"link"} onClick={() => navigate(link)}>
        {title} 
      </Button>
    </>
  )
}
