import { Route, Routes, useLocation } from 'react-router-dom'

import Social from '../Pages/Links'
import Blog from '../Pages/Blog'
import Posts from '../components/Posts'

export default function RoutesApp() {
  const location = useLocation()

  return (
    <Routes>
      <Route path="/" element={<Social />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/:slug" element={<Posts />} />
    </Routes>
  )
}
