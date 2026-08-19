import { useEffect } from "react"

interface JsonLdProps {
  schema: Record<string, unknown>
  id?: string
}

export default function JsonLd({ schema, id = "json-ld" }: JsonLdProps) {
  useEffect(() => {
    let el = document.getElementById(id) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement("script")
      el.id = id
      el.type = "application/ld+json"
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)

    return () => {
      // On unmount, remove this specific script so stale schemas don't persist
      const toRemove = document.getElementById(id)
      if (toRemove) toRemove.remove()
    }
  }, [schema, id])

  return null
}
