import Head from 'next/head'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Feature'
import Statistics from '@/components/Statistic'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Enterprise UI </title>
        <meta name="description" content="Generated for UI showcase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Statistics/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
