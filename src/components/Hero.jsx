import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black">
            Capturing Stories in Light
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-black/70 max-w-xl">
            I’m a photographer crafting editorial, lifestyle and brand visuals with a cinematic feel. Available worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90 transition-colors">
              View Portfolio
            </a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors">
              Book a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
