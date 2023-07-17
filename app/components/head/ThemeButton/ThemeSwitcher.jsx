"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import "@theme-toggles/react/css/Classic.css"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const ThemeSwitcher = () =>{
  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
        setMounted(true)
      }, [])
    
      const renderThemeChanger = () => {
        if (!mounted) return null

        const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7 text-gray-700 "
          role="button"
          onClick={() => setTheme("light")}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-7 h-7 text-gray-700 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      )
    }
  }
  return(
    <div>
      {renderThemeChanger()}
    </div>
  )
}



export default ThemeSwitcher

