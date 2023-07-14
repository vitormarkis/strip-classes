import React from "react"
import { twMerge } from "tailwind-merge"
import { Form as S } from "@/components/forms/elements"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

export function Input({ ...props }: InputProps) {
  return (
    <S.Input
      {...props}
      className={cn(
        `jetbrains border placeholder:font-sans shadow-md
        shadow-neutral-800/10 
        text-neutral-700 
        placeholder:text-neutral-500 
        border-neutral-300 
        selection:bg-neutral-300
        bg-neutral-100
        `,
        props.className
      )}
    />
  )
}
