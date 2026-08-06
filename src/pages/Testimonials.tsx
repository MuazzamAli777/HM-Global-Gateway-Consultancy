import { TESTIMONIALS } from "../data/data"
import { Link } from "react-router-dom"

const GALLERY = [
  "https://images.unsplash.com/photo-1627556704353-016baeb12c79?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1484712401471-05c7215830eb?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1625640776489-4186592c6f00?w=400&h=300&fit=crop",
]

export default function Testimonials() {
  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Student Stories</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Success Stories</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Real students. Real results. Hear from our community of international students.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[["20+", "Students Placed", "🎓"], ["95%", "Visa Success", "✅"], ["5", "Countries", "🌍"], ["50+", "Universities", "🏛️"]].map(([num, label, icon]) => (
            <div key={label} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="font-poppins font-bold text-3xl text-[#D4AF37]">{num}</div>
              <div className="text-gray-500 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <h2 className="section-title text-3xl text-center mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl card-hover border border-gray-100">
              <div className="flex text-[#D4AF37] text-lg mb-4">{"★".repeat(t.rating)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover bg-gray-200 border-2 border-[#D4AF37]/30" />
                <div>
                  <div className="font-poppins font-semibold text-[#0B1F4D]">{t.name}</div>
                  <div className="text-[#D4AF37] text-xs font-poppins font-medium">{t.country}</div>
                  <div className="text-gray-400 text-xs">{t.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h2 className="section-title text-3xl text-center mb-10">Student Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {GALLERY.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden h-48 sm:h-56 group">
              <img src={img} alt={`Student life ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="section-title text-3xl mb-4">Be Our Next Success Story</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Join hundreds of Pakistani students who trusted HM Global Gateway with their international education journey.</p>
          <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-block">Start Your Journey</Link>
        </div>
      </div>
    </div>
  )
}
