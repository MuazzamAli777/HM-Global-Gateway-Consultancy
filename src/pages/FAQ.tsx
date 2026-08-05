import { useState } from "react"
import { FAQS } from "../data/data"
import { Link } from "react-router-dom"

const CATEGORIES = ["All", "General", "Admissions", "Scholarships", "Visa", "Work", "Language", "Finance", "Accommodation"]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [cat, setCat] = useState("All")

  const filtered = cat === "All" ? FAQS : FAQS.filter((f) => f.category === cat)

  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Help Center</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Find answers to the most common questions about studying abroad with HM Global Gateway.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-poppins font-medium transition-all ${
                cat === c ? "bg-[#0B1F4D] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-poppins font-semibold text-[#0B1F4D] pr-4 text-sm">{faq.q}</span>
                <span className={`text-[#D4AF37] text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="section-title text-xl mb-3">Still have questions?</h3>
          <p className="text-gray-500 text-sm mb-6">Our counselors are ready to help. Book a free consultation or send us a message.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-gold px-6 py-3 rounded-full text-sm inline-block">Book Free Consultation</Link>
            <a href="https://wa.me/923420315743" className="btn-navy px-6 py-3 rounded-full text-sm inline-block">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
