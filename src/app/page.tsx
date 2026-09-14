import { personJsonLd } from '@/data/person'
import Header from '@/components/layout/Header'
import HomeHero from '@/components/sections/HomeHero'
import Intro from '@/components/sections/Intro'
import Experience from '@/components/sections/Experience'
import Migrations from '@/components/sections/Migrations'
import Projects from '@/components/sections/Projects'
import Direction from '@/components/sections/Direction'
import Stack from '@/components/sections/Stack'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <HomeHero />
      <Intro />
      <Direction />
      <Experience />
      <Migrations />
      <Projects />
      <Stack />
      <Footer />
    </>
  )
}
