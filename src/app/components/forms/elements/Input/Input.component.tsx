import React from "react"
import { twMerge } from "tailwind-merge"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function InputComponent(
  { ...props },
  ref
) {
  return (
    <input
      {...props}
      className={twMerge("h-12 rounded-lg outline-none px-4", props.className)}
      ref={ref}
    />
  )
})
