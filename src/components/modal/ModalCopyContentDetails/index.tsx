"use client"
import React, { useEffect, useLayoutEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { createPortal } from "react-dom"
import { MotionProps } from "framer-motion"
import { OverrideConflict } from "@/types/helpers/OverrideConflict"
import { Content } from "@/components/modal/ModalCopyContentDetails/Content"
import * as Portal from "@radix-ui/react-portal"

export interface ModalCopyContentDetailsProps
  extends OverrideConflict<
      OverrideConflict<React.HTMLAttributes<HTMLDivElement>, MotionProps>,
      ModalCopyContentDetailsCustomProps
    >,
    ModalCopyContentDetailsCustomProps {}

export type ModalCopyContentDetailsCustomProps = {
  classesStrings: string
  children: React.ReactNode
  title: string
}

export const ModalCopyContentDetails = React.forwardRef<
  HTMLDivElement,
  ModalCopyContentDetailsProps
>(function ModalCopyContentDetailsComponent({ classesStrings, title, children, ...props }, ref) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      {isMounted ? (
        <Portal.Root>
          <Content
            {...props}
            classesStrings={classesStrings}
            title={title}
            controlModalOpen={[isOpen, setIsOpen]}
            ref={ref}
          />
        </Portal.Root>
      ) : null}
    </Dialog.Root>
  )
})
