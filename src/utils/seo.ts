export const BASE_URL = "https://mh-global-gateway-consultancy.vercel.app"

export const DEFAULT_OG_IMAGE = `${BASE_URL}/mh-global-logo.png`

export const SITE_NAME = "MH Gateway Consultancy"

export interface SEOMeta {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  keywords?: string
}

export const PAGE_SEO: Record<string, SEOMeta> = {
  home: {
    title: "MH Gateway Consultancy | #1 Study Abroad Consultancy in Pakistan",
    description:
      "MH Gateway Consultancy — Pakistan's trusted study abroad experts. Get expert admission guidance, scholarships, and visa assistance for South Korea, Germany, UK, Italy, and Cyprus.",
    canonical: `${BASE_URL}/`,
    ogType: "website",
    keywords:
      "study abroad consultancy Pakistan, study abroad consultant Pakistan, student visa Pakistan, study in South Korea from Pakistan, study in Germany from Pakistan, study in UK from Pakistan, MH Gateway Consultancy",
  },
  countries: {
    title: "Study Abroad Destinations | South Korea, Germany, UK, Italy, Cyprus | MH Gateway Consultancy",
    description:
      "Explore 5 premier study abroad destinations for Pakistani students — South Korea, Germany, UK, Italy, and Cyprus. Compare tuition, scholarships, and visa requirements.",
    canonical: `${BASE_URL}/countries`,
    keywords:
      "study abroad destinations Pakistan, study in South Korea, study in Germany, study in UK, study in Italy, study in Cyprus",
  },
  services: {
    title: "Study Abroad Services in Pakistan | Admissions, Visa & Scholarships | MH Gateway Consultancy",
    description:
      "Comprehensive study abroad services: university admissions, scholarship applications, student visa assistance, SOP writing, travel support, and career counseling for Pakistani students.",
    canonical: `${BASE_URL}/services`,
    keywords:
      "study abroad services Pakistan, university admissions Pakistan, student visa assistance Pakistan, scholarship guidance Pakistan",
  },
  scholarships: {
    title: "Scholarships for Pakistani Students Abroad | GKS, DAAD, Chevening | MH Gateway Consultancy",
    description:
      "Discover fully funded and partial scholarships for Pakistani students — GKS (South Korea), DAAD (Germany), Chevening (UK), and university merit awards. Check your eligibility today.",
    canonical: `${BASE_URL}/scholarships`,
    keywords:
      "scholarships for Pakistani students, GKS scholarship Pakistan, DAAD scholarship Pakistan, Chevening scholarship Pakistan, study abroad scholarships",
  },
  visa: {
    title: "Student Visa Assistance Pakistan | 95% Success Rate | MH Gateway Consultancy",
    description:
      "Expert student visa processing for South Korea, Germany, UK, Italy, and Cyprus. 95% visa success rate. Complete documentation support, mock interviews, and embassy submission.",
    canonical: `${BASE_URL}/visa`,
    keywords:
      "student visa assistance Pakistan, South Korea student visa Pakistan, Germany student visa Pakistan, UK student visa Pakistan, visa consultant Pakistan",
  },
  universities: {
    title: "Partner Universities Abroad | 50+ Universities | MH Gateway Consultancy Pakistan",
    description:
      "Browse 50+ partner universities in South Korea, Germany, UK, Italy, and Cyprus. Find top-ranked institutions offering programs for Pakistani students with scholarships.",
    canonical: `${BASE_URL}/universities`,
    keywords:
      "universities in South Korea for Pakistani students, universities in Germany for Pakistani students, partner universities abroad",
  },
  about: {
    title: "About MH Gateway Consultancy | Study Abroad Consultancy in Narowal, Punjab, Pakistan",
    description:
      "MH Gateway Consultancy — founded in Narowal, Punjab. 95%+ visa success rate, 500+ students placed in South Korea, Germany, UK, Italy, and Cyprus. Meet our expert team.",
    canonical: `${BASE_URL}/about`,
    keywords:
      "MH Gateway Consultancy, study abroad consultancy Narowal, study abroad consultancy Punjab Pakistan",
  },
  contact: {
    title: "Book Free Consultation | Contact MH Gateway Consultancy Pakistan",
    description:
      "Contact MH Gateway Consultancy for a free study abroad consultation. Call, WhatsApp, or email us. Office in Narowal, Punjab, Pakistan. We respond within 24 hours.",
    canonical: `${BASE_URL}/contact`,
    keywords: "study abroad consultation Pakistan, free consultation study abroad, contact MH Gateway Consultancy",
  },
  faq: {
    title: "Study Abroad FAQs | MH Gateway Consultancy Pakistan",
    description:
      "Answers to common questions about studying abroad from Pakistan — admissions, scholarships, student visa, IELTS requirements, part-time work, and more.",
    canonical: `${BASE_URL}/faq`,
    keywords:
      "study abroad FAQ Pakistan, study abroad questions Pakistan, student visa FAQ, scholarship FAQ Pakistan",
  },
  testimonials: {
    title: "Student Success Stories | Pakistani Students Studying Abroad | MH Gateway Consultancy",
    description:
      "Read real success stories from Pakistani students who studied in South Korea, Germany, UK, Italy, and Cyprus with MH Gateway Consultancy. 95% visa success rate.",
    canonical: `${BASE_URL}/testimonials`,
    keywords:
      "study abroad success stories Pakistan, MH Gateway Consultancy reviews, Pakistani students abroad testimonials",
  },
}

// Per-country SEO data
export const COUNTRY_SEO: Record<string, SEOMeta> = {
  "south-korea": {
    title: "Study in South Korea from Pakistan | GKS Scholarship & D-2 Visa | MH Gateway Consultancy",
    description:
      "Study in South Korea from Pakistan with expert guidance on GKS (Global Korea Scholarship), D-2 student visa, and top Korean universities like Keimyung, Seoul National, and Yonsei.",
    canonical: `${BASE_URL}/countries/south-korea`,
    keywords:
      "study in South Korea from Pakistan, GKS scholarship Pakistan, South Korea student visa Pakistan, Korean universities for Pakistani students, D-2 visa Pakistan",
  },
  germany: {
    title: "Study in Germany from Pakistan | Free Education & DAAD Scholarship | MH Gateway Consultancy",
    description:
      "Study in Germany from Pakistan at tuition-free public universities. Expert guidance on DAAD scholarship, German student visa, and top universities like TU Munich and RWTH Aachen.",
    canonical: `${BASE_URL}/countries/germany`,
    keywords:
      "study in Germany from Pakistan, DAAD scholarship Pakistan, Germany student visa Pakistan, tuition free universities Germany Pakistan, TU Munich Pakistan",
  },
  uk: {
    title: "Study in UK from Pakistan | Chevening Scholarship & Student Visa | MH Gateway Consultancy",
    description:
      "Study in the UK from Pakistan with Chevening and GREAT scholarships. Expert guidance on UK Tier 4 student visa and top universities like Manchester, Birmingham, and Glasgow.",
    canonical: `${BASE_URL}/countries/uk`,
    keywords:
      "study in UK from Pakistan, Chevening scholarship Pakistan, UK student visa Pakistan, UK universities for Pakistani students, study in England from Pakistan",
  },
  italy: {
    title: "Study in Italy from Pakistan | Affordable Education & DSU Scholarship | MH Gateway Consultancy",
    description:
      "Study in Italy from Pakistan at world-renowned universities from as low as €900/year. Expert guidance on Italian student visa, DSU scholarships, and universities like Bologna and Politecnico di Milano.",
    canonical: `${BASE_URL}/countries/italy`,
    keywords:
      "study in Italy from Pakistan, Italy student visa Pakistan, Italian universities for Pakistani students, study in Rome Pakistan, affordable study abroad Pakistan",
  },
  cyprus: {
    title: "Study in Cyprus from Pakistan | EU Degree & English Programs | MH Gateway Consultancy",
    description:
      "Study in Cyprus from Pakistan and earn a European-recognized degree. English-taught programs, Mediterranean lifestyle, and direct guidance on Cyprus student visa and scholarships.",
    canonical: `${BASE_URL}/countries/cyprus`,
    keywords:
      "study in Cyprus from Pakistan, Cyprus student visa Pakistan, European university Cyprus Pakistan, English programs Cyprus, study in Europe from Pakistan",
  },
  austria: {
    title: "Study in Austria from Pakistan | OeAD Scholarship | MH Gateway Consultancy",
    description:
      "Study in Austria from Pakistan at prestigious universities like University of Vienna and TU Wien. Expert guidance on OeAD government scholarship and Austrian student visa.",
    canonical: `${BASE_URL}/countries/austria`,
    keywords:
      "study in Austria from Pakistan, OeAD scholarship Pakistan, Austrian universities Pakistan, University of Vienna Pakistan",
  },
}
