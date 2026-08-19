import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { COUNTRIES, FAQS } from "../data/data"

type JsonLd = Record<string, unknown>

type PageMetadata = {
  title: string
  description: string
  keywords: string
  type?: "website" | "article"
  noindex?: boolean
  image?: string
  schema?: JsonLd[]
}

const SITE_URL = "https://hm-global-gateway-consultancy.vercel.app"
const SITE_NAME = "HM Global Gateway Consultancy"
const DEFAULT_IMAGE = `${SITE_URL}/hm-global-logo.png`

const baseKeywords = "study abroad consultancy Pakistan, study abroad consultant Pakistan, student visa consultant Pakistan"

const pageMetadata: Record<string, PageMetadata> = {
  "/": {
    title: "Study Abroad Consultancy in Pakistan | HM Global Gateway",
    description: "HM Global Gateway Consultancy helps students from Pakistan apply to universities in South Korea, Germany, the UK, Italy, Cyprus and Austria with admissions, scholarships and visa guidance.",
    keywords: `${baseKeywords}, international education consultant, overseas education consultant`,
  },
  "/countries": {
    title: "Study Abroad Destinations for Pakistani Students | HM Global Gateway",
    description: "Explore study destinations for Pakistani students, including South Korea, Germany, the UK, Italy and Cyprus. Compare tuition, scholarships, universities and visa options.",
    keywords: `${baseKeywords}, study abroad destinations, study in South Korea from Pakistan, study in Germany from Pakistan`,
  },
  "/services": {
    title: "Study Abroad and Student Visa Services in Pakistan | HM Global Gateway",
    description: "Get personalized university selection, admissions, scholarship, SOP, document and student visa assistance for studying abroad from Pakistan.",
    keywords: `${baseKeywords}, university admission assistance, scholarship guidance Pakistan, student visa assistance`,
  },
  "/scholarships": {
    title: "Study Abroad Scholarships for Pakistani Students | HM Global Gateway",
    description: "Find scholarship guidance for Pakistani students planning to study abroad, including government, university, merit-based and need-based funding options.",
    keywords: `${baseKeywords}, scholarships for Pakistani students, study abroad scholarships`,
  },
  "/visa": {
    title: "Student Visa Assistance in Pakistan | HM Global Gateway",
    description: "Prepare your student visa application with document guidance, financial planning, interview preparation and application support for leading study destinations.",
    keywords: `${baseKeywords}, student visa assistance Pakistan, study visa consultant`,
  },
  "/universities": {
    title: "Partner Universities for Pakistani Students | HM Global Gateway",
    description: "Browse universities and programs available to Pakistani students through HM Global Gateway Consultancy, with guidance for applications and admissions.",
    keywords: `${baseKeywords}, universities abroad for Pakistani students, international university admissions`,
  },
  "/about": {
    title: "About HM Global Gateway Consultancy | Pakistan",
    description: "Learn how HM Global Gateway Consultancy supports Pakistani students with transparent guidance for international university admissions and student visas.",
    keywords: `${baseKeywords}, HM Global Gateway Consultancy, education consultants in Pakistan`,
  },
  "/contact": {
    title: "Contact a Study Abroad Consultant in Pakistan | HM Global Gateway",
    description: "Contact HM Global Gateway Consultancy in Narowal, Punjab, Pakistan for study abroad admissions, scholarships and student visa guidance.",
    keywords: `${baseKeywords}, contact study abroad consultant, education consultant Narowal`,
  },
  "/faq": {
    title: "Study Abroad and Student Visa FAQs | HM Global Gateway",
    description: "Get answers about university applications, documents, scholarships, IELTS, student visas, part-time work and accommodation for studying abroad.",
    keywords: `${baseKeywords}, study abroad FAQs, student visa questions`,
  },
  "/testimonials": {
    title: "Student Success Stories | HM Global Gateway Consultancy",
    description: "Read student experiences with HM Global Gateway Consultancy for university admissions, scholarships and student visa applications abroad.",
    keywords: `${baseKeywords}, study abroad success stories, student visa reviews Pakistan`,
  },
  "/admin": {
    title: "Admin | HM Global Gateway Consultancy",
    description: "Administrative dashboard for HM Global Gateway Consultancy.",
    keywords: "",
    noindex: true,
  },
}

function getCountryMetadata(pathname: string): PageMetadata | undefined {
  const countryId = pathname.match(/^\/countries\/([^/]+)\/?$/)?.[1]
  if (!countryId) return undefined

  const country = COUNTRIES.find((item) => item.id === countryId)
  if (!country) {
    return {
      title: "Country Not Found | HM Global Gateway Consultancy",
      description: "The requested study abroad destination could not be found.",
      keywords: baseKeywords,
      noindex: true,
    }
  }

  return {
    title: `Study in ${country.name} from Pakistan | HM Global Gateway`,
    description: `Plan to study in ${country.name} from Pakistan with guidance on universities, scholarships, admissions, tuition, living costs and student visa requirements.`,
    keywords: `${baseKeywords}, study in ${country.name} from Pakistan, ${country.name} student visa, ${country.name} universities`,
    schema: [
      {
        "@type": "EducationalOrganization",
        name: `${SITE_NAME} - Study in ${country.name}`,
        url: `${SITE_URL}${pathname}`,
        description: country.description,
        areaServed: "Pakistan",
      },
    ],
  }
}

function getMetadata(pathname: string): PageMetadata {
  return getCountryMetadata(pathname) ?? pageMetadata[pathname] ?? {
    title: `${SITE_NAME} | Study Abroad Consultancy in Pakistan`,
    description: "Study abroad admissions, scholarship and student visa guidance for Pakistani students.",
    keywords: baseKeywords,
    noindex: true,
  }
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement("link")
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

function upsertSchema(schema: JsonLd[]) {
  document.querySelectorAll('script[data-seo-schema="true"]').forEach((element) => element.remove())
  schema.forEach((item) => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.dataset.seoSchema = "true"
    script.textContent = JSON.stringify(item)
    document.head.appendChild(script)
  })
}

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getMetadata(pathname)
    const normalizedPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}/`
    const canonicalUrl = `${SITE_URL}${normalizedPath}`
    const image = metadata.image ?? DEFAULT_IMAGE

    document.title = metadata.title
    upsertMeta("name", "description", metadata.description)
    upsertMeta("name", "keywords", metadata.keywords)
    upsertMeta("name", "robots", metadata.noindex ? "noindex, nofollow" : "index, follow")
    upsertMeta("property", "og:title", metadata.title)
    upsertMeta("property", "og:description", metadata.description)
    upsertMeta("property", "og:type", metadata.type ?? "website")
    upsertMeta("property", "og:url", canonicalUrl)
    upsertMeta("property", "og:image", image)
    upsertMeta("property", "og:site_name", SITE_NAME)
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", metadata.title)
    upsertMeta("name", "twitter:description", metadata.description)
    upsertMeta("name", "twitter:image", image)
    upsertLink("canonical", canonicalUrl)

    const organization: JsonLd = {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      description: "Study abroad admissions, scholarship and student visa consultancy for students in Pakistan.",
      areaServed: ["Pakistan", "South Korea", "Germany", "United Kingdom", "Italy", "Cyprus", "Austria"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-342-0315743",
        email: "info@hmglobalgateway.com",
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: "en",
      },
    }
    const localBusiness: JsonLd = {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
      image: DEFAULT_IMAGE,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      telephone: "+92-342-0315743",
      email: "info@hmglobalgateway.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Narowal",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      priceRange: "$$",
    }
    const schemas: JsonLd[] = [organization, localBusiness]

    if (pathname === "/") {
      schemas.push({
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      })
    }

    if (pathname === "/faq") {
      schemas.push({
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      })
    }

    if (!metadata.noindex) {
      schemas.push({
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          ...(pathname.startsWith("/countries/")
            ? [
                { "@type": "ListItem", position: 2, name: "Countries", item: `${SITE_URL}/countries/` },
                { "@type": "ListItem", position: 3, name: metadata.title.replace(" | HM Global Gateway", ""), item: canonicalUrl },
              ]
            : pathname !== "/"
              ? [{ "@type": "ListItem", position: 2, name: metadata.title.replace(" | HM Global Gateway", ""), item: canonicalUrl }]
              : []),
        ],
      })
    }

    schemas.push(...(metadata.schema ?? []))
    upsertSchema(schemas)
  }, [pathname])

  return null
}
