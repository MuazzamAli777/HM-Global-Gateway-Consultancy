import { useState } from "react"
import { Link } from "react-router-dom"
import { COUNTRIES } from "../data/data"

export default function Visa() {
  const [selected, setSelected] = useState(COUNTRIES[0])

  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Visa Support</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Visa Assistance</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">95% visa success rate. We handle your complete visa process with expert documentation support.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Country Selector */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {COUNTRIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-poppins font-medium transition-all border-2 ${
                selected.id === c.id ? "bg-[#0B1F4D] text-white border-[#0B1F4D]" : "border-gray-200 text-gray-600 hover:border-[#0B1F4D]"
              }`}
            >
              {c.flag} {c.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {/* Visa Type */}
            <div className="bg-[#0B1F4D] text-white rounded-2xl p-6">
              <div className="text-sm text-white/60 mb-1">Visa Required for {selected.name}</div>
              <div className="font-poppins font-bold text-2xl text-[#D4AF37]">{selected.visaType}</div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-poppins font-bold text-[#0B1F4D] text-xl mb-4">📋 Required Documents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Valid Passport (6+ months validity)",
                  "University Admission Letter",
                  "Academic Transcripts & Certificates",
                  "English Language Test (IELTS/TOEFL)",
                  "Completed Visa Application Form",
                  "Bank Statement (Last 6 months)",
                  "Passport-size Photos (White background)",
                  "Birth Certificate",
                  "Visa Fee Receipt",
                  "Health Insurance",
                  "Accommodation Proof",
                  "Travel Itinerary",
                ].map((doc) => (
                  <div key={doc} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#D4AF37] mt-0.5 shrink-0">✓</span> {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Requirements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-poppins font-bold text-[#0B1F4D] text-xl mb-4">💳 Financial Requirements</h3>
              <p className="text-gray-600 text-sm mb-4">You must prove sufficient funds to cover tuition and living costs. Typically requires showing funds for the first year.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-gray-400 text-xs mb-1">Average Tuition</div>
                  <div className="font-poppins font-bold text-[#0B1F4D]">{selected.avgTuition}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-gray-400 text-xs mb-1">Living Cost</div>
                  <div className="font-poppins font-bold text-[#0B1F4D]">{selected.livingCost}</div>
                </div>
              </div>
            </div>

            {/* Visa Timeline */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-poppins font-bold text-[#0B1F4D] text-xl mb-4">⏱️ Visa Timeline</h3>
              <div className="space-y-4">
                {[
                  ["Week 1–2", "Document collection & verification", "bg-blue-500"],
                  ["Week 2–3", "Visa application preparation & review", "bg-[#D4AF37]"],
                  ["Week 3–4", "Embassy appointment & submission", "bg-[#0B1F4D]"],
                  ["Week 4–8", "Embassy processing & decision", "bg-green-500"],
                  ["Post-approval", "Collect visa & pre-departure briefing", "bg-purple-500"],
                ].map(([time, step, color]) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${color} shrink-0`} />
                    <div className="text-xs font-poppins font-semibold text-gray-400 w-24 shrink-0">{time}</div>
                    <div className="text-sm text-gray-700">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="font-poppins font-bold text-red-800 text-xl mb-4">⚠️ Common Visa Mistakes to Avoid</h3>
              <ul className="space-y-2">
                {[
                  "Incomplete or inconsistent bank statements",
                  "Missing signatures on application forms",
                  "Not having sufficient funds or wrong currency",
                  "Providing unverified or incorrect documents",
                  "Applying too late (less than 6 weeks before intake)",
                  "No clear explanation of study intentions in cover letter",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-2 text-red-700 text-sm">
                    <span className="shrink-0">✗</span> {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interview Tips */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-poppins font-bold text-green-800 text-xl mb-4">💡 Visa Interview Tips</h3>
              <ul className="space-y-2">
                {[
                  "Be confident and answer concisely",
                  "Know your program, university, and city details well",
                  "Show strong ties to Pakistan (family, property, job offer after studies)",
                  "Carry all original documents in an organized folder",
                  "Dress professionally — first impressions matter",
                  "Be honest — never misrepresent any information",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-green-700 text-sm">
                    <span className="shrink-0">✓</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#0B1F4D] rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold font-poppins text-[#D4AF37] mb-1">95%</div>
              <div className="text-white/80 text-sm mb-4">Visa success rate across all destinations</div>
              <Link to="/contact" className="btn-gold w-full py-3 rounded-xl block text-center text-sm">Get Visa Assistance</Link>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-poppins font-semibold text-[#0B1F4D] mb-3">Visa FAQs</h4>
              {[
                ["How long does visa processing take?", "2–8 weeks depending on the country and embassy workload."],
                ["Can I apply without a job offer?", "Yes! A student visa is based on your university admission, not employment."],
                ["What if my visa is rejected?", "We analyze the rejection reason and reapply with a stronger application."],
              ].map(([q, a]) => (
                <div key={q} className="mb-3 pb-3 border-b border-gray-100 last:border-0 last:mb-0">
                  <div className="font-poppins font-medium text-[#0B1F4D] text-sm mb-1">{q}</div>
                  <div className="text-gray-500 text-xs">{a}</div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/923420315743" className="bg-[#25D366] text-white rounded-2xl p-5 flex items-center gap-3 hover:bg-[#1ebe5d] transition-colors">
              <span className="text-3xl">💬</span>
              <div>
                <div className="font-poppins font-semibold">WhatsApp Visa Expert</div>
                <div className="text-white/80 text-xs">Get instant visa guidance</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
