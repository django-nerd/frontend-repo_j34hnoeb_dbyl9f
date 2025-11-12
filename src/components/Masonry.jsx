import { useMemo } from 'react'
import { motion } from 'framer-motion'

const images = [
  // Royalty-free placeholder images themed around photography
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520974718441-4491a163713c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=1600&auto=format&fit=crop'
]

export default function Masonry() {
  const cols = useMemo(() => {
    const columns = 3
    const colHeights = Array.from({ length: columns }, () => 0)
    const distribution = Array.from({ length: columns }, () => [])

    images.forEach((src, idx) => {
      const minCol = colHeights.indexOf(Math.min(...colHeights))
      const height = 300 + (idx % 5) * 60 // pseudo varied heights
      colHeights[minCol] += height
      distribution[minCol].push({ src, height })
    })

    return distribution
  }, [])

  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">Selected Work</h2>
            <p className="text-black/60 mt-2">A living collection of recent projects and explorations.</p>
          </div>
          <a href="/portfolio" className="hidden sm:inline-flex text-sm font-medium text-black underline hover:opacity-70">See all</a>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cols.map((col, i) => (
            <div key={i} className="space-y-4">
              {col.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (j % 5) * 0.05 }}
                  className="relative overflow-hidden rounded-xl bg-gray-100"
                  style={{ height: item.height }}
                >
                  <img
                    src={item.src}
                    alt="Portfolio shot"
                    className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
