import { CopyContent } from "@/components/molecules/CopyContent"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "CopyContent/Actions/ButtonDetails",
  component: CopyContent.ButtonDetails,
  decorators: [
    Story => (
      <CopyContent.Root
        name="Storybook"
        classes="flex hover:bg-background"
      >
        <CopyContent.Wrapper>
          <CopyContent.ButtonWrapper>{Story()}</CopyContent.ButtonWrapper>
        </CopyContent.Wrapper>
      </CopyContent.Root>
    ),
  ],
} as Meta

export const Default: StoryObj = {}
