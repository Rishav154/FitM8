"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button variant="ghost" size="icon" className="h-9 w-9 relative" onClick={toggleTheme}>
      <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
      <Moon
        className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

