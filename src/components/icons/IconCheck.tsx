import { cn } from "@/lib/utils"
import { cssVariables } from "@/utils/units/cssVariables"
import React from "react"

interface IconCheckProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

export default function IconCheck({ size = 18, style, className, ...props }: IconCheckProps) {
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
        points="40 144 96 200 224 72"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
