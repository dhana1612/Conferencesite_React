import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Core/Footer/Footer'
import Header from '../../Core/Header/Header'

export const Main = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet></Outlet>
    </main>
    <Footer/>
    </>
  )
}

export default Main;
