import Header from '@/components/layout/Header'
import HomeHero from '@/components/sections/HomeHero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Stack from '@/components/sections/Stack'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <Experience />
      <Projects />
      <Stack />
      <Footer />
    </>
  )
}
