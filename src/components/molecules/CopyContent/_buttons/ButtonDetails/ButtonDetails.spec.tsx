import { CopyContent } from "@/components/molecules/CopyContent"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Test suite for Button Details component", () => {
  it("should not render outside it's Root provider", () => {
    const element = () => {
      render(<CopyContent.ButtonDetails />)
    }

    expect(element).toThrow()
  })

  it("should render properly", () => {
    render(
      <CopyContent.Root
        name="Test"
        classes="flex hover:bg-background-shadow"
      >
        <CopyContent.ButtonWrapper>
          <CopyContent.ButtonDetails />
        </CopyContent.ButtonWrapper>
      </CopyContent.Root>
    )

    const buttons = screen.getAllByRole("button")
    const [button] = buttons

    expect(buttons.length).toBe(1)
    expect(button).toBeTruthy()
  })

  it("should throw an error when no context is provided", () => {
    const renderComponent = () => {
      render(
        <CopyContent.Root classes="flex hover:bg-background-shadow">
          <CopyContent.ButtonWrapper>
            <CopyContent.ButtonDetails />
          </CopyContent.ButtonWrapper>
        </CopyContent.Root>
      )
    }

    expect(renderComponent).toThrow(
      'Algum componente está usando "name", mas "name" não foi provido, passe a propriedade "name" no componente Root.'
    )
  })

  it("should open a modal when clicked", () => {
    render(
      <CopyContent.Root
        name="Jest"
        classes="flex hover:bg-background-shadow"
      >
        <CopyContent.ButtonWrapper>
          <CopyContent.ButtonDetails data-testid="btn_open_modal" />
        </CopyContent.ButtonWrapper>
      </CopyContent.Root>
    )

    const button = screen.getByTestId("btn_open_modal")
    const modalBeforeClick = screen.queryByRole("dialog")

    expect(button).toBeInTheDocument()
    expect(modalBeforeClick).not.toBeTruthy()

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    )

    const modalAfterClick = screen.queryByRole("dialog")
    expect(modalAfterClick).toBeInTheDocument()
  })
})
