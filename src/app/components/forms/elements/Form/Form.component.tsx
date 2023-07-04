"use client"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { twMerge } from "tailwind-merge"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function Form({ ...props }: FormProps) {
  const methods = useForm({
    defaultValues: {
      classesInput: [],
    },
  })

  return (
    <FormProvider {...methods}>
      <form
        {...props}
        className={twMerge("flex flex-col", props.className)}
      >
        {props.children}
      </form>
    </FormProvider>
  )
}
