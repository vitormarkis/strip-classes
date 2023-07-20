import { cn } from "@/lib/utils"
import React from "react"

import st from "./style.module.css"
import IconClipboard from "@/components/icons/IconClipboard"
import { AnimatePresence, MotionProps, TargetAndTransition, motion } from "framer-motion"
import IconCheck from "@/components/icons/IconCheck"
import { OverrideConflict } from "@/types/helpers/OverrideConflict"
import { twMerge } from "tailwind-merge"
import { CopyContent } from "@/components/molecules/CopyContent"

interface CopyContentClassesContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CopyContentClassesContainer = React.forwardRef<
  HTMLDivElement,
  CopyContentClassesContainerProps
>(function CopyContentClassesContainerComponent({ ...props }, ref) {
  const { hasValidClasses, setShowSuccessCopy, handleCopyContent, showSuccessCopy, classes } =
    CopyContent.Context()

  const handleMouseLeave = () => setShowSuccessCopy(false)

  return (
    <div
      {...props}
      ref={ref}
      data-valid={hasValidClasses}
      className={cn(
        "group flex-1 border min-h-interactive h-fit font-jetbrains bg-background selection:bg-background-shadow rounded-interactive",
        "hover:cursor-pointer hover:outline-2 hover:outline-accent hover:outline-none hover:outline",
        st.copy_content,
        props.className
      )}
      onClick={handleCopyContent}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("bg-black/10 dark:bg-black/50", "transition-all duration-100", st.hover)}>
        <div
          data-valid={hasValidClasses}
          className={cn("", st.icon_clipboard_wrapper)}
        >
          <div
            className={cn(
              "Special_plate relative h-7 w-7 aspect-square border rounded-md",
              "bg-background",
              st.icon_clipboard_container
            )}
          >
            <AnimatePresence>
              {showSuccessCopy && (
                <div className="center-element">
                  <MotionClipboard
                    initial={{ scale: 0, opacity: 0 }}
                    animate={transition => ({
                      ...transition,
                      scale: 1,
                      opacity: 1,
                    })}
                  >
                    <IconCheck
                      size={18}
                      className={cn(st.clipboard_icon, "text-symbol")}
                    />
                  </MotionClipboard>
                </div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!showSuccessCopy && (
                <div className="center-element">
                  <MotionClipboard
                    exit={transition => ({
                      ...transition,
                      scale: 0,
                      opacity: 0,
                    })}
                  >
                    <IconClipboard
                      size={18}
                      className={cn(st.clipboard_icon, "text-symbol")}
                    />
                  </MotionClipboard>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="px-4 py-2.5 overflow-x-auto">
        <p className="font-jetbrains text-color text-sm">{classes}</p>
      </div>
      {props.children}
    </div>
  )
})

interface MotionClipboardProps
  extends OverrideConflict<
    React.HTMLAttributes<HTMLDivElement>,
    OverrideConflict<
      MotionProps,
      {
        animate?: (defaultValues: TargetAndTransition) => MotionProps["animate"]
        exit?: (defaultValues: TargetAndTransition) => MotionProps["exit"]
      }
    >
  > {
  children: React.ReactNode
}

export const MotionClipboard = React.forwardRef<HTMLDivElement, MotionClipboardProps>(
  function MotionClipboardComponent({ animate, exit, ...props }, ref) {
    const transition = {
      mass: 0.5,
      damping: 11,
      stiffness: 80,
      ease: "easeInOut",
    }

    const defaultValues = {
      transition,
    }

    return (
      <motion.div
        {...props}
        className={twMerge("", props.className)}
        animate={animate && animate(defaultValues)}
        exit={exit && exit(defaultValues)}
        ref={ref}
      >
        {props.children}
      </motion.div>
    )
  }
)
