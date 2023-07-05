"use client"
import StripClassesPage from "@/app/components/layouts/StripClasses/StripClasses.page"
import { IFormValues } from "@/app/forms/stripClasses"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"

export default function Home() {
  const methods = useForm<IFormValues>({
    defaultValues: {
      baseClasses: "",
      baseUniqueClasses: "",
      commomClasses: "",
      secondaryClasses: "",
      secondaryUniqueClasses: "",
    },
  })
  return (
    <FormProvider {...methods}>
      <StripClassesPage />
    </FormProvider>
  )
}
