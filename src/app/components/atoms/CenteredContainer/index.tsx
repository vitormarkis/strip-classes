import { cn } from "@/lib/utils"
import React from "react"

interface CenteredContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function CenteredContainer({ ...props }: CenteredContainerProps) {
  return (
    <section
      {...props}
      className={cn("max-w-7xl mx-auto", props.className)}
    >
      {props.children}
    </section>
  )
}
