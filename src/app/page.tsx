"use client"

import { CenteredContainer } from "@/app/components/CenteredContainer"
import { Form as S } from "@/app/components/forms/StripClassForm"
import React, { useRef } from "react"

export default function Home() {
  const copyRef = useRef<HTMLInputElement | null>(null)

  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    const copyingValue = copyRef.current?.value
    if (!copyingValue) return
    navigator.clipboard.writeText(copyingValue)
  }

  return (
    <main className="bg-neutral-100 min-h-screen">
      <CenteredContainer className="px-4 bg-white min-h-screen">
        <S.Form className="p-4 gap-4">
          <S.Input
            className="font-jetbrains placeholder:text-slate-500 text-slate-700 bg-slate-100 border border-slate-300 shadow-md shadow-slate-800/10 selection:bg-slate-300"
            placeholder="Classes do elemento base"
          />
          <S.Input
            className="font-jetbrains placeholder:text-slate-500 text-slate-700 bg-slate-100 border border-slate-300 shadow-md shadow-slate-800/10 selection:bg-slate-300"
            placeholder="Classes do próximo elemento"
          />
          <S.InputCompose
            className="font-jetbrains placeholder:text-slate-500 text-slate-700 bg-slate-100 border border-slate-300 shadow-md shadow-slate-800/10 selection:bg-slate-300"
            placeholder="Output"
            ref={copyRef}
          >
            <button
              type="button"
              onClick={handleCopy}
              className="absolute right-0 top-0 h-6 px-2 rounded-lg bg-green-300 text-green-600"
            >
              Copiar
            </button>
          </S.InputCompose>
        </S.Form>
      </CenteredContainer>
    </main>
  )
}
