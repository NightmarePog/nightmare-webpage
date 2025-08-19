import { IconButtonProps } from "@/components/types/IconButton"
import { SiCss3, SiGodotengine, SiHtml5, SiJavascript, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"


export const webStack: IconButtonProps[] = [
    
    {
        name: "HTML",
        link: "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
        icon: SiHtml5,
        description: "a little test"
    },
    {
        name: "CSS",
        link: "https://en.wikipedia.org/wiki/CSS",
        icon: SiCss3
    },
    {
        name: "JavaScript",
        link: "https://en.wikipedia.org/wiki/JavaScript",
        icon: SiJavascript
    },
    {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: SiTypescript
    },
    {
        name: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: SiTailwindcss
    },
    {
        name: "React",
        link: "https://react.dev/",
        icon: SiReact
    },
    {
        name: "Next.js",
        link: "https://nextjs.org/",
        icon: SiNextdotjs
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        icon: SiPostgresql
    },
]

export const gameDevStack: IconButtonProps[] = [
        {
        name: "Godot",
        link: "https://godotengine.org/",
        icon: SiGodotengine
    },
]

export const othersStack: IconButtonProps[] = [
    {
    name: "Python",
    link: "https://www.python.org/",
    icon: SiPython
    }
]