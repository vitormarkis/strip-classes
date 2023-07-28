"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion } from "framer-motion"

export type MotionSwitchStaticProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode
  centerContent?: boolean
}

export const MotionSwitchStatic = React.forwardRef<
  React.ElementRef<"div">,
  MotionSwitchStaticProps
>(function MotionSwitchStaticComponent({ centerContent = true, children, ...props }, ref) {
  return (
    <motion.div
      {...props}
      className={cn("", props.className)}
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
      transition={{
        mass: 0.5,
        damping: 11,
        stiffness: 80,
        ease: "easeInOut",
      }}
    >
      {centerContent ? (
        <>
          <div className="center-element">{children}</div>
        </>
      ) : (
        children
      )}
    </motion.div>
  )
})
