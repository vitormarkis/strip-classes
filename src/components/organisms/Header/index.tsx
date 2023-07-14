import { CenteredContainer } from "@/components/atoms"
import { ButtonToggleThemeMode } from "@/components/specifics/ButtonToggleThemeMode"
import { cn } from "@/lib/utils"
import React from "react"

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(function HeaderComponent(
  { ...props },
  ref
) {
  return (
    <header
      {...props}
      className={cn("border-b", props.className)}
      ref={ref}
    >
      <CenteredContainer className="py-4 flex items-center">
        <ButtonToggleThemeMode />
      </CenteredContainer>
    </header>
  )
})
