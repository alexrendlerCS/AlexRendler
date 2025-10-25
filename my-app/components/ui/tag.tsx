"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

export default function Tag({ children, className, ...props }: TagProps) {
  const base =
    "px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-foreground hover:border-white/50 hover:bg-white/15 transition-all dark:text-white"

  return (
    <span {...props} className={cn(base, className)}>
      {children}
    </span>
  )
}
