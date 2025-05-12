import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Speaker from './Speaker'
import Contact from './Contact'
import { Helmet } from 'react-helmet'
import { Venue } from './Venue'
import Conference_Track from './Conference_Track'

export default function Home() {
  return (
    <>
    <Helmet>

    </Helmet>
       <HeroSection/>
       <About/>
       <Speaker/>
       <Conference_Track />
       <Venue/>
       <Contact/>
    </>
  )
}
