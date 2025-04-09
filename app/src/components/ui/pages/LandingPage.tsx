import { NavBar } from '../Navbar'
import Starfield from '../Starfield'
export function LandingPage() {
  return (
    <div className="w-full h-screen bg-black">
      <NavBar />
      <Starfield 
        speedFactor={0.05} 
        backgroundColor="black" 
        starColor={[255, 255, 255]} 
        starCount={5000}
        />
    </div>
  )
}
