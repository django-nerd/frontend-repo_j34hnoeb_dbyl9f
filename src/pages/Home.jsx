import Hero from '../components/Hero'
import Masonry from '../components/Masonry'
import Marquee from '../components/Marquee'

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Hero />

      <Marquee items={['Editorial', 'Lifestyle', 'Portraits', 'Commercial', 'Travel', 'Fashion']} />

      <Masonry />
    </div>
  )
}
