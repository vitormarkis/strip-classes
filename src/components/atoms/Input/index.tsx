import { cn } from "@/lib/utils"
import React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function InputComponent(
  { ...props },
  ref
) {
  return (
    <input
      {...props}
      className={cn(
        "text-color bg-background",
        "min-h-interactive rounded-interactive px-4 placeholder:text-color-soft",
        "outline-none focus:outline-2 focus:outline-color/50 focus:outline-offset-0",
        props.className
      )}
      ref={ref}
    />
  )
})
