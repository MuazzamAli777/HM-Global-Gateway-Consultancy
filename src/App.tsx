import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import SEO from "./components/SEO"
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import CountryDetail from "./pages/CountryDetail"
import Services from "./pages/Services"
import Scholarships from "./pages/Scholarships"
import Visa from "./pages/Visa"
import Universities from "./pages/Universities"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import Testimonials from "./pages/Testimonials"
import Admin from "./pages/Admin"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const isAdmin = pathname === "/admin"

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<CountryDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/universities" element={<Universities />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingButtons />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  )
}
