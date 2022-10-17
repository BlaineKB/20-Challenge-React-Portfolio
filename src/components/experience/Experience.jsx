import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills and Knowledge</h2>
      <div className="container experience__container">
        <div className="frontend">
            <h2>Frontend</h2>
            <div className="experience__content">
              <article className='experience__details'>
                <h4>
                  HTML5, CSS, JQuery, JavaScript, Bootstrap, AJAX, SASS
                </h4>
            </article>
            </div>
        </div>

        <div className="backend">
          <h2>Backend</h2>
          <div className="experience__content">
            <article className='experience__details'>
              <h4>
                MySQL, MongoDB, Express.js, React.js, Node.js, Handlebars, Webpack
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience