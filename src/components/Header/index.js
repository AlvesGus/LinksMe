import { Moon, Sun, Github, Linkedin, Code2 } from 'lucide-react'
import { useTheme } from '../../theme'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate()

  function handleHome() {
    navigate('/')
  }

  function handleBlog() {
    navigate('/blog')
  }

  return (
    <>
      <div className="flex space-x-5 ">
        <div className="border rounded-lg dark:text-slate-200 text-slate-800  dark:border-white/35 border-black/20 p-2">
          <button onClick={handleHome}>Home</button>
        </div>
        <div className="border rounded-lg dark:text-slate-200 text-slate-800  dark:border-white/35 border-black/20 p-2">
          <button onClick={handleBlog}>Blog</button>
        </div>
        <div className="border rounded-lg dark:text-slate-200 text-slate-800  dark:border-white/35 border-black/20 p-2 cursor-pointer">
          {theme === 'dark' ? (
            <Sun color="yellow" onClick={() => setTheme('ligth')} />
          ) : (
            <Moon fill="black" stroke="0" onClick={() => setTheme('dark')} />
          )}
        </div>
      </div>
    </>
  )
}
