import { Label } from "@/app/components/atoms"
import { cn } from "@/lib/utils"
import React from "react"

interface CopyContentProps extends React.HTMLAttributes<HTMLDivElement> {
  classesStrings: string
  label: string
}

export const CopyContent = React.forwardRef<HTMLDivElement, CopyContentProps>(
  function CopyContentComponent({ classesStrings, label, ...props }, ref) {
    return (
      <div
        {...props}
        className={cn("", props.className)}
        ref={ref}
      >
        <Label className="text-heading-soft text-sm leading-none mb-2">{label}</Label>
        <div
          className={cn(
            "min-h-interactive h-fit font-jetbrains bg-background selection:bg-background-shadow px-4 py-2.5 rounded-interactive",
            "shadow-md shadow-background-shadow/40 dark:shadow-none"
          )}
        >
          <p className="font-jetbrains text-color text-sm">{classesStrings}</p>
        </div>
      </div>
    )
  }
)
