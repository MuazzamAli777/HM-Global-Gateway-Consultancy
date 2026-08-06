import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { COUNTRIES, SERVICES, WHY_CHOOSE, TESTIMONIALS } from "../data/data"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&h=1000&fit=crop&auto=format')" }}
        />
        <div className="hero-gradient absolute inset-0" />

        {/* Floating elements */}
        <div className="absolute top-32 right-10 lg:right-24 animate-float">
          <div className="glass rounded-2xl p-4 text-white shadow-2xl">
            <div className="text-2xl mb-1">🎓</div>
            <div className="text-xs font-poppins font-semibold">95% Visa Success</div>
            <div className="text-[10px] text-white/70">Across all destinations</div>
          </div>
        </div>
        <div className="absolute bottom-40 right-16 lg:right-40 animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="glass rounded-2xl p-4 text-white shadow-2xl">
            <div className="text-2xl mb-1">🌍</div>
            <div className="text-xs font-poppins font-semibold">5 Countries</div>
            <div className="text-[10px] text-white/70">Partner destinations</div>
          </div>
        </div>
        <div className="absolute top-60 left-8 lg:left-16 animate-float" style={{ animationDelay: "0.8s" }}>
          <div className="glass rounded-2xl p-4 text-white shadow-2xl">
            <div className="text-2xl mb-1">🏛️</div>
            <div className="text-xs font-poppins font-semibold">50+ Universities</div>
            <div className="text-[10px] text-white/70">Experties in institutions</div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full px-4 py-1.5 mb-6 text-sm text-[#D4AF37] font-poppins font-medium">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Your Dream. Our Guidance. Global Future.
            </div>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up">
              Study Abroad with{" "}
              <span className="text-[#D4AF37]">Confidence</span>
            </h1>
            <p className="text-lg text-white/85 mb-10 leading-relaxed font-inter animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Expert Guidance for Admissions, Scholarships, Visa Processing and Travel Support.
              Turn your international education dream into reality.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-block">
                Book Free Consultation
              </Link>
              <Link to="/universities" className="px-8 py-4 rounded-full text-base border-2 border-white text-white hover:bg-white hover:text-[#0B1F4D] transition-all font-poppins font-semibold inline-block">
                Explore Universities
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-full text-base border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1F4D] transition-all font-poppins font-semibold inline-block">
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[["20+", "Students Placed"], ["95%", "Visa Success"], ["50+", "Universities"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold font-poppins text-[#D4AF37]">{num}</div>
                  <div className="text-xs text-white/70 font-inter">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnimSection className="text-center mb-12">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-2">Destinations</div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">Study in Your Dream Country</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Choose from 5 premier study destinations, each offering unique opportunities for your academic journey.</p>
        </AnimSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRIES.map((country, i) => (
            <AnimSection key={country.id}>
              <Link to={`/countries/${country.id}`} className="country-card block h-64 shadow-lg">
                <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D]/90 via-[#0B1F4D]/40 to-transparent" />
                <div className="country-overlay absolute inset-0 bg-[#D4AF37]/20" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-3xl text-emerald-50 mb-1">{country.flag}</div>
                  <h3 className="text-white font-poppins font-bold text-xl">{country.name}</h3>
                  <p className="text-white/75 text-xs font-inter">{country.tagline}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[#D4AF37] text-xs font-poppins font-semibold">
                    Explore <span>→</span>
                  </div>
                </div>
              </Link>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimSection className="text-center mb-12">
            <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</div>
            <h2 className="section-title text-3xl sm:text-4xl mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive support from the first consultation to your first day on campus abroad.</p>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <AnimSection key={svc.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl card-hover border border-gray-100 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1F4D]/5 flex items-center justify-center text-2xl mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-[#0B1F4D] text-lg mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection className="text-center mt-10">
            <Link to="/services" className="btn-navy px-8 py-3 rounded-full text-sm inline-block">
              View All Services
            </Link>
          </AnimSection>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnimSection className="text-center mb-12">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-2">How It Works</div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">Admission Process</h2>
        </AnimSection>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[#D4AF37]/30" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              ["1", "Profile Evaluation", "📋"], ["2", "Choose University", "🏛️"], ["3", "Prepare Documents", "📁"], ["4", "Submit Application", "📤"],
              ["5", "Receive Offer", "📩"], ["6", "Visa Application", "🛂"], ["7", "Travel", "✈️"], ["8", "Study Abroad", "🎓"],
            ].map(([num, step, icon]) => (
              <AnimSection key={num} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#0B1F4D] text-white flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg">
                    {icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#D4AF37] text-[#0B1F4D] font-bold text-xs flex items-center justify-center font-poppins">
                    {num}
                  </div>
                </div>
                <p className="text-xs font-poppins font-semibold text-[#0B1F4D] text-center">{step}</p>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 navy-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimSection className="text-center mb-12">
            <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-2">Why HM Global Gateway</div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">Why Choose Us?</h2>
            <p className="text-white/70 max-w-xl mx-auto">We are not just consultants — we are your partners in building a global future.</p>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHY_CHOOSE.map((item) => (
              <AnimSection key={item.title}>
                <div className="glass rounded-2xl p-5 hover:bg-white/20 transition-all h-full card-hover">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-poppins font-semibold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-white/65 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* SOUTH KOREA FEATURED */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <AnimSection className="text-center mb-12">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-2">Featured Destination</div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">🇰🇷 Study in South Korea</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">South Korea is Asia's education powerhouse with world-class universities, government scholarships, and a vibrant student life. Our top partner destination.</p>
        </AnimSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(COUNTRIES[0].universities || []).slice(0, 4).map((uni) => (
            <AnimSection key={uni.name}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl card-hover border border-gray-100">
                <div className="h-40 bg-gray-100 overflow-hidden">
                  <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-poppins font-semibold px-2 py-0.5 rounded-full mb-2">
                    {uni.ranking}
                  </div>
                  <h3 className="font-poppins font-bold text-[#0B1F4D] text-sm mb-1">{uni.name}</h3>
                  <p className="text-gray-400 text-xs mb-1">📍 {uni.location}</p>
                  <p className="text-gray-500 text-xs mb-4">{uni.programs}</p>
                  <Link to="/countries/south-korea" className="btn-gold w-full py-2 rounded-lg text-xs text-center block">
                    Apply Now
                  </Link>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection className="text-center mt-8">
          <Link to="/countries/south-korea" className="btn-navy px-8 py-3 rounded-full text-sm inline-block">
            View All Korean Universities
          </Link>
        </AnimSection>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimSection className="text-center mb-12">
            <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-2">Student Success</div>
            <h2 className="section-title text-3xl sm:text-4xl mb-4">What Our Students Say</h2>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <AnimSection key={t.name}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg card-hover border border-gray-100 h-full">
                  <div className="flex text-[#D4AF37] text-sm mb-4">{"★".repeat(t.rating)}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover bg-gray-200" />
                    <div>
                      <div className="font-poppins font-semibold text-[#0B1F4D] text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.country} · {t.university}</div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection className="text-center mt-10">
            <Link to="/testimonials" className="btn-navy px-8 py-3 rounded-full text-sm inline-block">
              Read All Success Stories
            </Link>
          </AnimSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1627556704353-016baeb12c79?w=1800&h=600&fit=crop&auto=format')" }}
        />
        <div className="absolute inset-0 bg-[#0B1F4D]/85" />
        <AnimSection className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Book a free consultation today. Our expert counselors are ready to guide you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-block">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/923420315743" className="px-8 py-4 rounded-full text-base border-2 border-white text-white hover:bg-white hover:text-[#0B1F4D] transition-all font-poppins font-semibold inline-block">
              WhatsApp Us
            </a>
          </div>
        </AnimSection>
      </section>
    </div>
  )
}
