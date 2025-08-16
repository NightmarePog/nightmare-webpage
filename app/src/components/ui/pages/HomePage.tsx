import Navbar from '../Navbar'
import Starfield from '../Starfield'
function HomePage() {
  return (<>
          <Starfield
          speedFactor={0.05}
          backgroundColor="black"
          starColor={[255, 255, 255]}
          starCount={5000} />
          <div className="w-screen h-screen bg-primary ">
            <Navbar/>
          </div>
        </>
  )
}

export default HomePage
