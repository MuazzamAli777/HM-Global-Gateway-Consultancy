import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const logo = "/hm-global-logo.png"

const NAV_LINKS = [
  
  { label: "Home", path: "/" },
  { label: "Countries", path: "/countries" },
  { label: "Universities", path: "/universities" },
  { label: "Services", path: "/services" },
  { label: "Scholarships", path: "/scholarships" },
  { label: "Visa", path: "/visa" },
  // { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },

]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1F4D] shadow-2xl" : "bg-[#0B1F4D]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
  src={logo}
  alt="HM Global Gateway Consultancy"
  className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
/>
            <div>
              <div className="text-white font-bold text-sm leading-tight font-poppins">HM <span className="text-[#D4AF37]">GLOBAL</span><br /> Gateway</div>
              <div className="text-[#D4AF37] text-xs font-inter">Consultancy</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm ${location.pathname === link.path ? "active text-[#D4AF37]" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-gold px-5 py-2 rounded-full text-sm">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0B1F4D] border-t border-white/10 px-4 py-4 animate-fade">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 text-sm font-poppins font-medium border-b border-white/5 ${
                location.pathname === link.path ? "text-[#D4AF37]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold block text-center mt-4 px-5 py-3 rounded-full text-sm">
            Book Free Consultation
          </Link>
        </div>
      )}
    </nav>
  )
}
