import React from "react"
import { twMerge } from "tailwind-merge"

interface InputActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function InputActionButton({ type = "button", ...props }: InputActionButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        "bg-slate-500 hover:bg-slate-600 border-y border-t-slate-300 border-b-slate-600 duration-100 transition-colors absolute right-2 top-2 h-7 w-7 rounded-lg shadow",
        props.className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}
