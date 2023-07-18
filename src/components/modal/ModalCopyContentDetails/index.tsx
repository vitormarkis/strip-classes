"use client"
import React, {
  CSSProperties,
  RefObject,
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
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
import { separateSpecialClasses } from "@/utils/units/separateSpecialClasses"
import { appendSpecialClassesToObject } from "@/utils/units/appendSpecialClassesToObject"
import { turnAllValuesToString } from "@/utils/units/turnAllValuesToString"
import { getPrefixesClasses } from "@/utils/getPrefixesClasses"
import clsx from "clsx"
import { Content } from "@/components/modal/ModalCopyContentDetails/Content"

interface ModalCopyContentDetailsProps
  extends OverrideConflict<React.HTMLAttributes<HTMLDivElement>, MotionProps>,
    Pick<CopyContentCustomProps, "classesStrings"> {
  children: React.ReactNode
  title: string
}

export const ModalCopyContentDetails = React.forwardRef<
  HTMLDivElement,
  ModalCopyContentDetailsProps
>(function ModalCopyContentDetailsComponent({ classesStrings, title, children, ...props }, ref) {
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
            <Content
              classesStrings={classesStrings}
              title={title}
              controlModalOpen={[isOpen, setIsOpen]}
            />,
            document.querySelector("#modal")!
          )
        : null}
    </Dialog.Root>
  )
})
