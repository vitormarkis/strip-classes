"use client"
import React from "react"
import { twMerge } from "tailwind-merge"
import { useTheme } from "next-themes"
import { Button } from "@/components/atoms/button"

interface ButtonToggleThemeModeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  text?: string
}

export function ButtonToggleThemeMode({ text, ...props }: ButtonToggleThemeModeProps) {
  const { setTheme, theme } = useTheme()

  const handleToggleThemeMode = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <Button
      {...props}
      className={twMerge("__neutral bg-background text-color rounded-interactive", props.className)}
      onClick={handleToggleThemeMode}
    >
      {text ?? "Toggle Theme"}
    </Button>
  )
}
