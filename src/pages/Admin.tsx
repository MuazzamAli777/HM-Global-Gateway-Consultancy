import { useState } from "react"

const MOCK_INQUIRIES = [
  { id: 1, name: "Ayesha Malik", phone: "0312 3456789", email: "ayesha@gmail.com", country: "South Korea", date: "2025-07-30", status: "New" },
  { id: 2, name: "Muhammad Usman", phone: "0321 9876543", email: "usman@gmail.com", country: "Germany", date: "2025-07-29", status: "Contacted" },
  { id: 3, name: "Fatima Zahid", phone: "0333 1122334", email: "fatima@gmail.com", country: "UK", date: "2025-07-28", status: "In Progress" },
  { id: 4, name: "Ali Hassan", phone: "0301 5566778", email: "ali@gmail.com", country: "Cyprus", date: "2025-07-27", status: "Converted" },
]

const MOCK_STUDENTS = [
  { id: 1, name: "Bilal Ahmed", university: "Keimyung University", country: "South Korea", status: "Visa Approved" },
  { id: 2, name: "Sana Butt", university: "University of Vienna", country: "Austria", status: "Enrolled" },
  { id: 3, name: "Hamza Raza", university: "TU Munich", country: "Germany", status: "Application Submitted" },
]

const SECTIONS = ["Dashboard", "Inquiries", "Students", "Universities", "Scholarships", "Blogs", "Testimonials", "SEO"]

export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [creds, setCreds] = useState({ user: "", pass: "" })
  const [error, setError] = useState("")
  const [active, setActive] = useState("Dashboard")

  const login = (e: React.FormEvent) => {
    e.preventDefault()
    if (creds.user === "admin" && creds.pass === "mhglobal2025") {
      setAuth(true)
      setError("")
    } else {
      setError("Invalid credentials. Try admin / mhglobal2025")
    }
  }

  if (!auth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-[#0B1F4D] text-xl font-poppins mx-auto mb-3">MH</div>
            <h2 className="font-poppins font-bold text-2xl text-[#0B1F4D]">Admin Login</h2>
            <p className="text-gray-400 text-sm mt-1">MH Gateway Consultancy Admin Panel</p>
          </div>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-sm font-poppins font-medium text-[#0B1F4D] mb-1.5">Username</label>
              <input
                required
                value={creds.user}
                onChange={(e) => setCreds({ ...creds, user: e.target.value })}
                placeholder="admin"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D]"
              />
            </div>
            <div>
              <label className="block text-sm font-poppins font-medium text-[#0B1F4D] mb-1.5">Password</label>
              <input
                required
                type="password"
                value={creds.pass}
                onChange={(e) => setCreds({ ...creds, pass: e.target.value })}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F4D]"
              />
            </div>
            {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-2">{error}</p>}
            <button type="submit" className="btn-gold w-full py-3 rounded-xl">Sign In</button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-4">Demo: admin / mhglobal2025</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-56 bg-[#0B1F4D] min-h-screen fixed top-20 left-0 z-40 flex flex-col pt-6 pb-4">
        <div className="px-4 mb-6">
          <div className="font-poppins font-bold text-white text-sm">Admin Panel</div>
          <div className="text-[#D4AF37] text-xs">MH Gateway Consultancy</div>
        </div>
        {SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`w-full text-left px-4 py-3 text-sm font-poppins font-medium transition-all ${
              active === s ? "bg-[#D4AF37] text-[#0B1F4D]" : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {s}
          </button>
        ))}
        <div className="mt-auto px-4">
          <button onClick={() => setAuth(false)} className="text-white/50 text-xs hover:text-white transition-colors">Sign Out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-56 flex-1 p-8">
        {active === "Dashboard" && (
          <div>
            <h1 className="font-poppins font-bold text-2xl text-[#0B1F4D] mb-6">Dashboard</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
              {[["12", "New Inquiries", "🔔", "text-blue-600 bg-blue-50"], ["4", "Active Applications", "📋", "text-green-600 bg-green-50"], ["2", "Visa Pending", "🛂", "text-amber-600 bg-amber-50"], ["500+", "Total Students", "🎓", "text-purple-600 bg-purple-50"]].map(([num, label, icon, color]) => (
                <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className={`w-10 h-10 rounded-xl ${color.split(" ")[1]} flex items-center justify-center text-lg mb-3`}>{icon}</div>
                  <div className="font-poppins font-bold text-2xl text-[#0B1F4D]">{num}</div>
                  <div className="text-gray-500 text-xs">{label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-poppins font-semibold text-[#0B1F4D] mb-4">Recent Inquiries</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-left text-gray-400 text-xs font-poppins">
                      <th className="pb-3">Name</th><th className="pb-3">Phone</th><th className="pb-3">Country</th><th className="pb-3">Date</th><th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_INQUIRIES.map((inq) => (
                      <tr key={inq.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 font-medium text-[#0B1F4D]">{inq.name}</td>
                        <td className="py-3 text-gray-600">{inq.phone}</td>
                        <td className="py-3 text-gray-600">{inq.country}</td>
                        <td className="py-3 text-gray-400">{inq.date}</td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-poppins font-semibold ${
                            inq.status === "New" ? "bg-blue-100 text-blue-700" :
                            inq.status === "Contacted" ? "bg-yellow-100 text-yellow-700" :
                            inq.status === "Converted" ? "bg-green-100 text-green-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>{inq.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {active === "Inquiries" && (
          <div>
            <h1 className="font-poppins font-bold text-2xl text-[#0B1F4D] mb-6">Student Inquiries</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-left text-gray-400 text-xs font-poppins">
                      <th className="pb-3">Name</th><th className="pb-3">Email</th><th className="pb-3">Phone</th><th className="pb-3">Country</th><th className="pb-3">Date</th><th className="pb-3">Status</th><th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_INQUIRIES.map((inq) => (
                      <tr key={inq.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 font-medium text-[#0B1F4D]">{inq.name}</td>
                        <td className="py-3 text-gray-500 text-xs">{inq.email}</td>
                        <td className="py-3 text-gray-600">{inq.phone}</td>
                        <td className="py-3 text-gray-600">{inq.country}</td>
                        <td className="py-3 text-gray-400 text-xs">{inq.date}</td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-poppins font-semibold ${inq.status === "New" ? "bg-blue-100 text-blue-700" : inq.status === "Converted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{inq.status}</span>
                        </td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <button className="text-xs text-blue-600 hover:underline">View</button>
                            <button className="text-xs text-green-600 hover:underline">Mark Done</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {active === "Students" && (
          <div>
            <h1 className="font-poppins font-bold text-2xl text-[#0B1F4D] mb-6">Student Tracker</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left text-gray-400 text-xs font-poppins">
                    <th className="pb-3">Student</th><th className="pb-3">University</th><th className="pb-3">Country</th><th className="pb-3">Status</th><th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_STUDENTS.map((s) => (
                    <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 font-medium text-[#0B1F4D]">{s.name}</td>
                      <td className="py-3 text-gray-600 text-xs">{s.university}</td>
                      <td className="py-3 text-gray-600">{s.country}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-poppins font-semibold ${
                          s.status === "Visa Approved" ? "bg-green-100 text-green-700" :
                          s.status === "Enrolled" ? "bg-purple-100 text-purple-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>{s.status}</span>
                      </td>
                      <td className="py-3">
                        <button className="text-xs text-blue-600 hover:underline mr-2">Edit</button>
                        <button className="text-xs text-red-400 hover:underline">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {["Universities", "Scholarships", "Blogs", "Testimonials", "SEO"].includes(active) && (
          <div>
            <h1 className="font-poppins font-bold text-2xl text-[#0B1F4D] mb-6">Manage {active}</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="font-poppins font-semibold text-[#0B1F4D] text-lg mb-2">{active} Management</h3>
              <p className="text-gray-500 text-sm">Full {active.toLowerCase()} management with add, edit, delete, and publish controls.</p>
              <button className="btn-gold px-6 py-3 rounded-xl mt-6 text-sm">
                + Add New {active.replace(/s$/, "")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
