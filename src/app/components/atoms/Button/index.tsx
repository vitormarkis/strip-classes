import { cn } from "@/lib/utils"
import React from "react"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function ButtonComponent(
  { asChild, ...props },
  ref
) {
  const Element = asChild ? Slot : "button"

  return (
    <Element
      {...props}
      className={cn("h-interactive px-4 whitespace-nowrap", props.className)}
      ref={ref}
    >
      {props.children}
    </Element>
  )
})
