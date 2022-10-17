import React from 'react'
import './portfolio.css'
import RhymeBlockIMG from '../../assets/RhymeBlock_Presentation_Preview.jpg'
import SongSuggestIMG from '../../assets/SongSuggest_Presentation.png'
import MusicMeetupIMG from '../../assets/MusicMeetupPic.png'

const data = [
  {
    id: 1,
    image: RhymeBlockIMG,
    title: 'Rhyme Block',
    github: "https://github.com/BlaineKB/Rhyme-Block",
    demo: "https://blainekb.github.io/Rhyme-Block/"
  },
  {
    id: 2,
    image: SongSuggestIMG,
    title: 'SongSuggest',
    github: "https://github.com/BlaineKB/songsearch",
    demo: "https://vast-stream-48863.herokuapp.com/"
  },
  {
    id: 3,
    image: MusicMeetupIMG,
    title: 'Music Meetup',
    github: "https://github.com/luketorv/music-meetup2",
    demo: "https://boiling-plateau-66922.herokuapp.com/"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      
    <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank"> Github</a>
                <a href={demo} className="btn btn-primary" target="_blank"> Website</a>
              </div>
            </article>
        )
      })
     } 
    </div>
    </section>
  )
}

export default Portfolio