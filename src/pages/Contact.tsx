import { useState } from "react"
import emailjs from "@emailjs/browser"
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    await emailjs.send(
      "service_kotzq89",
      "template_szmb5vf",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        message: form.message,
      },
      "NbYPKzYwVSHSaNQ-q"
    )

    setSubmitted(true)

    setForm({
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    })
  } catch (error) {
    console.error("EmailJS Error:", error)
    alert("Failed to send your request. Please try again.")
  }
}

  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Book your free consultation or ask us anything. We respond within 24 hours.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <h2 className="section-title text-2xl mb-6">Reach Out to Us</h2>
            </div>

            {[
              { icon: "📍", title: "Office Address", lines: ["HM Global Gateway Consultancy", "Narowal, Punjab, Pakistan"] },
              { icon: "📞", title: "Phone Numbers", lines: ["0342 0315743", "0318 4695563"] },
              { icon: "✉️", title: "Email Address", lines: ["info@hmglobalgateway.com"] },
              { icon: "🕐", title: "Office Hours", lines: ["Monday – Saturday", "9:00 AM – 6:00 PM (PKT)"] },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#0B1F4D]/5 flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-poppins font-semibold text-[#0B1F4D] text-sm mb-1">{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="bg-[#0B1F4D] rounded-2xl p-5 text-white">
              <h4 className="font-poppins font-semibold mb-3">Quick Connect</h4>
              <div className="space-y-3">
                <a href="https://wa.me/923420315743" className="flex items-center gap-3 bg-[#25D366] rounded-xl p-3 hover:bg-[#1ebe5d] transition-colors">
                  <span className="text-xl">💬</span>
                  <span className="text-sm font-medium">WhatsApp: 0342 0315743</span>
                </a>
                <a href="https://wa.me/923184695563" className="flex items-center gap-3 bg-[#25D366] rounded-xl p-3 hover:bg-[#1ebe5d] transition-colors">
                  <span className="text-xl">💬</span>
                  <span className="text-sm font-medium">WhatsApp: 0318 4695563</span>
                </a>
                <a href="tel:+923420315743" className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                  <span className="text-xl">📞</span>
                  <span className="text-sm font-medium">Call: 0342 0315743</span>
                </a>
                <a href="tel:+923184695563" className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                  <span className="text-xl">📞</span>
                  <span className="text-sm font-medium">Call: 0318 4695563</span>
                </a>
                <a href="mailto:mozambhali521@gmail.com" className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                  <span className="text-xl">✉️</span>
                  <span className="text-sm font-medium">info@hmglobalgateway.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-poppins font-bold text-[#0B1F4D] text-2xl mb-6">Book Free Consultation</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="font-poppins font-bold text-[#0B1F4D] text-xl mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your inquiry has been submitted. Our team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-gold mt-6 px-6 py-3 rounded-full text-sm">Submit Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-poppins font-medium text-[#0B1F4D] mb-1.5">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Muhammad Ali"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D] focus:ring-1 focus:ring-[#0B1F4D]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-poppins font-medium text-[#0B1F4D] mb-1.5">Phone Number *</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0300 1234567"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D] focus:ring-1 focus:ring-[#0B1F4D]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-[#0B1F4D] mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ali@gmail.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D] focus:ring-1 focus:ring-[#0B1F4D]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-[#0B1F4D] mb-1.5">Preferred Destination</label>
                    <select
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D] focus:ring-1 focus:ring-[#0B1F4D]/20 transition-all"
                    >
                      <option value="">Select a country</option>
                      {["🇰🇷 South Korea", "🇩🇪 Germany", "🇬🇧 United Kingdom", "🇮🇹 Italy", "🇨🇾 Cyprus", "🇦🇹 Austria", "Not sure yet"].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-[#0B1F4D] mb-1.5">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your education background, desired program, and any questions you have..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D] focus:ring-1 focus:ring-[#0B1F4D]/20 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full py-4 rounded-xl text-base">
                    Submit Consultation Request
                  </button>
                  <p className="text-center text-gray-400 text-xs">We respect your privacy. Your information is never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📍</div>
            <p className="font-poppins font-semibold text-[#0B1F4D]">HM Global Gateway Consultancy</p>
            <p className="text-sm">Narowal, Punjab, Pakistan</p>
            <a
              href="https://maps.google.com/?q=Narowal,Punjab,Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block mt-3 px-5 py-2 rounded-full text-xs"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
