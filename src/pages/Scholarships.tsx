import { useState } from "react"
import { Link } from "react-router-dom"

const SCHOLARSHIPS = [
  { name: "GKS (Global Korea Scholarship)", country: "🇰🇷 South Korea", type: "Government", amount: "Fully Funded", deadline: "Annual Intake", coverage: "Tuition + Living + Airfare + Health Insurance", eligibility: "Undergraduate/Graduate students, good academic record" },
  { name: "DAAD Scholarship", country: "🇩🇪 Germany", type: "Government", amount: "€750–€1,200/month", deadline: "Annual Intake", coverage: "Monthly stipend + travel allowance + health insurance", eligibility: "Bachelor's degree, relevant field of study, language proficiency" },
  { name: "Chevening Scholarship", country: "🇬🇧 United Kingdom", type: "Government", amount: "Fully Funded", deadline: "Annual Intake", coverage: "Tuition + Living + Flights + Visa fees", eligibility: "2+ years work experience, leadership potential" },
  { name: "Deutschland Stipendium", country: "🇩🇪 Germany", type: "Merit", amount: "€300/month", deadline: "Annual Intake", coverage: "Monthly stipend for excellent students", eligibility: "Outstanding academic achievement, enrolled in German university" },
  { name: "Keimyung University Scholarship", country: "🇰🇷 South Korea", type: "University", amount: "50–100% Tuition", deadline: "Rolling", coverage: "Partial to full tuition waiver", eligibility: "Good CGPA, recommended by MH Gateway Consultancy" },
  { name: "Near East University Scholarship", country: "🇨🇾 Cyprus", type: "University", amount: "25–75% Tuition", deadline: "Rolling", coverage: "Tuition fee reduction", eligibility: "Academic merit, interview performance" },
  { name: "OeAD Government Scholarship", country: "🇦🇹 Austria", type: "Government", amount: "€1,050/month", deadline: "Annual Intake", coverage: "Monthly stipend + accommodation contribution", eligibility: "Research scholars and postgraduate students" },
  { name: "University of Bologna Excellence Award", country: "🇮🇹 Italy", type: "Merit", amount: "€11,000/year", deadline: "Annual Intake", coverage: "Tuition + partial living costs", eligibility: "Top academic achievers, specific programs" },
  { name: "GREAT Scholarship", country: "🇬🇧 United Kingdom", type: "Government", amount: "£10,000 min", deadline: "Annual Intake", coverage: "Towards tuition fees", eligibility: "Pakistani students, specific UK universities" },
]

const TYPES = ["All", "Government", "University", "Merit"]

export default function Scholarships() {
  const [filter, setFilter] = useState("All")
  const [cgpa, setCgpa] = useState("")
  const [country, setCountry] = useState("")
  const [checkerResult, setCheckerResult] = useState<string | null>(null)

  const filtered = filter === "All" ? SCHOLARSHIPS : SCHOLARSHIPS.filter((s) => s.type === filter)

  const checkEligibility = () => {
    const cgpaNum = parseFloat(cgpa)
    if (!cgpa || !country) { setCheckerResult("Please fill all fields."); return }
    if (cgpaNum >= 3.5) setCheckerResult(`🎉 Excellent! With a CGPA of ${cgpa}, you are highly eligible for merit scholarships in ${country}, including government and university-funded programs. Book a consultation to apply!`)
    else if (cgpaNum >= 2.8) setCheckerResult(`✅ With a CGPA of ${cgpa}, you qualify for several university scholarships in ${country}. Need-based aid may also be available. Contact us to explore options.`)
    else setCheckerResult(`📋 With a CGPA of ${cgpa}, need-based and partial scholarships are your best options in ${country}. Don't worry — we'll find the best fit for you!`)
  }

  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Financial Aid</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Scholarships</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Discover government, university, and merit-based scholarships to fund your international education.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Eligibility Checker */}
        <div className="bg-gradient-to-r from-[#0B1F4D] to-[#1a3470] rounded-2xl p-8 text-white mb-12">
          <h2 className="font-poppins font-bold text-2xl mb-2 text-[#D4AF37]">🔍 Scholarship Eligibility Checker</h2>
          <p className="text-white/70 mb-6 text-sm">Enter your details to find scholarships you qualify for.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              placeholder="Your CGPA (e.g. 3.2)"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 text-sm outline-none focus:border-[#D4AF37]"
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#D4AF37]"
            >
              <option value="">Select Country</option>
              {["South Korea", "Germany", "UK", "Italy", "Cyprus", "Austria"].map((c) => (
                <option key={c} value={c} className="text-black">{c}</option>
              ))}
            </select>
            <button onClick={checkEligibility} className="btn-gold px-6 py-3 rounded-xl text-sm">Check Eligibility</button>
          </div>
          {checkerResult && (
            <div className="mt-5 bg-white/10 rounded-xl p-4 text-sm text-white border border-white/20">
              {checkerResult}
            </div>
          )}
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm font-poppins font-medium transition-all ${filter === t ? "bg-[#0B1F4D] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Scholarship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl card-hover border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-poppins font-semibold px-3 py-1 rounded-full ${
                  s.type === "Government" ? "bg-blue-100 text-blue-700" :
                  s.type === "Merit" ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "bg-green-100 text-green-700"
                }`}>{s.type}</span>
                <span className="text-lg">{s.country.split(" ")[0]}</span>
              </div>
              <h3 className="font-poppins font-bold text-[#0B1F4D] text-lg mb-1">{s.name}</h3>
              <p className="text-gray-400 text-xs mb-3">{s.country}</p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between"><span className="text-gray-400">Amount:</span><span className="font-semibold text-[#D4AF37]">{s.amount}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Deadline:</span><span className="font-medium">{s.deadline}</span></div>
              </div>
              <p className="text-xs text-gray-500 mb-4">{s.coverage}</p>
              <Link to="/contact" className="btn-gold w-full py-2.5 rounded-xl text-sm text-center block">Apply Now</Link>
            </div>
          ))}
        </div>

        {/* Types Explained */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { type: "Government", icon: "🏛️", desc: "Funded by destination country governments. Highest value, most competitive." },
            { type: "University", icon: "🎓", desc: "Offered by partner universities. Easier to apply, rolling deadlines." },
            { type: "Merit-Based", icon: "⭐", desc: "Awarded based on academic excellence and achievements." },
            { type: "Need-Based", icon: "💰", desc: "For students with genuine financial need. Documentation required." },
          ].map((t) => (
            <div key={t.type} className="bg-gray-50 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">{t.icon}</div>
              <h4 className="font-poppins font-semibold text-[#0B1F4D] mb-2">{t.type}</h4>
              <p className="text-gray-500 text-xs">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="section-title text-2xl mb-4">Need Help Finding Scholarships?</h2>
          <p className="text-gray-500 mb-6">Our scholarship team will search and apply on your behalf.</p>
          <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-block">Book Scholarship Consultation</Link>
        </div>
      </div>
    </div>
  )
}
