"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui"
import { Sun, Moon } from "lucide-react"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  )
}
