"use client"

import { useEffect } from "react"
import Image from "next/image"

type Props = {
  open: boolean
  onClose: () => void
}

export default function ScheduleCallModal({ open, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* light/dark glow placed behind the modal so it doesn't tint modal content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="relative w-full max-w-md">
          {/* primary blue glow for light mode (visible only in light) */}
          <div className="hidden dark:block absolute -inset-6 rounded-2xl bg-[rgba(255,255,255,0.08)] blur-3xl" />
          <div className="block dark:hidden absolute -inset-6 rounded-2xl bg-[rgba(10,146,248,0.22)] blur-3xl" />
          <div className="block dark:hidden absolute -inset-12 rounded-2xl bg-[rgba(10,146,248,0.14)] blur-4xl" />
        </div>
      </div>

      <div
        role="dialog"
        aria-modal="true"
        className={
          "relative z-10 mx-4 max-w-md w-full bg-popover text-popover-foreground rounded-2xl p-6 pb-20 shadow-xl border-2 border-transparent " +
          // keep a subtle base ring so outline persists
          "ring-4 ring-brand-blue/40 " +
          // dark: white glow ring and stronger white shadow
          "dark:ring-white/20 dark:shadow-[0_0_40px_rgba(255,255,255,0.18)]"
        }
      >
        {/* (moved glow to sibling element so modal background stays solid) */}
        {/* decorative background logo behind modal content */}
        <div className="absolute bottom-4 right-4 w-24 h-24 opacity-10 dark:opacity-20 pointer-events-none z-0">
          <Image src="/Logos/Logo-Header.png" alt="Rendlr logo" fill className="object-contain" />
        </div>

  <div className="flex items-start justify-between gap-4 relative z-10">
          <div>
            <h3 className="text-xl font-semibold">Schedule a Call</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Please text or call <a href="tel:+17606539999" className="text-brand-blue">(760) 653-9999</a>, or email
              <a href="mailto:alexrendler@yahoo.com" className="text-brand-blue"> alexrendler@yahoo.com</a> with your name
              and a short description of the project you&apos;d like to discuss. We&apos;ll reply to set up a convenient time
              to talk.
            </p>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-md p-2 hover:bg-muted/50 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="absolute bottom-6 left-6 z-10">
          <button
            onClick={onClose}
            className="px-6 py-2 w-full sm:w-auto sm:min-w-[18rem] bg-brand-blue text-white rounded-md hover:opacity-90 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
