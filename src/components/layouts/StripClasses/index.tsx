"use client"
import { Label } from "@/components/atoms"
import { CenteredContainer } from "@/components/atoms/CenteredContainer"
import { Form as S } from "@/components/forms/elements"
import { StripClassesElements as Custom } from "@/components/forms/StripClassesForm"
import { CopyContent } from "@/components/molecules/CopyContent"
import { InputContainer } from "@/components/molecules/InputContainer"
import React, { useEffect, useRef, useState } from "react"

import { twMerge } from "tailwind-merge"

interface StripClassesPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export default function StripClassesPage({ ...props }: StripClassesPageProps) {
  const [baseClassesString, setBaseClassesString] = useState("")
  const [secondaryClassesString, setSecondaryClassesString] = useState("")
  const [commomClassesString, setCommomClassesString] = useState("")
  const [baseUniqueClassesString, setBaseUniqueClassesString] = useState("")
  const [secondaryUniqueClassesString, setSecondaryUniqueClassesString] = useState("")

  const generateDiff = (classes: [baseClassesString: string, secondaryClassesString: string]) => {
    const [baseClassesString, secondaryClassesString] = classes
    const baseClasses = baseClassesString.trim().split(" ")
    const secondaryClasses = secondaryClassesString.trim().split(" ")

    const commomClasses = []

    const baseUniqueClasses = []
    const secondaryUniqueClasses = []

    for (const classStr of baseClasses) {
      if (secondaryClasses.includes(classStr)) {
        commomClasses.push(classStr)
      }
    }

    for (const classStr of baseClasses) {
      if (!commomClasses.includes(classStr)) {
        baseUniqueClasses.push(classStr)
      }
    }

    for (const classStr of secondaryClasses) {
      if (!commomClasses.includes(classStr)) {
        secondaryUniqueClasses.push(classStr)
      }
    }

    return {
      commomClasses: commomClasses.join(" "),
      baseUniqueClasses: baseUniqueClasses.join(" "),
      secondaryUniqueClasses: secondaryUniqueClasses.join(" "),
    }
  }

  useEffect(() => {
    const res = generateDiff([baseClassesString, secondaryClassesString])

    setCommomClassesString(res.commomClasses)
    setBaseUniqueClassesString(res.baseUniqueClasses)
    setSecondaryUniqueClassesString(res.secondaryUniqueClasses)
  }, [baseClassesString, secondaryClassesString])

  return (
    <main
      {...props}
      className={twMerge("bg-neutral-100 min-h-screen", props.className)}
    >
      <CenteredContainer className="bg-white min-h-screen">
        <S.Form className="py-4 gap-4">
          <InputContainer
            label="Elemento base:"
            placeholder="Classes do elemento base"
            value={baseClassesString}
            onChange={e => setBaseClassesString(e.target.value)}
          />
          <InputContainer
            label="Elemento a ser comparado:"
            placeholder="Classes do próximo elemento"
            value={secondaryClassesString}
            onChange={e => setSecondaryClassesString(e.target.value)}
          />
          <CopyContent
            classesStrings={commomClassesString}
            label="Em comum:"
            className="__two"
          />
          <CopyContent
            classesStrings={baseClassesString}
            label="Classes únicas da string base:"
            className="__two"
          />
          <CopyContent
            classesStrings={secondaryUniqueClassesString}
            label="Classes únicas da string secundária:"
            className="__two"
          />
        </S.Form>
      </CenteredContainer>
    </main>
  )
}
