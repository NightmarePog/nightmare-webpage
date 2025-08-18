import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Logo() {
  return (
      <img
        src="NightmareLogo.svg"
        alt="Logo"
        loading="lazy"
        className="h-50 w-50 object-fill dark:brightness-[0.2] dark:grayscale"
      />
  )
}
