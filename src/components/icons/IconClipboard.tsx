import { cn } from "@/lib/utils"
import { cssVariables } from "@/utils/units/cssVariables"
import React from "react"

interface IconClipboardProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

export default function IconClipboard({
  size = 18,
  style,
  className,
  ...props
}: IconClipboardProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("h-[var(--iconSize)] w-[var(--iconSize)]", className)}
      style={cssVariables(["iconSize", size, "px"], style)}
      {...props}
    >
      <rect
        width={256}
        height={256}
        fill="none"
      />
      <polyline
        points="168 168 216 168 216 40 88 40 88 88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <rect
        x={40}
        y={88}
        width={128}
        height={128}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
