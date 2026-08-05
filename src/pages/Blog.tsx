import { useState } from "react"
import { BLOG_POSTS } from "../data/data"

const CATEGORIES = ["All", "Scholarships", "Admissions", "Visa Tips", "Student Life", "Study Abroad", "Immigration"]

export default function Blog() {
  const [category, setCategory] = useState("All")

  const filtered = category === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category)

  return (
    <div className="pt-20">
      <div className="navy-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Knowledge Hub</div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4">Blog & Resources</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">Expert articles on scholarships, visa tips, student life, and everything study abroad.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured Post */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-12 relative h-80 sm:h-96">
          <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D]/90 via-[#0B1F4D]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="bg-[#D4AF37] text-[#0B1F4D] text-xs font-poppins font-bold px-3 py-1 rounded-full">{BLOG_POSTS[0].category}</span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl mt-3 mb-2">{BLOG_POSTS[0].title}</h2>
            <p className="text-white/75 text-sm">{BLOG_POSTS[0].excerpt}</p>
            <div className="text-white/50 text-xs mt-3">{BLOG_POSTS[0].date}</div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-poppins font-medium transition-all ${
                category === cat ? "bg-[#0B1F4D] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl card-hover border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-poppins font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="font-poppins font-bold text-[#0B1F4D] text-base mb-2 leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="text-[#0B1F4D] font-poppins font-semibold text-sm hover:text-[#D4AF37] transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <div className="text-4xl mb-4">📝</div>
            <p className="font-poppins">No articles in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
