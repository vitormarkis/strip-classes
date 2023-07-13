"use client"

import { Label } from "@/app/components/atoms"
import { cn } from "@/lib/utils"
import React from "react"
import st from "./style.module.css"
import IconClipboard from "@/app/components/icons/IconClipboard"

interface CopyContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classesStrings: string
  label: string
}

export const CopyContent = React.forwardRef<HTMLDivElement, CopyContentProps>(
  function CopyContentComponent({ classesStrings, label, ...props }, ref) {
    const hasValidClassesString = !!classesStrings.length

    const handleCopyContent = () => {
      if (!hasValidClassesString) return
      const hasAnyValidOutput = classesStrings.length
      if (hasAnyValidOutput) navigator.clipboard.writeText(classesStrings)
    }

    return (
      <div
        {...props}
        className={cn("", props.className)}
        ref={ref}
      >
        <Label className="text-heading-soft text-sm leading-none mb-2">{label}</Label>
        <div
          data-valid={hasValidClassesString}
          className={cn(
            "min-h-interactive h-fit font-jetbrains bg-background selection:bg-background-shadow px-4 py-2.5 rounded-interactive",
            "shadow-md shadow-background-shadow/40 dark:shadow-none",
            "hover:cursor-pointer",
            st.copy_content
          )}
          onClick={handleCopyContent}
        >
          <div className={st.hover_blur}>
            <IconClipboard
              size={36}
              className={cn(st.clipboard_icon, "text-symbol")}
            />
          </div>
          <p className="font-jetbrains text-color text-sm">{classesStrings}</p>
        </div>
      </div>
    )
  }
)
