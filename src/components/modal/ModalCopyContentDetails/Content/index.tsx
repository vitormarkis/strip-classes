"use client"
import React, { useEffect, useRef, useState } from "react"
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
import { cssVariables } from "@/utils/units/cssVariables"
import { ScrollArea } from "@/components/ui/scroll-area"

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
  const { regularClasses } = prefixesClassesObject

  const parentRef = useRef<HTMLDivElement>(null)
  const childRefs = useRef<(HTMLDivElement | null)[]>([])
  const regularRef = useRef<HTMLDivElement>(null)
  const [prefixColumn, setPrefixColumn] = useState({
    gotChildrenWidths: false,
    maxWidth: 0,
  })

  const handleOpen = () => {
    let maxChildWidth = 0
    const allRefs = [...childRefs.current, regularRef.current]

    for (const ref of allRefs) {
      maxChildWidth = Math.max(ref?.offsetWidth || 0, maxChildWidth)
    }

    if (maxChildWidth > 0) {
      parentRef.current?.style.setProperty("--prefixesWidth", `${maxChildWidth}px`)
      setPrefixColumn({ gotChildrenWidths: true, maxWidth: maxChildWidth })
    }
  }

  useEffect(() => {
    setPrefixColumn({
      gotChildrenWidths: false,
      maxWidth: 0,
    })
  }, [classesStrings])

  return (
    <Dialog.Content
      className="z-50 fixed inset-0 grid place-items-center px-8"
      ref={ref}
      onOpenAutoFocus={handleOpen}
    >
      <Dialog.Overlay
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-[#000000]/50"
      />
      <AnimatePresence>
        <motion.div
          {...props}
          className={cn(
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
          <div className="__two p-6 space-y-3 overflow-y-auto max-h-[80vh]">
            <CopyContent>
              <CopyContainer classesStrings={classesStrings} />
            </CopyContent>
            {!!prefixesClasses.length && (
              <div
                ref={parentRef}
                className="space-y-3"
                style={cssVariables(["prefixesWidth", prefixColumn.maxWidth, "px"])}
              >
                <div className="flex gap-3 items-center">
                  <PrefixContainer
                    ref={regularRef}
                    shouldResize={prefixColumn.gotChildrenWidths}
                  >
                    <PrefixTag className="text-accent-soft">Regular:</PrefixTag>
                  </PrefixContainer>
                  <CopyContent className="__two flex-1">
                    <CopyContainer classesStrings={regularClasses} />
                  </CopyContent>
                </div>
                {prefixesClasses.map(([prefix, classes], index) => (
                  <div
                    key={prefix}
                    className="flex gap-3 items-center"
                  >
                    <PrefixContainer
                      shouldResize={prefixColumn.gotChildrenWidths}
                      ref={ref => (childRefs.current[index] = ref)}
                    >
                      {prefix.split(":").map(prefixType => (
                        <PrefixTag>{`${prefixType}:`}</PrefixTag>
                      ))}
                    </PrefixContainer>
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

interface PrefixContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  shouldResize?: boolean
}

export const PrefixContainer = React.forwardRef<HTMLDivElement, PrefixContainerProps>(
  function PrefixContainerComponent({ shouldResize, ...props }, ref) {
    return (
      <div
        {...props}
        className={cn(
          "flex gap-2 justify-end",
          {
            "w-[var(--prefixesWidth)]": shouldResize,
          },
          props.className
        )}
        ref={ref}
      >
        {props.children}
      </div>
    )
  }
)

interface PrefixTagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const PrefixTag = React.forwardRef<HTMLDivElement, PrefixTagProps>(
  function PrefixTagComponent({ ...props }, ref) {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "__two text-color text-sm leading-none py-1.5 px-3 rounded-lg border bg-background",
          props.className
        )}
      >
        {props.children}
      </div>
    )
  }
)
