import { Input, Label } from "@/components/atoms"
import type { InputProps } from "@/components/atoms"
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
          className="__two border"
        />
      </div>
    )
  }
)
