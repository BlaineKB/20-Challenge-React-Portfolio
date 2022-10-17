import React from 'react'
import './header.css'
import MyPic from '../../assets/blonde-guy-avatar.jpg'
import HeaderSocialLinks from './HeaderSocialLinks'

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h1> Blaine Brady</h1>
        <h4 className='text-light'>Fullstack Developer</h4>
        <HeaderSocialLinks/>
        <div className='mypic'>
          <img src={MyPic} alt="Avatar of me" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header