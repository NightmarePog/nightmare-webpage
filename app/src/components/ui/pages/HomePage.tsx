import { Description } from "../Description"
import { Logo } from "../Logo"
import { Subtitle } from "../Subtitle"
import { Title } from "../Title"

function HomePage() {
  return (
        <div className="flex items-center justify-center py-70 transition-transform duration-200"> {/*TODO*/}
          <div>
          <Subtitle>Hey! I am</Subtitle>
          <Title>Lukáš!</Title>
          <Description>Full stack developer</Description>
          <Description>18yo</Description>
          </div>
          <Logo/>
        </div>
  )
}

export default HomePage
