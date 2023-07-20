import React, { useState } from "react"
import { Button } from "@/components/atoms/button/Button"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Test suite for Button component", () => {
  it("should render properly", () => {
    render(<Button>Click Here</Button>)

    expect(screen.getByText(/Click Here/)).toBeInTheDocument()
  })

  test("asChild prop should render as anchor tag", () => {
    render(
      <Button asChild>
        <a href="">Click Here</a>
      </Button>
    )

    expect(screen.getByRole("link")).toBeInTheDocument()
  })

  it("should render empty button when no children is provided", () => {
    // @ts-ignore
    render(<Button data-testid="testbutton"></Button>)

    const button = screen.getByTestId("testbutton")

    expect(button.textContent).toBe("")
  })

  it("should fire click event on the button", () => {
    render(<CounterButton />)

    const button = screen.getByRole("button")

    expect(screen.getByText("Counter 0"))
    fireEvent.click(button)

    expect(screen.getByText("Counter 1"))
  })
})

function CounterButton() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>Counter {counter}</p>
      <Button onClick={() => setCounter(prev => prev + 1)}>Increment</Button>
    </div>
  )
}
