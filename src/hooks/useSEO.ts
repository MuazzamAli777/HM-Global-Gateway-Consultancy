import { useEffect } from "react"
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME, type SEOMeta } from "../utils/seo"

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export default function useSEO(meta: SEOMeta) {
  useEffect(() => {
    const {
      title,
      description,
      canonical,
      ogImage = DEFAULT_OG_IMAGE,
      ogType = "website",
      keywords,
    } = meta

    // Title
    document.title = title

    // Primary meta
    setMeta("description", description)
    if (keywords) setMeta("keywords", keywords)

    // Canonical
    if (canonical) setLink("canonical", canonical)

    // Open Graph
    setMeta("og:title", title, "property")
    setMeta("og:description", description, "property")
    setMeta("og:url", canonical || `${BASE_URL}/`, "property")
    setMeta("og:type", ogType, "property")
    setMeta("og:image", ogImage, "property")
    setMeta("og:site_name", SITE_NAME, "property")

    // Twitter / X
    setMeta("twitter:card", "summary_large_image")
    setMeta("twitter:title", title)
    setMeta("twitter:description", description)
    setMeta("twitter:image", ogImage)
  }, [meta.title, meta.description, meta.canonical, meta.ogImage, meta.ogType, meta.keywords])
}
