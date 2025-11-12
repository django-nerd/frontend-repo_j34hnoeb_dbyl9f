import { motion } from 'framer-motion'

const brands = ['Nike', 'Adidas', 'Sony', 'Canon', 'Apple', 'Vogue', 'H&M', 'Zara', 'Mercedes', 'BMW']

export default function Brands() {
  return (
    <main className="bg-white text-black">
      <section className="pt-28 sm:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight">Brands</h1>
            <p className="text-black/60 mt-2">Selected clients I’ve collaborated with.</p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="aspect-[3/2] rounded-xl border border-black/10 flex items-center justify-center text-lg font-semibold bg-white hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {b}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
