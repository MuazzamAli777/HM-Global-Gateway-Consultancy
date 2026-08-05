import { Link } from "react-router-dom"
import { SERVICES } from "../data/data"

const DETAILED_SERVICES = [
  {
    icon: "🎓", title: "Study Abroad Consultation",
    desc: "Our certified counselors analyze your academic profile, financial situation, and career goals to recommend the ideal country and university combination. We consider CGPA, language scores, budget, and career aspirations.",
    steps: ["Initial profile assessment", "Country & university recommendations", "Program shortlisting", "Feasibility discussion"],
  },
  {
    icon: "📋", title: "Admissions Guidance",
    desc: "We handle the entire application process from start to finish. Our team has processed 500+ successful applications to universities across 6 countries.",
    steps: ["University shortlisting based on profile", "Document checklist preparation", "Application form completion", "Submission and follow-up"],
  },
  {
    icon: "💰", title: "Scholarship Guidance",
    desc: "We actively search for and apply to scholarships on your behalf. Our scholarship team has secured funding worth millions for our students.",
    steps: ["Scholarship eligibility check", "Application preparation", "Essay and SOP for scholarships", "Submission and tracking"],
  },
  {
    icon: "🛂", title: "Visa Assistance",
    desc: "Our visa team has maintained a 95%+ success rate across all destination countries. We prepare your complete visa file and prepare you for interviews.",
    steps: ["Document preparation checklist", "Financial guidance", "Mock visa interview", "Embassy appointment & submission"],
  },
  {
    icon: "✈️", title: "Travel Support",
    desc: "We stay with you even after your visa is approved. Our travel support team ensures you arrive safely and settle comfortably in your new country.",
    steps: ["Flight booking guidance", "Accommodation assistance", "Airport pickup coordination", "Pre-departure briefing session"],
  },
  {
    icon: "📝", title: "SOP & LOR Guidance",
    desc: "Your Statement of Purpose is your voice to the university. Our writing experts help craft compelling narratives that highlight your strengths.",
    steps: ["Personal brainstorming session", "First draft development", "Professional editing & review", "Final proofreading"],
  },
]

export default function Services() {
  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">What We Do</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Our Services</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Comprehensive study abroad support from day one to graduation day and beyond.</p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl card-hover border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-[#0B1F4D]/5 flex items-center justify-center text-3xl mb-4">{svc.icon}</div>
              <h3 className="font-poppins font-bold text-[#0B1F4D] text-lg mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed */}
        <h2 className="section-title text-3xl text-center mb-12">How We Help You</h2>
        <div className="space-y-8">
          {DETAILED_SERVICES.map((svc, i) => (
            <div key={svc.title} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
              <div className="md:w-1/2">
                <div className="w-20 h-20 rounded-3xl bg-[#D4AF37]/10 flex items-center justify-center text-4xl mb-4">{svc.icon}</div>
                <h3 className="section-title text-2xl mb-3">{svc.title}</h3>
                <p className="text-gray-600 mb-5">{svc.desc}</p>
                <Link to="/contact" className="btn-gold px-6 py-3 rounded-full text-sm inline-block">Get Started</Link>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-poppins font-semibold text-[#0B1F4D] mb-4">Our Process</h4>
                  <div className="space-y-3">
                    {svc.steps.map((step, j) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-[#0B1F4D] font-bold text-xs flex items-center justify-center shrink-0">{j + 1}</div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-8">Book your free consultation today and take the first step toward your international education dream.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-block">Book Free Consultation</Link>
            <a href="https://wa.me/923420315743" className="btn-navy px-8 py-4 rounded-full text-base inline-block">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
