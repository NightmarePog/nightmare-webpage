import socials from "@/constants/Socials"
import { Description } from "../Description"
import { Logo } from "../Logo"
import { Subtitle } from "../Subtitle"
import { Title } from "../Title"
import { SocialLogo } from "../SocialLogo"

function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center pt-70 mx-5">
        <div>
          <div className="animate-fade-in-up">
          <Subtitle>Hey!<span className="inline-block w-4" />I am</Subtitle>
          <Title>Lukáš!</Title>
          <Description>Full stack developer</Description>
          <Description>18yo</Description>
          </div>
          <div className="flex">
            {socials.map((item, index) => (
              <SocialLogo 
              src={item} 
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.3+index * 0.1}s` }}
              />
        
            ))}
          </div>
        </div>
        <Logo />
      </div>

      {/* fade in animation */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: scale(1.2) translateY(50px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default HomePage
