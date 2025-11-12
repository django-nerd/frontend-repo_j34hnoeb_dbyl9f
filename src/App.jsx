import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Brands from './pages/Brands'
import Expertise from './pages/Expertise'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
