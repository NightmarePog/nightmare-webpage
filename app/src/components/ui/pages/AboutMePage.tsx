import { gameDevStack, othersStack, webStack } from "@/constants/Stacks"
import { Subtitle } from "../typography/Subtitle"
import Text from "../typography/Text"
import { Title } from "../typography/Title"
import { IconButton } from "../button/IconButton"
import highlights from "@/constants/Highlights"
const AboutMePage = () => {
    return <div className="flex items-center justify-center pt-20 mx-5">
            <main>
                <Title>About me</Title>
                <div className="p-5"/>
                <Text>Hey! My name is Lukáš Erl, but you can find my on the internet also as NightmarePog, NightmarePogg, Lukas or similliar!</Text>
                <Text>I am 18 years old high school student at <a href={"https://sosehl.cz"} className="underline">Střední Odborná Škola Hluboká Nad Vltavou</a></Text>
                <Text>I really enjoy developing websites - Fullstack and game development</Text>
                <div className="p-5"/>
                <Text>Other than that I am big enjoyer of spaceflights!</Text>
                <div className="p-5"/>
                <Title>My stack</Title>
                <div className="p-5"/>
                <Subtitle>Web development</Subtitle>
                {webStack.map((item) => (
                    <IconButton src={item} className={item.className}/>
                ))}
                <Subtitle>Game development</Subtitle>
                {gameDevStack.map((item) => (
                    <IconButton src={item} className={item.className}/>
                ))}
                <Subtitle>Other tools I use</Subtitle>
                {othersStack.map((item) => (
                    <IconButton src={item} className={item.className}/>
                ))}
                <div className="flex py-8"></div>
                <Title>Highlights</Title>
                <div className="flex py-4">
                    {highlights.map((item) => (<>
                            <IconButton scaleOnHover={false} src={item} className={item.className} style={item.style}/>
                            <Subtitle className="my-auto">- {item.highlightDescription}</Subtitle>
                        </>
                    ))}
                </div>
            </main>
        </div>
}

export default AboutMePage