import React from "react"
import { twMerge } from "tailwind-merge"

interface CenteredContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function CenteredContainer({ ...props }: CenteredContainerProps) {
  return (
    <section {...props} className={twMerge("max-w-7xl mx-auto", props.className)}>
      {props.children}
    </section>
  )
}
