import { CopyContentWrapper } from "@/components/molecules/CopyContent/Wrapper"
import { CopyContentButtonWrapper } from "@/components/molecules/CopyContent/ButtonWrapper"
import { CopyContentClassesContainer } from "@/components/molecules/CopyContent/ClassesContainer"
import { CopyContentRoot, useCopyContentRootContext } from "@/components/molecules/CopyContent/Root"
import { CopyContentTitle } from "@/components/molecules/CopyContent/Title"
import { CopyContentButtonDetails } from "@/components/molecules/CopyContent/_buttons/ButtonDetails"
import { CopyContentActionsContainer } from "@/components/molecules/CopyContent/ActionsContainer"

export const CopyContent = {
  Root: CopyContentRoot,
  Title: CopyContentTitle,
  Container: CopyContentClassesContainer,
  ButtonWrapper: CopyContentButtonWrapper,
  Wrapper: CopyContentWrapper,
  ButtonDetails: CopyContentButtonDetails,
  ActionsContainer: CopyContentActionsContainer,
  Context: useCopyContentRootContext,
}
