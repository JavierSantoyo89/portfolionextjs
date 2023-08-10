"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import "@theme-toggles/react/css/Classic.css"
import MexicoFlag from "../../icons/MexicoFlag/MexicoFlag.tsx"
import USFlag from "../../icons/USFlag/USFlag"
const LanguageSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "dark") {
      return (
        
        <USFlag
     
          onClick={() => {
            setTheme("light")
            console.log("Soy US")
          }}
        />
      )
    } else {
      return (
        <MexicoFlag
          onClick={() => {
            setTheme("dark")
            console.log("Soy US")
          }}
        />
      )
    }
  }
  return <div>{renderThemeChanger()}</div>
}

export default LanguageSwitcher
