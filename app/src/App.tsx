import { Route, Routes } from 'react-router-dom'
import { PageInfo } from './constants/PageInfo'
import Navbar from './components/ui/Navbar'
import Starfield from './components/ui/Starfield'

export function App() {
  return ( <>
        <Navbar/>
        <Starfield
          speedFactor={0.05}
          backgroundColor="black"
          starColor={[255, 255, 255]}
          starCount={5000} />
      <Routes>
        {PageInfo.map((item) => (
          <Route path={item.link} element={<item.pageElement/>}/>
        ))}
      </Routes>
    </>
  )
}
