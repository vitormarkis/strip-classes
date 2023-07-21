import { CopyContent } from "@/components/molecules/CopyContent"
import { CopyContentRootProps } from "@/components/molecules/CopyContent/Root"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: "CopyContent/ClassesContainer",
  component: CopyContent.Container,
  args: {
    classes: "flex hover:bg-background",
  },
  decorators: [(Story, ctx) => <CopyContent.Root {...ctx.args}>{Story()}</CopyContent.Root>],
} as Meta<CopyContentRootProps>

export const Default: StoryObj = {}
export const Layer2: StoryObj = {
  args: {
    className: "__two",
  },
}
