import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('Message sent! I will get back to you soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <main className="bg-white text-black">
      <section className="pt-28 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
            <p className="text-black/60 mt-2">Let’s create something meaningful together.</p>
          </header>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input name="name" required className="w-full rounded-xl border border-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-xl border border-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-xl border border-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90">Send Message</button>
              {status && <p className="text-sm text-black/60">{status}</p>}
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  )
}
