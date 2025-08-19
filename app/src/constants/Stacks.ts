import { IconButtonProps } from "@/types/IconButton"
import { SiBlender, SiCss3, SiGodotengine, SiHtml5, SiJavascript, SiLua, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiRobloxstudio, SiTailwindcss, SiTypescript } from "react-icons/si"


export const webStack: IconButtonProps[] = [
    {
        name: "HTML",
        link: "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
        icon: SiHtml5,
        description: "HTML5",
        className: "text-[#E34F26]"
    },
    {
        name: "CSS",
        link: "https://en.wikipedia.org/wiki/CSS",
        icon: SiCss3,
        className: "text-[#1572B6]"
    },
    {
        name: "JavaScript",
        link: "https://en.wikipedia.org/wiki/JavaScript",
        icon: SiJavascript,
        className: "text-[#F7DF1E]"
    },
    {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: SiTypescript,
        className: "text-[#3178C6]" 
    },
    {
        name: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: SiTailwindcss,
        className: "text-[#38B2AC]"
    },
    {
        name: "React",
        link: "https://react.dev/",
        icon: SiReact,
        className: "text-[#61DAFB]"
    },
    {
        name: "Next.js",
        link: "https://nextjs.org/",
        icon: SiNextdotjs,
        className: "text-[#FFFFFF]" 
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        icon: SiPostgresql,
        className: "text-[#336791]" 
    },
]

export const gameDevStack: IconButtonProps[] = [
    {
        name: "Godot",
        link: "https://godotengine.org/",
        icon: SiGodotengine,
        className: "text-[#478CBF]"
    },
    {
        name: "Roblox Studio",
        link: "https://create.roblox.com/",
        icon: SiRobloxstudio,
        className: "text-[#009efeff]" 
    },
        {
        name: "Blender",
        link: "https://www.blender.org/",
        icon: SiBlender,
        description: "I mostly just do models for my games here"
    },
        {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: SiTypescript,
        className: "text-[#3178C6]",
        description: "in roblox community, there is a roblox-ts which is TypeScript compiler into Lua, I work with this a lot!"
    },
]

export const othersStack: IconButtonProps[] = [
    {
        name: "Python",
        link: "https://www.python.org/",
        icon: SiPython,
        className: "text-white",
        description: "I can work with python, but I rarely use it!"
    },
    {
        name: "Lua",
        link: "https://www.lua.org/",
        icon: SiLua,
        description: "I work with this language in Roblox Studio, ComputerCraft, or sometimes just for fun!",
        className: "text-[#00007D]"
    },
    
]
