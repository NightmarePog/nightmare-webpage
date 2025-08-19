import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"

interface stack {
    name: string,
    link: string,
    description?: string
    icon: React.ElementType

}

export const webStack: stack[] = [
    
    {
        name: "HTML",
        link: "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
        icon: SiHtml5
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
]