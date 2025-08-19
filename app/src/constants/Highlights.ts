import { IconButtonProps } from "@/types/IconButton";
import { TourDeApp } from "@/components/ui/CustomIcons";
export interface highlightProps extends IconButtonProps {
    highlightDescription: string
}

const highlights: highlightProps[] = [
    {
        name: "Tour De App",
        description: "web Development Competition",
        link: "https://tourde.app/",
        icon: TourDeApp,
        className: "w-100 p-2 brightness-2000 hover:brightness-2000 h-auto hover:scale-100",
        highlightDescription: "10th as Black Mesa Team 2025"
    }
]

export default highlights