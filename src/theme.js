import React, { useState, useEffect, useContext, createContext } from 'react'

const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = window.document.documentElement
    const removeOldTheme = theme === 'dark' ? 'ligth' : 'dark'

    root.classList.add('dark')
    root.classList.remove(removeOldTheme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
