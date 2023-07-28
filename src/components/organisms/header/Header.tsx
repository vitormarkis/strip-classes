"use client"

import { CenteredContainer } from "@/components/atoms"
import { PopoverAppSettings } from "@/components/modal/PopoverAppSettings"
import { ButtonToggleThemeMode } from "@/components/specifics/button-toggle-theme-mode"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import React, { useState } from "react"
import { IconMoon, IconSun } from "@/components/icons"

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

export const Header = React.forwardRef<React.ElementRef<"header">, HeaderProps>(
  function HeaderComponent({ ...props }, ref) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const { setTheme, theme } = useTheme()

    const isDarkMode = theme === "dark"

    return (
      <header
        {...props}
        className={cn("border-b", props.className)}
        ref={ref}
      >
        <CenteredContainer className="py-4 flex items-center justify-between">
          <div className="flex-1"></div>
          <div className="__two flex p-1.5 rounded-full border">
            <PopoverAppSettings
              popoverOpenState={[isPopoverOpen, setIsPopoverOpen]}
              trigger={
                <ButtonToggleThemeMode
                  icon={isDarkMode ? IconMoon : IconSun}
                  className="__first text-symbol"
                />
              }
            >
              <div className="flex flex-col gap-[2px] bg-background rounded-lg border p-[2px]">
                <button
                  onClick={() => {
                    setTheme("dark")
                    setIsPopoverOpen(false)
                  }}
                  className="hover:cursor-default hover:text-strong text-left text-color text-sm px-8 py-1 hover:bg-background-shadow rounded-[6px]"
                >
                  Dark Mode
                </button>
                <button
                  onClick={() => {
                    setTheme("light")
                    setIsPopoverOpen(false)
                  }}
                  className="hover:cursor-default hover:text-strong text-left text-color text-sm px-8 py-1 hover:bg-background-shadow rounded-[6px]"
                >
                  Light Mode
                </button>
              </div>
            </PopoverAppSettings>
          </div>
        </CenteredContainer>
      </header>
    )
  }
)
