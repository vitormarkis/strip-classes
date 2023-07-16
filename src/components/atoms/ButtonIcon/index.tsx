import React from "react"
import { twMerge } from "tailwind-merge"

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  function ButtonIconComponent({ ...props }, ref) {
    return (
      <button
        {...props}
        className={twMerge(
          "Special_slate",
          "h-7 w-7 grid place-items-center bg-background rounded-interactive",
          "border-y border-y-background hover:border-b-special-back-strong hover:border-t-special-back-soft",
          "hover:bg-special-back",
          "active:translate-y-[2px]",
          "transition-all duration-300",
          props.className
        )}
        ref={ref}
      />
    )
  }
)
