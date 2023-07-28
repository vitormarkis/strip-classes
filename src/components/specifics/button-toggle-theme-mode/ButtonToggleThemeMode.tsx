"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { MotionSwitchStatic } from "@/components/motion/switch-static/MotionSwitchStatic"
import { IconProps } from "@/types/icon-props"
import { tv, VariantProps } from "tailwind-variants"

const classStyles = tv({
  base: "hover:cursor-default relative transition-all duration-100",
  variants: {
    size: {
      regular: "w-9 h-9",
      big: "w-11 h-11",
      small: "w-7 h-7",
    },
    styleType: {
      default: "bg-background hover:bg-background-shadow border",
      outlined: "border hover:bg-background-shadow",
      hover: "hover:bg-background-shadow",
    },
    rounded: {
      large: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "regular",
    styleType: "hover",
    rounded: "full",
  },
})

export type ButtonToggleThemeModeProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof classStyles> & {
    icon: React.ElementType<IconProps>
    iconProps?: IconProps
  }

export const ButtonToggleThemeMode = React.forwardRef<
  React.ElementRef<"button">,
  ButtonToggleThemeModeProps
>(function ButtonToggleThemeModeComponent(
  { rounded, styleType, className, size, iconProps, icon, ...props },
  ref
) {
  const Icon = icon
  const [updateIcon, setUpdateIcon] = useState(false)

  const { name } = (icon as any).render

  useEffect(() => {
    setUpdateIcon(hasChanged => !hasChanged)
  }, [name])

  return (
    <button
      {...props}
      className={classStyles({ rounded, className, size, styleType })}
      ref={ref}
    >
      <AnimatePresence>
        {updateIcon && (
          <MotionSwitchStatic key={name}>
            <Icon {...iconProps} />
          </MotionSwitchStatic>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!updateIcon && (
          <MotionSwitchStatic key={name}>
            <Icon {...iconProps} />
          </MotionSwitchStatic>
        )}
      </AnimatePresence>
    </button>
  )
})
