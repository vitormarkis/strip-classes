import React, { CSSProperties } from "react"
import { twMerge } from "tailwind-merge"

interface IconXProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

export default function IconX({ size = 18, style, className, ...props }: IconXProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={twMerge("h-[var(--iconSize)] w-[var(--iconSize)]", className)}
      style={
        {
          ...style,
          "--iconSize": `${size}px`,
        } as CSSProperties
      }
      {...props}
    >
      <rect
        width={256}
        height={256}
        fill="none"
      />
      <line
        x1={200}
        y1={56}
        x2={56}
        y2={200}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <line
        x1={200}
        y1={200}
        x2={56}
        y2={56}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
