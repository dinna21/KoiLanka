import React, { useEffect } from 'react'
import Header from '../components/Header.jsx'
import KoiVarieties from '../components/KoiVarieties.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import HomeServices from '../components/HomeServices.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('hide-scrollbar-page')
    document.body.classList.add('hide-scrollbar-page')

    return () => {
      document.documentElement.classList.remove('hide-scrollbar-page')
      document.body.classList.remove('hide-scrollbar-page')
    }
  }, [])

  return (
    <>
      <Header />
      <KoiVarieties />
      <WhyChooseUs />
      <HomeServices />
      <Footer />
    </>
  )
}
