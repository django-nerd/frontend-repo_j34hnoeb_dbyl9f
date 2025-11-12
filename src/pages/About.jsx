import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="bg-white text-black">
      <section className="pt-28 sm:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop"
              alt="Portrait"
              className="rounded-2xl shadow-lg object-cover aspect-[4/5] w-full"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
              <p className="mt-6 text-black/70 leading-relaxed">
                I’m a photographer blending documentary authenticity with cinematic composition. Over the last decade, I’ve collaborated with brands and artists to bring stories to life across editorial, lifestyle and commercial campaigns.
              </p>
              <p className="mt-4 text-black/70 leading-relaxed">
                Based in [City], available worldwide. When I’m not on set, you’ll find me exploring light, architecture, and sound that inspire my visual language.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold">Awards</h3>
                  <ul className="mt-2 space-y-1 text-black/70 text-sm">
                    <li>Photo Awards — Best Editorial</li>
                    <li>Lens Festival — People’s Choice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Clients</h3>
                  <ul className="mt-2 space-y-1 text-black/70 text-sm">
                    <li>Brand A</li>
                    <li>Brand B</li>
                    <li>Magazine C</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
