"use client"
import React from "react"
import { twMerge } from "tailwind-merge"
import { useTheme } from "next-themes"

interface ButtonToggleThemeModeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  text?: string
}

export function ButtonToggleThemeMode({ text, ...props }: ButtonToggleThemeModeProps) {
  const { setTheme, systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const handleToggleThemeMode = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark")
    console.log({ currentTheme })
  }

  return (
    <button
      {...props}
      className={twMerge(
        "h-11 px-4 rounded-lg shadow bg-green-100 text-green-500 border border-green-500",
        props.className
      )}
      onClick={handleToggleThemeMode}
    >
      {props.children}
      {text ?? "Toggle Theme"}
    </button>
  )
}
