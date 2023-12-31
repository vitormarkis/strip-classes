import { cn } from "@/lib/utils"
import React from "react"

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function LabelComponent(
  { ...props },
  ref
) {
  return (
    <label
      {...props}
      className={cn("leading-none block", props.className)}
      ref={ref}
    >
      {props.children}
    </label>
  )
})
