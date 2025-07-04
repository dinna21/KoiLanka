import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import KoiVarieties from '../components/KoiVarieties.jsx'
import HomeServices from '../components/HomeServices.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <KoiVarieties />
      <HomeServices />
      <Footer />
    </>
  )
}
