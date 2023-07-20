import { cn } from "@/lib/utils"
import React from "react"

interface CopyContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CopyContentWrapper = React.forwardRef<HTMLDivElement, CopyContentWrapperProps>(
  function CopyContentWrapperComponent({ ...props }, ref) {
    return (
      <div
        {...props}
        className={cn("flex gap-4", props.className)}
        ref={ref}
      >
        {props.children}
      </div>
    )
  }
)
