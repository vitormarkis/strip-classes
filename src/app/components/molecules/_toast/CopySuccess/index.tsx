import { cn } from "@/lib/utils"
import { MotionProps, motion } from "framer-motion"
import React from "react"
import st from "./styles.module.css"
import { OverrideConflict } from "@/types/helpers/OverrideConflict"

interface ToastCopySuccessProps
  extends OverrideConflict<React.HTMLAttributes<HTMLDivElement>, MotionProps> {
  text: string
}

export const ToastCopySuccess = React.forwardRef<HTMLDivElement, ToastCopySuccessProps>(
  function ToastCopySuccessComponent({ text, ...props }, ref) {
    return (
      <motion.div
        {...props}
        ref={ref}
        className={cn(
          st.success_copy,
          "z-10 h-6 text-xs grid place-items-center px-4 rounded-interactive bg-background text-color",
          props.className
        )}
        initial={{ x: "100%" }}
        animate={{
          x: "0%",
          transition: {
            type: "spring",
            mass: 0.1,
            damping: 7,
            stiffness: 80,
          },
        }}
        exit={{ x: "100%", transition: { ease: "easeInOut" } }}
      >
        {text}
      </motion.div>
    )
  }
)
