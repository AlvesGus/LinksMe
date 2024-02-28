import { Route, Routes, useLocation } from 'react-router-dom'

import Social from '../Pages/Links'
import Blog from '../Pages/Blog'
import Artigo from '../Pages/Artigos'


export default function RoutesApp() {
  const location = useLocation()

  return (
  
      <Routes>
        <Route path="/" element={<Social />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Artigo />} />
      </Routes>
 
  )
}
