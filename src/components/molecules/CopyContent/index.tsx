import { cn } from "@/lib/utils"
import React from "react"

export interface CopyContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CopyContent = React.forwardRef<HTMLDivElement, CopyContentProps>(
  function CopyContentComponent({ ...props }, ref) {
    return (
      <div
        {...props}
        className={cn("", props.className)}
        ref={ref}
      >
        {props.children}
      </div>
    )
  }
)
