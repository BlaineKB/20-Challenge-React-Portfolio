import React from 'react'
import './about.css'
import ME from '../../assets/me-silhouette.png'
import {AiFillFolderOpen} from 'react-icons/ai'
import {MdSportsFootball} from 'react-icons/md'
import {AiOutlineTrophy} from 'react-icons/ai'

function About() {
  return (
    <section id="about">
    <h2>About Me</h2>

    <div className="container about__container"> 
    <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="me"/>
    </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <AiOutlineTrophy className='about__icon'/>
          <h5>Experience</h5>
          <small> Graduated from UT Austin Coding Bootcamp</small>
        </article>

        <article className="about__card">
          <MdSportsFootball className='about__icon'/>
          <h5>Hobbies</h5>
          <small> Enjoy watching/playing all kinds of sports, fantasy football, and video games</small>
        </article>

        <article className="about__card">
          <AiFillFolderOpen className='about__icon'/>
          <h5>Projects</h5>
          <small> Willing to work on anything!</small>
        </article>
      </div>

      <p>
      Hello! My name is Blaine Brady. I'm studying to be a Full Stack Engineer, and I'm earning my certificate 
      from The University of Texas at Austin's Coding Bootcamp. I enjoy listening to several different genres of music,
      playing/watching sports, gaming online, and coding! 
      </p>

      <a href="#contact" className="btn btn-primary"> Connect</a>

    </div>
    </div>
  </section>
  )
}

export default About