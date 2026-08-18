import { Link } from "react-router-dom"

const logo = "/hm-global-logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#0B1F4D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
             <img
  src={logo}
  alt="HM Global Gateway Consultancy"
  className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
/>
              <div>
  <h1 className="text-white text-2xl font-black leading-none">
    HM <span className="text-[#D4AF37]">Global</span> Gateway
  </h1>

</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Your Dream. Our Guidance. Global Future. We help students achieve their international education goals.
            </p>
            <div className="flex gap-3">
              {["📘", "📸", "▶️", "💼"].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[#D4AF37] hover:text-[#0B1F4D] transition-all">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-poppins text-[#D4AF37] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[["Home", "/"], ["Countries", "/countries"], ["Universities", "/universities"], ["Services", "/services"], ["Scholarships", "/scholarships"], ["Visa", "/visa"]].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="hover:text-[#D4AF37] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold font-poppins text-[#D4AF37] mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[["🇰🇷 South Korea", "/countries/south-korea"], ["🇩🇪 Germany", "/countries/germany"], ["🇬🇧 United Kingdom", "/countries/uk"], ["🇮🇹 Italy", "/countries/italy"], ["🇨🇾 Cyprus", "/countries/cyprus"], ["🇦🇹 Austria", "/countries/austria"]].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="hover:text-[#D4AF37] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-poppins text-[#D4AF37] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Narowal, Punjab, Pakistan</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <div>
                  <div>0342 0315743</div>
                  <div>0318 4695563</div>
                </div>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a href="mailto:info@hmglobalgateway.com" className="hover:text-[#D4AF37] transition-colors">
                  info@hmglobalgateway.com
                </a>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>Mon – Sat: 9am – 6pm PKT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© 2025 HM Global Gateway Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            <Link to="/admin" className="hover:text-[#D4AF37] transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
