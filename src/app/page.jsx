'use client'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Gallery from '@/components/Gallery/gallery'
import Hero from '@/components/Hero/Hero'
import Products from '@/components/Products/Products'


export default function Home() {
  return (
    <main >
      <Hero />
      <About />
      <Gallery />
      <Products />
      <Footer />
    </main>
    )
}
