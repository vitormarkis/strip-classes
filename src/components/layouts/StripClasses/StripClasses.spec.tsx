import StripClassesPage from "@/components/layouts/StripClasses"
import { render, screen } from "@testing-library/react"

describe("Test suite for StripClasses component", () => {
  it("should render properly", () => {
    render(<StripClassesPage />)

    const stringBase = screen.getByText(/string base/)
    const stringSecondary = screen.getByText(/string secundária/)
    const inCommom = screen.getByText(/em comum/)

    expect(stringBase).toBeInTheDocument()
    expect(stringSecondary).toBeInTheDocument()
    expect(inCommom).toBeInTheDocument()
  })

  it("should render base classes input and secondary classes input", () => {
    render(<StripClassesPage />)

    const allInputs = screen.getAllByRole("textbox")
    expect(allInputs.length).toBe(2)
  })
})
