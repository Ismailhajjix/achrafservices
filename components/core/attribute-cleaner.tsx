 "use client"

import { useEffect } from "react"

export function AttributeCleaner() {
  useEffect(() => {
    // Clean up server-side attributes
    const cleanup = () => {
      const body = document.querySelector('body')
      if (body) {
        const attrs = body.getAttributeNames()
        attrs.forEach(attr => {
          if (attr.startsWith('__processed_') || attr === 'cz-shortcut-listen') {
            body.removeAttribute(attr)
          }
        })
      }
    }

    // Run cleanup
    cleanup()

    // Add mutation observer to handle dynamically added attributes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          cleanup()
        }
      })
    })

    const body = document.querySelector('body')
    if (body) {
      observer.observe(body, {
        attributes: true
      })
    }

    return () => observer.disconnect()
  }, [])

  return null
}