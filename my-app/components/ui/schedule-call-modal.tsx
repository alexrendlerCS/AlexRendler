"use client"

import { useEffect } from "react"

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

      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 mx-4 max-w-md w-full bg-popover text-popover-foreground rounded-2xl shadow-xl p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Schedule a Call</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Please send a text to <a href="tel:+17606539999" className="text-brand-blue">(760) 653-9999</a> with your
              name and a short description of the project you&apos;d like to embark on. We&apos;ll reply to set up a convenient time
              to call and discuss details.
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

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-blue text-white rounded-md hover:opacity-90 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
