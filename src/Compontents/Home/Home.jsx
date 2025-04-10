import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Speaker from './Speaker'
import Contact from './Contact'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
    <Helmet>

    </Helmet>
       <HeroSection/>
       <About/>
       <Speaker/>
       <Contact/>
    </>
  )
}
