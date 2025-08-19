import { IconButtonProps } from "@/components/types/IconButton"
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"
import { Title } from "../typography/Title"

interface Props {
  src: IconButtonProps
  className?: string
  style?: React.CSSProperties
}

export function IconButton({ src, className = "", style }: Props) {
  const Icon = src.icon
  return (
    <a href={src.link} target="_blank" rel="noopener noreferrer">
      <Tooltip>
        <TooltipTrigger>
          <Icon 
          className={`cursor-pointer h-10 w-10 m-2 transform transition-transform duration-200 hover:scale-125 ${className}`}
          style={style} />
          </TooltipTrigger>
          <TooltipContent className="text-secondary">
            <Title size="small">{src.name}</Title>
            {src.description}
          </TooltipContent>
      </Tooltip>
    </a>
  )
}
