import { Subtitle } from "../Subtitle"
import Text from "../Text"
import { Title } from "../Title"

const AboutMePage = () => {
    return <div className="flex items-center justify-center pt-20 mx-5">
            <main>
            <Title>About me</Title>
            <div className="p-5"/>
            <Text>Hey! My name is Lukáš Erl</Text>
            <Text>I am 18 years old high school student at Střední Odborná Škola Hluboká Nad Vltavou</Text>
            <Text>I really enjoy developing websites - Fullstack and game developing</Text>
            <div className="p-5"/>
            <Text>Other than that I am big enjoyer of spaceflights!</Text>
            <div className="p-5"/>
            <Title>My stack</Title>
            <div className="p-5"/>
            <Subtitle>Web development</Subtitle>
            <img src="https://camo.githubusercontent.com/e72511072691750fe3d7c8360667c3b57dd85a904f6c2bb68a6ead1a68b7b62b/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a732c74732c7461696c77696e642c72656163742c676f646f742c6c75612c707974686f6e2c632c6c696e75782c617263682c626c656e6465722c646f636b65722c6769742c6d642c6e6578746a732c6e6f64656a732c706f73746d616e2c706f7374677265732c726f626c6f7873747564696f2c73716c6974652c7673636f64652c" alt="Web development stack" data-canonical-src="https://skillicons.dev/icons?i=html,css,js,ts,tailwind,react,python,docker,git,md,nextjs,nodejs,postman,postgres,vscode" ></img>
            
            </main>
        </div>
}

export default AboutMePage