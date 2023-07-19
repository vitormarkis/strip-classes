import { Form as S } from "@/components/forms/elements"
import { InputProps } from "@/components/forms/elements/Input/Input.component"
import { cssVariables } from "@/utils/units/cssVariables"
import React from "react"
import { twMerge } from "tailwind-merge"

interface InputComposeProps extends InputProps {
  children?: React.ReactNode
}

export const InputCompose = React.forwardRef<HTMLInputElement, InputComposeProps>(
  function InputComposeComponent({ children, ...props }, ref) {
    return (
      <div
        className="relative [&>*]:z-[var(--z-index)]"
        style={cssVariables(["z-index", 50])}
      >
        <S.Input
          {...props}
          className={twMerge("absolute inset-0 z-[calc(var(--z-index)_-_1)]", props.className)}
          ref={ref}
        />
        {children}
      </div>
    )
  }
)
