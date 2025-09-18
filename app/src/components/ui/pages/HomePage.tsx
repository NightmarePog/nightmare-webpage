import socials from "@/constants/Socials"
import { Description } from "../typography/Description"
import { Logo } from "../Logo"
import { Subtitle } from "../typography/Subtitle"
import { Title } from "../typography/Title"
import { IconButton } from "../button/IconButton"
import useIsMobile from "@/hook/useIsMobile"

/**
 * basically just a number that limits social counts only on N ones
 */
const SocialLimit = 3


function HomePage() {
  const isMobile = useIsMobile();
  return (
    <>
      <div className={"items-center justify-center  mx-5 " + (isMobile ? "text-center block mx-auto pt-40": "flex pt-70")}>
        {isMobile ? <Logo className="mx-auto" /> : ""}
        <div>
          <div className="animate-fade-in-up ">
          <Subtitle>Hey!<span className="inline-block w-4" />I am</Subtitle>
          <Title>Lukáš!</Title>
          <Description>Full stack developer</Description>
          <Description>18yo</Description>
          </div>
          <div className="">
            {socials.map((item, index) =>
              index >= SocialLimit ? null : (
                <IconButton
                  key={index}
                  src={item}
                  className={"animate-fade-in-up opacity-0 " + item.className}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                />
              )
            )}
          </div>
        </div>
        {isMobile ? "" : <Logo />}
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
