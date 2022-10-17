import React, { useState } from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FcBusiness} from 'react-icons/fc'
import {GiBookCover, GiGreatPyramid} from 'react-icons/gi'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GiGreatPyramid/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FcBusiness/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiBookCover/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav