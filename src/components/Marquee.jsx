import { motion } from 'framer-motion'

export default function Marquee({ items }) {
  return (
    <div className="relative py-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-black/60 text-sm tracking-widest uppercase">{item}</span>
        ))}
      </motion.div>
    </div>
  )
}
