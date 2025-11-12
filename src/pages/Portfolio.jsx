import { motion } from 'framer-motion'

const projects = Array.from({ length: 15 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  src: `https://images.unsplash.com/photo-15${10 + i}-random?auto=format&fit=crop&w=1600&q=80`,
}))

export default function Portfolio() {
  return (
    <main className="bg-white text-black">
      <section className="pt-28 sm:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
            <p className="text-black/60 mt-2">A wider look at commissioned and personal work.</p>
          </header>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="contents">
            {projects.map((p, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="mb-4 break-inside-avoid rounded-xl overflow-hidden bg-gray-100"
              >
                <img src={`https://picsum.photos/seed/${i}/800/600`} alt={p.title} className="w-full h-auto object-cover" loading="lazy"/>
              </motion.figure>
            ))}
          </div></div>
        </div>
      </section>
    </main>
  )
}
