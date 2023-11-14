'use client'
import Footer from '@/components/Footer/Footer'
import Gallery from '@/components/Gallery/gallery'
import Hero from '@/components/Hero/Hero'
import Products from '@/components/Products/Products'


export default function Home() {
  return (
    <main >
      <Hero />
      <Gallery />
      <Products />
      <Footer />
    </main>
    )
}
