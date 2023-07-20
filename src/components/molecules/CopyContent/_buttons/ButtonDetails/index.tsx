import { ButtonIcon } from "@/components/atoms/ButtonIcon"
import IconAt from "@/components/icons/IconAt"
import {
  ModalCopyContentDetails,
  ModalCopyContentDetailsCustomProps,
  ModalCopyContentDetailsProps,
} from "@/components/modal/ModalCopyContentDetails"
import { CopyContent } from "@/components/molecules/CopyContent"
import { OmitCommon } from "@/types/helpers/OmitCommon"
import React from "react"

export type CopyContentButtonDetailsProps = OmitCommon<
  ModalCopyContentDetailsProps,
  ModalCopyContentDetailsCustomProps
>

export const CopyContentButtonDetails = React.forwardRef<
  HTMLDivElement,
  CopyContentButtonDetailsProps
>(function CopyContentButtonDetailsComponent({ ...props }, ref) {
  const { classes, name } = CopyContent.Context()

  if(!name) throw new Error('Algum componente está usando "name", mas "name" não foi provido, passe a propriedade "name" no componente Root.')

  return (
    <ModalCopyContentDetails
      {...props}
      ref={ref}
      title={name}
      classesStrings={classes}
    >
      <ButtonIcon>
        <IconAt
          size={16}
          className="text-symbol"
        />
      </ButtonIcon>
    </ModalCopyContentDetails>
  )
})
