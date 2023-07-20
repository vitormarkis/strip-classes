"use client"
import { CenteredContainer } from "@/components/atoms/CenteredContainer"
import { InputContainer } from "@/components/molecules/InputContainer"
import { appendSpecialClassesToObject } from "@/utils/units/appendSpecialClassesToObject"
import { removeLargeSpaces } from "@/utils/units/removeLargeSpaces"
import { separateSpecialClasses } from "@/utils/units/separateSpecialClasses"
import { turnAllValuesToString } from "@/utils/units/turnAllValuesToString"
import React, { useEffect, useState } from "react"

import { twMerge } from "tailwind-merge"
import { CopyContent } from "@/components/molecules/CopyContent"

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
      className={twMerge("bg-neutral-100", props.className)}
    >
      <CenteredContainer className="h-[calc(100vh_-_78px)]">
        <div className="flex flex-col lg:flex-row border-b py-5">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-center text-heading text-4xl font-extralight">
                Classes Conflitantes
              </h2>
              <span className="block text-center text-heading-sub text-sm">
                Insira as classes conflitantes nos inputs abaixo:
              </span>
            </div>

            <div className="space-y-5">
              <InputContainer
                label="Elemento base:"
                placeholder="Classes do elemento base"
                value={baseClassesString}
                onChange={e => setBaseClassesString(removeLargeSpaces(e.target.value))}
              />
              <InputContainer
                label="Elemento a ser comparado:"
                placeholder="Classes do próximo elemento"
                value={secondaryClassesString}
                onChange={e => setSecondaryClassesString(removeLargeSpaces(e.target.value))}
              />
            </div>
          </div>
          <div className="block lg:hidden border-b pb-5 mb-5" />
          <div className="hidden lg:block border-r pr-5 mr-5" />
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-center text-heading text-4xl font-extralight">Classes Únicas</h2>
              <span className="block text-center text-heading-sub text-sm">
                As classes únicas de cada input:
              </span>
            </div>
            <div className="space-y-5">
              <CopyContent.Root
                classes={baseUniqueClassesString}
                name="string base"
                className="__two"
              >
                <CopyContent.Title />
                <CopyContent.Wrapper>
                  <CopyContent.Container />
                  <CopyContent.ActionsContainer>
                    <CopyContent.ButtonDetails />
                  </CopyContent.ActionsContainer>
                </CopyContent.Wrapper>
              </CopyContent.Root>
              <CopyContent.Root
                classes={secondaryUniqueClassesString}
                name="string secundária"
                className="__two"
              >
                <CopyContent.Title />
                <CopyContent.Wrapper>
                  <CopyContent.Container />
                  <CopyContent.ActionsContainer>
                    <CopyContent.ButtonDetails />
                  </CopyContent.ActionsContainer>
                </CopyContent.Wrapper>
              </CopyContent.Root>
            </div>
          </div>
        </div>
        <div className="py-5">
          <CopyContent.Root
            classes={commomClassesString}
            name="em comum"
            className="__two"
          >
            <CopyContent.Title />
            <CopyContent.Wrapper>
              <CopyContent.Container />
              <CopyContent.ActionsContainer>
                <CopyContent.ButtonDetails />
              </CopyContent.ActionsContainer>
            </CopyContent.Wrapper>
          </CopyContent.Root>
        </div>
      </CenteredContainer>
    </main>
  )
}
