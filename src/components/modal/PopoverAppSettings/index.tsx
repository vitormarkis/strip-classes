"use client"

import React, { Dispatch, SetStateAction } from "react"
import { cn } from "@/lib/utils"
import * as Popover from "@radix-ui/react-popover"

export type PopoverAppSettingsProps = React.ComponentPropsWithoutRef<"div"> & {
  trigger: React.ReactNode
  children: React.ReactNode
  popoverOpenState: [boolean, Dispatch<SetStateAction<boolean>>]
}

export const PopoverAppSettings = React.forwardRef<
  React.ElementRef<"div">,
  PopoverAppSettingsProps
>(function PopoverAppSettingsComponent({ popoverOpenState, trigger, children, ...props }, ref) {
  const [isPopoverOpen, setIsPopoverOpen] = popoverOpenState

  return (
    <div
      {...props}
      className={cn("", props.className)}
      ref={ref}
    >
      <Popover.Root
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <Popover.Trigger asChild>{trigger}</Popover.Trigger>
        {/* <Popover.Anchor /> */}
        <Popover.Portal>
          <Popover.Content align="end">
            {children}
            {/* <Popover.Close /> */}
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
})
