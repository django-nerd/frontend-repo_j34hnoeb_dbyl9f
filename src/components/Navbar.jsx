import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Camera } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/brands', label: 'Brands' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              <Camera size={18} />
            </span>
            <span className="text-black">Your Name</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'bg-black text-white' : 'text-black/70 hover:text-black'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10 text-black"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-black text-white' : 'text-black/80 hover:bg-black/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
