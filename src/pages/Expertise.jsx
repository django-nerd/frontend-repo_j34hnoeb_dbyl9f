import { motion } from 'framer-motion'
import { Camera, Sparkles, Video, LayoutGrid, Sun, Palette } from 'lucide-react'

const skills = [
  { icon: Camera, title: 'Editorial & Portrait', desc: 'Human-first stories with cinematic composition.' },
  { icon: Video, title: 'Motion & BTS', desc: 'Short-form motion, behind-the-scenes, and loops.' },
  { icon: LayoutGrid, title: 'Art Direction', desc: 'Moodboarding, casting, location, and set design.' },
  { icon: Sun, title: 'Lighting', desc: 'Studio strobes, continuous, and natural light mastery.' },
  { icon: Palette, title: 'Color & Retouch', desc: 'Color-managed workflow with tasteful retouching.' },
  { icon: Sparkles, title: 'Creative Consulting', desc: 'Helping brands shape visuals that resonate.' },
]

export default function Expertise() {
  return (
    <main className="bg-white text-black">
      <section className="pt-28 sm:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight">Expertise</h1>
            <p className="text-black/60 mt-2">What I do and how I can help your brand shine.</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-black/10 p-6 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-black text-white flex items-center justify-center">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-black/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
