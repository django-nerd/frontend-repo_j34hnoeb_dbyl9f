export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/60">
        <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/instagram" className="hover:text-black">Instagram</a>
          <a href="/twitter" className="hover:text-black">Twitter</a>
          <a href="/behance" className="hover:text-black">Behance</a>
        </div>
      </div>
    </footer>
  )
}
