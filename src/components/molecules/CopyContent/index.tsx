"use client"

import { Label } from "@/components/atoms"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import st from "./style.module.css"
import IconClipboard from "@/components/icons/IconClipboard"
import { ToastCopySuccess } from "@/components/molecules/_toast/CopySuccess"
import { AnimatePresence, motion } from "framer-motion"
import IconAt from "@/components/icons/IconAt"
import { ButtonIcon } from "@/components/atoms/ButtonIcon"
import { ModalCopyContentDetails } from "@/components/modal/ModalCopyContentDetails"

export interface CopyContentCustomProps {
  classesStrings: string
  label: string
  actions?: {
    hasDetails?: boolean
  }
}

export interface CopyContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CopyContentCustomProps {}

export const CopyContent = React.forwardRef<HTMLDivElement, CopyContentProps>(
  function CopyContentComponent({ actions = {}, classesStrings, label, ...props }, ref) {
    const [showSuccessCopy, setShowSuccessCopy] = useState(false)

    const hasValidClassesString = !!classesStrings.length
    const hasValidActions = Object.values(actions).some(Boolean)

    const handleCopyContent = () => {
      if (!hasValidClassesString) return
      const hasAnyValidOutput = classesStrings.length
      if (hasAnyValidOutput) navigator.clipboard.writeText(classesStrings)

      setShowSuccessCopy(true)

      setTimeout(() => {
        setShowSuccessCopy(false)
      }, 1500)
    }

    return (
      <div
        {...props}
        className={cn("", props.className)}
        ref={ref}
      >
        <Label className="text-heading-soft text-sm leading-none mb-2">{label}</Label>
        <div className="flex gap-4">
          <div
            data-valid={hasValidClassesString}
            className={cn(
              "flex-1 border min-h-interactive h-fit font-jetbrains bg-background selection:bg-background-shadow px-4 py-2.5 rounded-interactive",
              "hover:cursor-pointer",
              st.copy_content
            )}
            onClick={handleCopyContent}
          >
            <AnimatePresence>
              {showSuccessCopy && (
                <ToastCopySuccess
                  className="__action"
                  text="Copiado com sucesso!"
                />
              )}
            </AnimatePresence>
            <div className={st.hover_blur}>
              <div className={st.icon_clipboard_wrapper}>
                <IconClipboard
                  size={24}
                  className={cn(st.clipboard_icon, "text-symbol")}
                />
              </div>
            </div>
            <p className="font-jetbrains text-color text-sm">{classesStrings}</p>
          </div>
          {hasValidActions && (
            <div className="grid place-items-center border h-interactive bg-background rounded-interactive px-2">
              {actions.hasDetails && (
                <ModalCopyContentDetails
                  title={label}
                  classesStrings={classesStrings}
                  label={label}
                >
                  <ButtonIcon>
                    <IconAt
                      size={16}
                      className="text-symbol"
                    />
                  </ButtonIcon>
                </ModalCopyContentDetails>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)
