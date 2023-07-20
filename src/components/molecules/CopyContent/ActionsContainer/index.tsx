import React from "react"
import { twMerge } from "tailwind-merge"

interface CopyContentActionsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CopyContentActionsContainer = React.forwardRef<
  HTMLDivElement,
  CopyContentActionsContainerProps
>(function CopyContentActionsContainerComponent({ ...props }, ref) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex items-center border h-interactive bg-background rounded-interactive gap-2 px-2",
        props.className
      )}
      ref={ref}
    >
      {props.children}
    </div>
  )
})
