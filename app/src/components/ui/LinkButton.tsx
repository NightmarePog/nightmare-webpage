import { useNavigate } from 'react-router-dom'

interface props {
  title: string
  link: string
}

export function LinkButton({ title, link }: props) {
  const navigate = useNavigate()

  return (
    <button className="m-10 text-3xl underline hover:scale-120" onClick={() => navigate(link)}>
      {title}
    </button>
  )
}
