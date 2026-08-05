import { Link } from "react-router-dom"

const TEAM = [
  { name: "Muhammad Hassan", role: "Founder & CEO", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&faces", bio: "10+ years in international education consultancy. Studied in South Korea, now dedicated to helping Pakistani students achieve the same dream." },
  { name: "Aisha Nawaz", role: "Senior Visa Counselor", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&faces", bio: "Former Embassy documentation specialist with 7 years of visa processing experience across 6 countries." },
  { name: "Bilal Chaudhry", role: "UK & Germany Specialist", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&faces", bio: "Masters graduate from University of Manchester. Expert in UK and German university applications and scholarships." },
  { name: "Sara Khan", role: "Scholarship Coordinator", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&faces", bio: "Dedicated to finding the best scholarship opportunities for every student profile. Has secured $2M+ in student funding." },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 navy-gradient" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">About HM Global Gateway</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Pakistan's most trusted study abroad consultancy, dedicated to turning international education dreams into reality.</p>
        </div>
      </div>

      {/* Mission Vision Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🎯", title: "Our Mission", text: "We help students achieve their dream of studying abroad by providing expert guidance from university selection to visa approval and travel support. Our goal is to make international education simple, affordable, and transparent." },
            { icon: "🔭", title: "Our Vision", text: "To become Pakistan's leading study abroad consultancy by 2030, having placed 5,000+ students in international universities with the highest visa success and scholarship rates in the industry." },
            { icon: "💎", title: "Core Values", text: "Transparency in every process. Integrity in every consultation. Excellence in every application. Empathy for every student's unique journey. No hidden charges, ever." },
          ].map((item) => (
            <div key={item.title} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-poppins font-bold text-[#0B1F4D] text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Our Story</div>
            <h2 className="section-title text-3xl mb-4">From a Dream to a Gateway</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">HM Global Gateway Consultancy was founded in Narowal, Punjab, with one vision: to make world-class international education accessible to every deserving Pakistani student, regardless of financial background.</p>
            <p className="text-gray-600 mb-4 leading-relaxed">Our founder, having personally experienced the challenges of studying abroad, built HM Global Gateway to ensure no student faces those hurdles alone. Today, we have placed 500+ students across South Korea, Germany, UK, Italy, Cyprus, and Austria.</p>
            <p className="text-gray-600 leading-relaxed">We maintain a 95%+ visa success rate, have secured millions in scholarships for our students, and continue to be the most trusted name in study abroad consultancy in Punjab.</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1627556704353-016baeb12c79?w=600&h=400&fit=crop&auto=format"
              alt="Students graduating"
              className="rounded-2xl shadow-xl w-full object-cover h-72"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#D4AF37] text-[#0B1F4D] rounded-2xl p-5 shadow-lg">
              <div className="font-poppins font-bold text-2xl">500+</div>
              <div className="text-sm font-medium">Students Placed</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="navy-gradient rounded-3xl p-10 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["500+", "Students Placed"], ["95%", "Visa Success Rate"], ["50+", "Partner Universities"], ["6", "Countries Served"]].map(([num, label]) => (
              <div key={label}>
                <div className="font-poppins font-bold text-4xl text-[#D4AF37] mb-1">{num}</div>
                <div className="text-white/70 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-10">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">The People Behind the Dream</div>
          <h2 className="section-title text-3xl">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg card-hover">
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-[#D4AF37]/30" />
              <h3 className="font-poppins font-bold text-[#0B1F4D] mb-1">{member.name}</h3>
              <p className="text-[#D4AF37] text-xs font-poppins font-semibold mb-3">{member.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="section-title text-3xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Join 500+ students who have trusted HM Global Gateway with their international education dreams.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-block">Book Free Consultation</Link>
            <Link to="/countries" className="btn-navy px-8 py-4 rounded-full text-base inline-block">Explore Countries</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
