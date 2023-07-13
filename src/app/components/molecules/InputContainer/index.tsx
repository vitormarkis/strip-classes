import { Input, Label } from "@/app/components/atoms"
import type { InputProps } from "@/app/components/atoms"
import { cn } from "@/lib/utils"
import React from "react"

interface InputContainerProps extends InputProps {
  label: string
}

export const InputContainer = React.forwardRef<HTMLInputElement, InputContainerProps>(
  function InputContainerComponent({ label, className, ...props }, ref) {
    return (
      <div className={cn("flex flex-col", className)}>
        <Label className="text-heading-soft text-sm leading-none mb-2">{label}</Label>
        <Input
          ref={ref}
          {...props}
          className="__two shadow-md shadow-background-shadow/40 dark:shadow-none"
        />
      </div>
    )
  }
)
