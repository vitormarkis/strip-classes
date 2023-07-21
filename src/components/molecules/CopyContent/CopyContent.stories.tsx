import { CopyContent } from "@/components/molecules/CopyContent"
import { CopyContentRootProps } from "@/components/molecules/CopyContent/Root"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "CopyContent",
  component: CopyContent.ButtonDetails,
  args: {
    className: "__two",
    name: "Storybook v1",
    classes: "flex hover:bg-background",
  },
  decorators: [
    (Story, context) => (
      <CopyContent.Root {...context.args}>
        <CopyContent.Wrapper>
          <CopyContent.Container />
          <CopyContent.ButtonWrapper>{Story()}</CopyContent.ButtonWrapper>
        </CopyContent.Wrapper>
      </CopyContent.Root>
    ),
  ],
} as Meta<CopyContentRootProps>

export const Default: StoryObj = {}
