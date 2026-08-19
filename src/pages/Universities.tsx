import { useState } from "react"
import { Link } from "react-router-dom"
import { COUNTRIES } from "../data/data"

const ALL_UNIS = COUNTRIES.flatMap((c) =>
  c.universities.map((u) => ({ ...u, country: c.name, flag: c.flag, countryId: c.id }))
)

export default function Universities() {
  const [search, setSearch] = useState("")
  const [countryFilter, setCountryFilter] = useState("All")

  const filtered = ALL_UNIS.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.programs.toLowerCase().includes(search.toLowerCase())
    const matchCountry = countryFilter === "All" || u.country === countryFilter
    return matchSearch && matchCountry
  })

  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Partner Institutions</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Universities Abroad for Pakistani Students</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Browse our network of 50+ partner universities across 6 countries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search university or program..."
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D] font-inter"
          />
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D] font-inter min-w-44"
          >
            <option value="All">All Countries</option>
            {COUNTRIES.map((c) => <option key={c.id} value={c.name}>{c.flag} {c.name}</option>)}
          </select>
        </div>

        <div className="text-sm text-gray-500 mb-6 font-inter">{filtered.length} universities found</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((uni) => (
            <div key={uni.name + uni.country} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl card-hover border border-gray-100">
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img src={uni.image} alt={`${uni.name} in ${uni.country}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-poppins font-semibold px-2 py-0.5 rounded-full">{uni.ranking}</span>
                  <span className="text-lg">{uni.flag}</span>
                </div>
                <h3 className="font-poppins font-bold text-[#0B1F4D] text-sm mb-1 leading-tight">{uni.name}</h3>
                <p className="text-gray-400 text-xs mb-1">📍 {uni.location}, {uni.country}</p>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{uni.programs}</p>
                <Link to={`/countries/${uni.countryId}`} className="btn-gold w-full py-2 rounded-lg text-xs text-center block">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-4">🔍</div>
            <p className="font-poppins">No universities found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
