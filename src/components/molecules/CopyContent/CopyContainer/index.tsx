import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import st from "./style.module.css"
import { ButtonIcon } from "@/components/atoms/ButtonIcon"
import IconAt from "@/components/icons/IconAt"
import IconClipboard from "@/components/icons/IconClipboard"
import { ModalCopyContentDetails } from "@/components/modal/ModalCopyContentDetails"
import { ToastCopySuccess } from "@/components/molecules/_toast/CopySuccess"
import { AnimatePresence } from "framer-motion"

export type CopyContentCustomProps = {
  classesStrings: string
  actions?: {
    hasDetails?: boolean
  }
} & React.HTMLAttributes<HTMLDivElement>

export const CopyContainer = React.forwardRef<HTMLDivElement, CopyContentCustomProps>(
  function CopyContainerComponent({ actions = {}, classesStrings, ...props }, ref) {
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
      <div>
        <div
          {...props}
          className={twMerge("flex gap-4", props.className)}
          ref={ref}
        >
          <div
            data-valid={hasValidClassesString}
            className={cn(
              "flex-1 border min-h-interactive h-fit font-jetbrains bg-background selection:bg-background-shadow rounded-interactive",
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
            <div className={cn("hover:bg-background/5", st.hover_blur)}>
              <div
                data-valid={hasValidClassesString}
                className={cn("", st.icon_clipboard_wrapper)}
              >
                <div
                  className={cn(
                    "__neutral h-7 w-7 grid aspect-square border place-items-center rounded-md",
                    "bg-background",
                    st.icon_clipboard_container
                  )}
                >
                  <IconClipboard
                    size={18}
                    className={cn(st.clipboard_icon, "text-symbol")}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-2.5 overflow-x-auto">
              <p className="font-jetbrains text-color text-sm">{classesStrings}</p>
            </div>
          </div>
          {hasValidActions && (
            <div className="grid place-items-center border h-interactive bg-background rounded-interactive px-2">
              {actions.hasDetails && (
                <ModalCopyContentDetails
                  title={"Gonna Figure Out"}
                  classesStrings={classesStrings}
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

        {props.children}
      </div>
    )
  }
)
