import React, { CSSProperties } from "react"
import { twMerge } from "tailwind-merge"

interface IconAtProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

export default function IconAt({ size = 18, style, className, ...props }: IconAtProps) {
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
      <circle
        cx={128}
        cy={128}
        r={40}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <path
        d="M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
