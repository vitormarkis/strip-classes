import { ButtonIcon, ButtonIconProps } from "@/components/atoms/ButtonIcon"
import IconAt from "@/components/icons/IconAt"
import { ModalCopyContentDetails } from "@/components/modal/ModalCopyContentDetails"
import { CopyContent } from "@/components/molecules/CopyContent"
import React, { ReactNode } from "react"

export interface CopyContentButtonDetailsProps extends Omit<ButtonIconProps, "children"> {
  children?: ReactNode
}

export const CopyContentButtonDetails = React.forwardRef<
  HTMLButtonElement,
  CopyContentButtonDetailsProps
>(function CopyContentButtonDetailsComponent({ children, ...props }, ref) {
  const { classes, name } = CopyContent.Context()

  if (!name)
    throw new Error(
      'Algum componente está usando "name", mas "name" não foi provido, passe a propriedade "name" no componente Root.'
    )

  return (
    <ModalCopyContentDetails
      title={name}
      classesStrings={classes}
    >
      <ButtonIcon
        {...props}
        ref={ref}
      >
        {children || (
          <IconAt
            size={16}
            className="text-symbol"
          />
        )}
      </ButtonIcon>
    </ModalCopyContentDetails>
  )
})
