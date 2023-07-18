"use client"
import React, { CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import * as Dialog from "@radix-ui/react-dialog"
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
import { getPrefixesClasses } from "@/utils/getPrefixesClasses"
import clsx from "clsx"
import { cn } from "@/lib/utils"

interface ContentProps
  extends OverrideConflict<React.HTMLAttributes<HTMLDivElement>, MotionProps>,
    Pick<CopyContentCustomProps, "classesStrings"> {
  controlModalOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  title: string
}

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(function ContentComponent(
  { title, classesStrings, controlModalOpen, ...props },
  ref
) {
  const [isOpen, setIsOpen] = controlModalOpen

  const prefixesClassesObject = getPrefixesClasses(classesStrings)
  const prefixesClasses = Object.entries(prefixesClassesObject.specialClasses)

  const parentRef = useRef<HTMLDivElement>(null)
  const childRefs = useRef<(HTMLDivElement | null)[]>([])
  const [prefixColumn, setPrefixColumn] = useState({
    gotChildrenWidths: false,
    maxWidth: 0,
  })

  const handleOpen = () => {
    let maxChildWidth = 0

    for (const ref of childRefs.current) {
      if (ref) {
        maxChildWidth = Math.max(ref.offsetWidth, maxChildWidth)
      }
    }

    if (maxChildWidth > 0) {
      console.log({ maxChildWidth })
      if (parentRef.current) {
        parentRef.current.style.setProperty("--prefixesWidth", `${maxChildWidth}px`)
      }
      setPrefixColumn({ gotChildrenWidths: true, maxWidth: maxChildWidth })
    }
  }

  const handleClose = () => {
    // setMaxWidth({
    //   gotChildrenWidths: false,
    //   maxWidth: 0,
    // })
  }

  useEffect(() => {
    setPrefixColumn({
      gotChildrenWidths: false,
      maxWidth: 0,
    })
  }, [classesStrings])

  return (
    <Dialog.Content
      className="fixed inset-0 grid place-items-center px-8"
      ref={ref}
      onOpenAutoFocus={handleOpen}
      onCloseAutoFocus={handleClose}
    >
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
          <div className="p-6 __two space-y-3">
            <CopyContent className="__two">
              <CopyContainer classesStrings={classesStrings} />
            </CopyContent>
            {!!prefixesClasses[0][0].length && (
              <div
                ref={parentRef}
                className="space-y-3"
                style={
                  {
                    "--prefixesWidth": `${prefixColumn.maxWidth}px`,
                  } as CSSProperties
                }
              >
                {prefixesClasses.map(([prefix, classes], index) => (
                  <div
                    key={prefix}
                    className="flex gap-3 items-center"
                  >
                    <div
                      ref={ref => (childRefs.current[index] = ref)}
                      className={clsx({
                        "w-[var(--prefixesWidth)]": prefixColumn.gotChildrenWidths,
                      })}
                    >
                      {prefix}
                    </div>
                    <CopyContent className="__two flex-1">
                      <CopyContainer classesStrings={classes} />
                    </CopyContent>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </Dialog.Content>
  )
})
