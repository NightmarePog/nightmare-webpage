import { Route, Routes } from 'react-router-dom'
import { PageInfo } from './constants/PageInfo'

export function App() {
  return (
    <Routes>
      {PageInfo.map((item) => (
        <Route path={item.link} element={<item.pageElement/>}/>
      ))}
    </Routes>
  )
}
