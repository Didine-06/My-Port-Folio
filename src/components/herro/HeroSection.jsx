import React from 'react'
import './HeroSection.css'
import picture from '../Assets/Picture.jpg'
import Lottie from 'lottie-react'
import Animate from '../../animations/herroAnimations.json'
import { motion } from "framer-motion"
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HashLink as Link } from 'react-router-hash-link'




function HeroSection() {
  return (
    <section className='flex' id='about'>
      <div className='left-box'>
          <div className='flex'>
            <motion.img
            
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{damping:8, type:"spring"}}

            src={picture} alt="" />
            <p>Hi there !</p>
          </div>
          <div className='block'>
            <h1>
              I'm Nordine Benidiri Software engineer & Full-Stack Developer
            </h1>           
          </div>
          <div className='btn-section'>
            <Link to={"https://github.com/Didine-06"}><SiGithub/> </Link>
            <Link to={"https://www.linkedin.com/in/nordine-benidiri-021794221"}><SiLinkedin/> </Link>
          </div>
      </div>
      <div className='right-box'>
      <Lottie animationData={Animate} style={{ height: 450 }} />
      </div>
    </section>
  )
}

export default HeroSection
