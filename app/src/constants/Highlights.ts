import { IconButtonProps } from "@/components/types/IconButton";
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
        className: "w-100 p-2 brightness-2000 h-auto",
        highlightDescription: "10th place as Black Mesa Team"
    }
]

export default highlights