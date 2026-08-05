import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { COUNTRIES } from "../data/data"

const TABS = ["Overview", "Universities", "Scholarships", "Visa", "Student Life", "FAQs"]

export default function CountryDetail() {
  const { id } = useParams<{ id: string }>()
  const country = COUNTRIES.find((c) => c.id === id)
  const [activeTab, setActiveTab] = useState("Overview")

  if (!country) return (
    <div className="pt-28 text-center py-20">
      <h2 className="text-2xl font-poppins text-[#0B1F4D]">Country not found</h2>
      <Link to="/countries" className="btn-gold mt-6 inline-block px-6 py-3 rounded-full">Back to Countries</Link>
    </div>
  )

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D]/90 via-[#0B1F4D]/50 to-[#0B1F4D]/20" />
        <div className="absolute inset-0 flex items-end pb-10 px-6 max-w-7xl mx-auto">
          <div className="text-white">
            <div className="text-5xl mb-2">{country.flag}</div>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-1">{country.name}</h1>
            <p className="text-[#D4AF37] font-poppins font-medium">{country.tagline}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto gap-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-4 text-sm font-poppins font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab ? "border-[#D4AF37] text-[#0B1F4D]" : "border-transparent text-gray-500 hover:text-[#0B1F4D]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* OVERVIEW */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="section-title text-2xl mb-4">About Studying in {country.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{country.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  ["🌐", "Language", country.language],
                  ["💱", "Currency", country.currency],
                  ["📅", "Intakes", country.intakes.join(", ")],
                  ["💰", "Avg. Tuition", country.avgTuition],
                  ["🏠", "Living Cost", country.livingCost],
                  ["🛂", "Visa Type", country.visaType],
                  ["💼", "Part-time Work", country.partTimeWork],
                  ["🏡", "PR", country.prOpportunity],
                ].map(([icon, label, value]) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-xl mb-1">{icon}</div>
                    <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                    <div className="font-poppins font-semibold text-[#0B1F4D] text-sm">{value}</div>
                  </div>
                ))}
              </div>

              <h3 className="section-title text-xl mb-4">Admission Process</h3>
              <div className="space-y-3">
                {["Profile Evaluation & University Selection", "Document Preparation (Transcripts, SOP, LOR)", "Application Submission", "Receive Conditional/Unconditional Offer", "Visa Application & Processing", "Pre-departure Briefing", "Travel & Arrival"].map((step, i) => (
                  <div key={step} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0B1F4D] font-bold font-poppins text-sm flex items-center justify-center shrink-0">{i + 1}</div>
                    <span className="text-gray-700 text-sm font-inter">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#0B1F4D] rounded-2xl p-6 text-white mb-6">
                <h3 className="font-poppins font-bold text-lg mb-4 text-[#D4AF37]">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  {country.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="text-[#D4AF37]">✓</span> {h}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-gold w-full py-3 rounded-xl mt-6 block text-center text-sm">
                  Apply Now
                </Link>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h4 className="font-poppins font-semibold text-green-800 mb-2">WhatsApp Consultation</h4>
                <p className="text-green-700 text-xs mb-3">Get instant answers from our {country.name} specialists.</p>
                <a href="https://wa.me/923420315743" className="bg-[#25D366] text-white py-2.5 rounded-xl w-full block text-center text-sm font-poppins font-medium">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* UNIVERSITIES */}
        {activeTab === "Universities" && (
          <div>
            <h2 className="section-title text-2xl mb-8">Partner Universities in {country.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {country.universities.map((uni) => (
                <div key={uni.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl card-hover border border-gray-100">
                  <div className="h-44 bg-gray-100 overflow-hidden">
                    <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-poppins font-semibold px-2 py-0.5 rounded-full">{uni.ranking}</span>
                    <h3 className="font-poppins font-bold text-[#0B1F4D] mt-2 mb-1">{uni.name}</h3>
                    <p className="text-gray-400 text-xs mb-1">📍 {uni.location}</p>
                    <p className="text-gray-500 text-xs mb-4">{uni.programs}</p>
                    <Link to="/contact" className="btn-gold w-full py-2.5 rounded-xl text-sm text-center block">Apply Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCHOLARSHIPS */}
        {activeTab === "Scholarships" && (
          <div className="max-w-3xl">
            <h2 className="section-title text-2xl mb-6">Scholarships in {country.name}</h2>
            {[
              { type: "Government Scholarships", icon: "🏛️", desc: country.id === "south-korea" ? "GKS (Global Korea Scholarship) — fully funded for undergraduate and graduate students." : country.id === "germany" ? "DAAD Scholarship — one of the world's largest scholarships for international students." : country.id === "uk" ? "Chevening Scholarship — UK Government's fully funded scholarship for future leaders." : country.id === "austria" ? "OeAD Government Scholarships — for research and postgraduate students." : "Government-funded scholarships for eligible international students." },
              { type: "University Scholarships", icon: "🎓", desc: "Most partner universities offer merit-based scholarships ranging from 20% to 100% tuition fee waiver for excellent academic achievers." },
              { type: "Need-Based Aid", icon: "💰", desc: "Financial need-based assistance is available for students who can demonstrate genuine financial constraints. Application support provided." },
              { type: "Partial Scholarships", icon: "📊", desc: "Ranging from 10% to 50% tuition reduction, these are widely available and are excellent for students with good academic records." },
            ].map((s) => (
              <div key={s.type} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
                <div className="text-3xl shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-poppins font-bold text-[#0B1F4D] mb-1">{s.type}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
            <Link to="/contact" className="btn-gold inline-block px-8 py-3 rounded-full mt-4">Check Your Eligibility</Link>
          </div>
        )}

        {/* VISA */}
        {activeTab === "Visa" && (
          <div className="max-w-3xl">
            <h2 className="section-title text-2xl mb-6">Visa Information for {country.name}</h2>
            <div className="bg-[#0B1F4D] text-white rounded-2xl p-6 mb-6">
              <div className="text-sm text-white/70 mb-1">Visa Type Required</div>
              <div className="font-poppins font-bold text-xl text-[#D4AF37]">{country.visaType}</div>
            </div>
            {[
              { title: "Required Documents", icon: "📋", items: ["Valid Passport (6+ months validity)", "University Admission Letter", "Proof of Financial Funds", "Academic Transcripts & Certificates", "Language Test Score (IELTS/TOEFL)", "Passport-size Photos", "Completed Visa Application Form", "Visa Fee Payment Receipt"] },
              { title: "Financial Requirements", icon: "💳", items: ["Bank Statement showing sufficient funds", "Scholarship Letter (if applicable)", "Sponsor Letter & Sponsor's Bank Statement", "Education Loan Letter (if applicable)"] },
            ].map((section) => (
              <div key={section.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
                <h3 className="font-poppins font-bold text-[#0B1F4D] text-lg mb-3">{section.icon} {section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-600 text-sm">
                      <span className="text-[#D4AF37] mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h4 className="font-poppins font-semibold text-amber-800 mb-2">💡 Interview Tips</h4>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• Be confident and answer clearly</li>
                <li>• Know your university and program well</li>
                <li>• Show strong ties to your home country</li>
                <li>• Carry all original documents neatly organized</li>
                <li>• Be honest about your intentions to return</li>
              </ul>
            </div>
          </div>
        )}

        {/* STUDENT LIFE */}
        {activeTab === "Student Life" && (
          <div className="max-w-3xl">
            <h2 className="section-title text-2xl mb-6">Student Life in {country.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: "🏠", title: "Accommodation", desc: "On-campus dormitories, private apartments, shared housing. Average cost: " + country.livingCost  },
                { icon: "🚌", title: "Transport", desc: "Excellent public transport networks. Student discounts widely available. Monthly pass: typically €30–€100." },
                { icon: "🍜", title: "Food & Dining", desc: "Affordable university canteens, international restaurants, and local markets. Monthly food budget: €150–€300." },
                { icon: "💼", title: "Part-time Work", desc: country.partTimeWork + ". Great opportunity to gain international work experience and supplement your income." },
                { icon: "🎉", title: "Social Life", desc: "Vibrant international student community, cultural events, student clubs, and Pakistani student associations." },
                { icon: "🏥", title: "Healthcare", desc: "University health insurance mandatory. Comprehensive coverage at low cost for international students." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-poppins font-semibold text-[#0B1F4D] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {activeTab === "FAQs" && (
          <div className="max-w-3xl">
            <h2 className="section-title text-2xl mb-6">Frequently Asked Questions — {country.name}</h2>
            {[
              { q: `Do I need to learn ${country.language.split("/")[0]} before applying?`, a: `Many programs in ${country.name} are taught in English. However, learning basic ${country.language.split("/")[0]} phrases greatly helps with daily life and is appreciated by locals.` },
              { q: "What is the minimum IELTS score required?", a: "Most universities accept IELTS 5.5–6.5. Some English-medium universities may accept lower scores. Contact us for specific requirements." },
              { q: "Can I bring my family with me?", a: `After being enrolled and meeting income requirements, you may be able to apply for a dependent visa for your spouse and children in ${country.name}.` },
              { q: "What is the processing time for the student visa?", a: `The ${country.visaType} typically takes 2–8 weeks to process. We recommend applying at least 3 months before your intake.` },
              { q: "Are there opportunities after graduation?", a: `Yes! ${country.name} offers post-study work options. ${country.prOpportunity}. We provide full guidance on post-graduation pathways.` },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-3">
                <h4 className="font-poppins font-semibold text-[#0B1F4D] mb-2">Q: {faq.q}</h4>
                <p className="text-gray-600 text-sm">A: {faq.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
