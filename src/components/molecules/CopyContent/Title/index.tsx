import { Label, LabelProps } from "@/components/atoms"
import { CopyContent } from "@/components/molecules/CopyContent"
import { cn } from "@/lib/utils"
import { OverrideConflict } from "@/types/helpers/OverrideConflict"
import React from "react"

type CopyContentTitleProps = OverrideConflict<LabelProps, CustomProps>

type CustomProps = {
  children?: React.ReactNode
}

export const CopyContentTitle = React.forwardRef<HTMLLabelElement, CopyContentTitleProps>(
  function CopyContentTitleComponent({ ...props }, ref) {
    const { name } = CopyContent.Context()

    if (!name)
      throw new Error(
        'Algum componente está usando "name", mas "name" não foi provido, passe a propriedade "name" no componente Root.'
      )

    return (
      <div>
        <Label
          {...props}
          className={cn("text-heading-soft text-sm leading-none mb-2", props.className)}
          ref={ref}
        >
          {props.children ?? `Classes únicas da ${name}:`}
        </Label>
      </div>
    )
  }
)
