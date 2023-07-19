"use client"
import { cssVariables } from "@/utils/units/cssVariables"
import React from "react"

export default function Test() {
  const res = cssVariables(
    [
      ["vitor", 3100],
      ["apple", 20],
      ["width", 3400, "px"],
      ["border", 200],
      ["bender", 200],
    ],
    {
      color: "#0f0",
      backgroundColor: "#00f",
    }
  )

  return (
    <div>
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </div>
  )
}
