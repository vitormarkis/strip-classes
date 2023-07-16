"use client"
import React, { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import * as Dialog from "@radix-ui/react-dialog"
import { createPortal } from "react-dom"
import { motion, AnimatePresence, MotionProps } from "framer-motion"
import { OverrideConflict } from "@/types/helpers/OverrideConflict"
import { ButtonIcon } from "@/components/atoms/ButtonIcon"
import IconX from "@/components/icons/IconX"
import { Label } from "@/components/atoms"
import { CopyContent } from "@/components/molecules/CopyContent"
import {
  CopyContainer,
  type CopyContentCustomProps,
} from "@/components/molecules/CopyContent/CopyContainer"

interface ModalCopyContentDetailsProps
  extends OverrideConflict<React.HTMLAttributes<HTMLDivElement>, MotionProps>,
    Pick<CopyContentCustomProps, "classesStrings" | "label"> {
  children: React.ReactNode
  title: string
}

export const ModalCopyContentDetails = React.forwardRef<
  HTMLDivElement,
  ModalCopyContentDetailsProps
>(function ModalCopyContentDetailsComponent(
  { classesStrings, label, title, children, ...props },
  ref
) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      {isMounted
        ? createPortal(
            <Dialog.Content className="fixed inset-0 grid place-items-center px-8">
              <Dialog.Overlay
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-[#000000]/50"
              />
              <AnimatePresence>
                <motion.div
                  {...props}
                  className={twMerge(
                    "z-10 max-w-6xl w-full",
                    "bg-background border rounded-lg",
                    props.className
                  )}
                  ref={ref}
                >
                  <div className="flex items-center justify-between pl-3.5 pr-2 h-11 border-b">
                    <div>
                      <Label className="text-heading text-xl font-extralight">{title}</Label>
                    </div>
                    <div>
                      <Dialog.Close asChild>
                        <ButtonIcon>
                          <IconX />
                        </ButtonIcon>
                      </Dialog.Close>
                    </div>
                  </div>
                  <div className="p-6 __two">
                    <CopyContent className="__two">
                      <CopyContainer
                        classesStrings={classesStrings}
                        label={label}
                      />
                    </CopyContent>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Dialog.Content>,
            document.querySelector("#modal")!
          )
        : null}
    </Dialog.Root>
  )
})
