"use client"
import { CenteredContainer } from "@/app/components/CenteredContainer"
import { Form as S, StripClassesElements as Custom } from "@/app/components/forms/StripClassesForm"
import IconClipboard from "@/app/components/icons/IconClipboard"
import { IFormValues } from "@/app/forms/stripClasses"
import { getElementValue } from "@/app/utils"
import React, { useEffect, useRef, useState } from "react"
import { useFormContext } from "react-hook-form"

import { twMerge } from "tailwind-merge"

interface StripClassesPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

interface StripClasses {
  commomClasses: (arg: string) => void
  baseUniqueClasses: (arg: string) => void
  secondaryUniqueClasses: (arg: string) => void
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

  // const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const hasAnyValidOutput = commomClassesString.length
  //   console.log("copy", { hasAnyValidOutput, commomClasses: commomClassesString })
  //   if (hasAnyValidOutput) navigator.clipboard.writeText(commomClassesString)
  // }

  return (
    <main
      {...props}
      className={twMerge("bg-neutral-100 min-h-screen", props.className)}
    >
      <CenteredContainer className="px-4 bg-white min-h-screen">
        <S.Form className="p-4 gap-4">
          <S.Input
            className="font-jetbrains placeholder:text-slate-500 text-slate-700 bg-slate-100 border border-slate-300 shadow-md shadow-slate-800/10 selection:bg-slate-300"
            placeholder="Classes do elemento base"
            value={baseClassesString}
            onChange={e => setBaseClassesString(e.target.value)}
          />
          <S.Input
            className="font-jetbrains placeholder:text-slate-500 text-slate-700 bg-slate-100 border border-slate-300 shadow-md shadow-slate-800/10 selection:bg-slate-300"
            placeholder="Classes do próximo elemento"
            value={secondaryClassesString}
            onChange={e => setSecondaryClassesString(e.target.value)}
          />

          <div>
            <h4>Comum:</h4>
            <div className="min-h-[6rem] h-fit font-jetbrains text-slate-300 bg-slate-800 border border-slate-700 shadow-md shadow-slate-800/10 selection:bg-slate-700 p-4 rounded-lg">
              <p className="font-jetbrains text-slate-100">{commomClassesString}</p>
            </div>
          </div>

          <div>
            <h4>Classes únicas da string base:</h4>
            <div className="min-h-[6rem] h-fit font-jetbrains text-slate-300 bg-slate-800 border border-slate-700 shadow-md shadow-slate-800/10 selection:bg-slate-700 p-4 rounded-lg">
              <p className="font-jetbrains text-slate-100">{baseUniqueClassesString}</p>
            </div>
          </div>

          <div>
            <h4>Classes únicas da string secundária:</h4>
            <div className="min-h-[6rem] h-fit font-jetbrains text-slate-300 bg-slate-800 border border-slate-700 shadow-md shadow-slate-800/10 selection:bg-slate-700 p-4 rounded-lg">
              <p className="font-jetbrains text-slate-100">{secondaryUniqueClassesString}</p>
            </div>
          </div>
        </S.Form>
      </CenteredContainer>
    </main>
  )
}
