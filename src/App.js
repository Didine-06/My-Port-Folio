import react, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import './Style.css'
import Project from './components/Project/Project'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import HeroSection from './components/herro/HeroSection'
import {BrowserRouter } from 'react-router-dom'
function App() {

  const [showscrol, setshowscrol] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowscrol(true)
      } else {
        setshowscrol(false)
      }
    })
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }



  return (
    <BrowserRouter>
      <div className='Container'>
        <Header />
        <HeroSection />
        <div className='Separateur' />
        <Main />
        <div className='Separateur' />
        <Project />
        <div className='Separateur' />
        <Contact  />
        <div className='Separateur' />
        <Footer />

        <a className='Arrow' style={{ opacity: showscrol ? 1 : 0, transition: "0.7s" }}>
          <button className='icon-arrow btn' onClick={top}></button>
        </a>

      </div>
    </BrowserRouter>
  )
}


export default App;
