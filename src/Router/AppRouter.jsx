import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Compontents/Home/Home'
import Main from '../Compontents/Main/Main'
import About_the_Conference from '../Compontents/About_Us/About_the_Conference'
import Scope_of_Conference from '../Compontents/About_Us/Scope_of_Conference'
import Organizing_Committee from '../Compontents/About_Us/Organizing_Committee'
import Editorial_Board from '../Compontents/About_Us/Editorial_Board'
import Key_Dates from '../Compontents/Author_s_Desk/Key_Dates'
import Registration_Details from '../Compontents/Author_s_Desk/Registration_Details'
import SpeakerHome from '../Compontents/Home/SpeakerHome'
import NewPaperSubmission from '../Compontents/Author_s_Desk/NewPaperSubmission'
import ContactUs from '../Compontents/Home/ContactUs'
import ScrollToTop from './ScrollToTop '
import MetaTags from '../Core/Metatags'

export default function AppRouter() {
  return (
    <BrowserRouter>
     <ScrollToTop />
     <MetaTags/>
    <Routes>
       <Route element={<Main/>}>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About_the_Conference/>} />
       <Route path="/about/Scope" element={<Scope_of_Conference/>} />
       <Route path="/about/Organizing_Committee" element={<Organizing_Committee/>} />
       <Route path="/about/Editorial_Board" element={<Editorial_Board/>} />
       <Route path="/authors/key-dates" element={<Key_Dates/>} />
       <Route path="/authors/registration-details" element={<Registration_Details/>} />
       <Route path="/Speaker" element={<SpeakerHome/>} />
       <Route path="/contact" element={<ContactUs/>} />
       <Route path="/NewPaperSubmission" element={<NewPaperSubmission/>} />
       <Route path="/authors/new-paper-submissions" element={<NewPaperSubmission/>} />
       </Route>
   </Routes>
   </BrowserRouter>
  )
}
