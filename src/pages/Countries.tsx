import { Link } from "react-router-dom"
import { COUNTRIES } from "../data/data"

export default function Countries() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Study Destinations</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Choose Your Country</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Explore our 6 partner destinations and find the perfect country for your international education journey.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUNTRIES.map((country) => (
            <Link key={country.id} to={`/countries/${country.id}`} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-52 relative overflow-hidden">
                <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-4xl">{country.flag}</div>
                  <h2 className="font-poppins font-bold text-xl">{country.name}</h2>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-gray-500 text-sm mb-4">{country.description}</p>
                <div className="grid grid-cols-2 gap-3 text-xs mb-5">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="text-gray-400 mb-0.5">Avg. Tuition</div>
                    <div className="font-poppins font-semibold text-[#0B1F4D]">{country.avgTuition}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="text-gray-400 mb-0.5">Living Cost</div>
                    <div className="font-poppins font-semibold text-[#0B1F4D]">{country.livingCost}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {country.highlights.map((h) => (
                    <span key={h} className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs px-2 py-0.5 rounded-full font-poppins font-medium">{h}</span>
                  ))}
                </div>
                <div className="btn-gold w-full py-2.5 rounded-xl text-sm text-center font-poppins font-semibold">
                  Explore {country.name} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
