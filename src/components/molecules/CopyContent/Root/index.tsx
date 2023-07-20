"use client"
import { cn } from "@/lib/utils"
import React, { useCallback, useContext, useState } from "react"
import { createContext } from "react"

interface ICopyContentContext {
  classes: string
  name?: string
  handleCopyContent: () => void
  showSuccessCopy: boolean
  setShowSuccessCopy: React.Dispatch<React.SetStateAction<boolean>>
  hasValidClasses: boolean
}

export interface CopyContentRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<ICopyContentContext, "classes" | "name"> {}

const CopyContentContext = createContext({} as ICopyContentContext)

export function CopyContentRoot({ name, classes, ...props }: CopyContentRootProps) {
  const [showSuccessCopy, setShowSuccessCopy] = useState(false)

  const hasValidClasses = Boolean(classes.length)

  const handleCopyContent = useCallback(() => {
    if (!hasValidClasses) return
    const hasAnyValidOutput = classes.length
    if (hasAnyValidOutput) navigator.clipboard.writeText(classes)

    setShowSuccessCopy(true)
  }, [classes, hasValidClasses])

  return (
    <CopyContentContext.Provider
      value={{
        name,
        classes,
        handleCopyContent,
        showSuccessCopy,
        setShowSuccessCopy,
        hasValidClasses,
      }}
    >
      <div
        {...props}
        className={cn("", props.className)}
      >
        {props.children}
      </div>
    </CopyContentContext.Provider>
  )
}

export const useCopyContentRootContext = () => useContext(CopyContentContext)
