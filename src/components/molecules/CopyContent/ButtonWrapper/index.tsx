import { cn } from "@/lib/utils"
import React from "react"

interface CopyContentButtonWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CopyContentButtonWrapper = React.forwardRef<
  HTMLDivElement,
  CopyContentButtonWrapperProps
>(function CopyContentButtonWrapperComponent({ ...props }, ref) {
  return (
    <div
      {...props}
      className={cn(
        "grid place-items-center border h-interactive bg-background rounded-interactive px-2",
        props.className
      )}
      ref={ref}
    >
      {props.children}
    </div>
  )
})
