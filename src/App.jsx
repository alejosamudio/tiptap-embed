import * as React from "react"

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"

export default function App() {
  React.useEffect(() => {
    if (typeof window === "undefined") return

    const getTarget = () =>
      document.querySelector(".simple-editor-wrapper") ??
      document.querySelector(".simple-editor-container") ??
      document.body

    const postHeight = () => {
      const target = getTarget()

      let height = 0

      if (target) {
        const rect = target.getBoundingClientRect()
        const styles = window.getComputedStyle(target)
        const marginTop = Number.parseFloat(styles?.marginTop ?? "0") || 0
        const marginBottom = Number.parseFloat(styles?.marginBottom ?? "0") || 0

        height = rect.height + marginTop + marginBottom
      }

      if (!height) {
        const doc = document.documentElement
        const body = document.body

        height = Math.max(
          body?.scrollHeight ?? 0,
          doc?.scrollHeight ?? 0,
          body?.offsetHeight ?? 0,
          doc?.offsetHeight ?? 0,
          doc?.clientHeight ?? 0,
        )
      }

      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          { type: "RESIZE_IFRAME", height: Math.ceil(height) },
          "*",
        )
      }
    }

    postHeight()

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(postHeight) : null

    const target = getTarget()

    if (resizeObserver && target) {
      resizeObserver.observe(target)
    }

    window.addEventListener("resize", postHeight)

    return () => {
      window.removeEventListener("resize", postHeight)
      resizeObserver?.disconnect()
    }
  }, [])

  return <SimpleEditor />
}
