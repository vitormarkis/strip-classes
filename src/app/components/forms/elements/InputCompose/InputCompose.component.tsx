import { Form as S } from "@/app/components/forms/StripClassForm"
import { InputProps } from "@/app/components/forms/elements/Input/Input.component"
import React from "react"
import { twMerge } from "tailwind-merge"

interface InputComposeProps extends InputProps {
  children?: React.ReactNode
}

export const InputCompose = React.forwardRef<HTMLInputElement, InputComposeProps>(
  function InputComposeComponent({ children, ...props }, ref) {
    return (
      <div className="relative [&>*]:z-[1]">
        <S.Input
          {...props}
          className={twMerge("absolute inset-0 z-[0]", props.className)}
          ref={ref}
        />
        {children}
      </div>
    )
  }
)
