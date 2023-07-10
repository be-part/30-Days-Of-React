import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
        
      const explanation = 'This is a test app to practise React.'
      const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'SQL']
      const images = ["/images/html_logo.png", "/images/css_logo.png", "/images/react_logo.png"]
      const techsFormatted = techs.map((tech) => <li className='techs' key={tech}>{tech}</li>)
      const techsImages = images.map((image) => <li className='images' key={image}><img src={image} alt="" /></li>);


      // JSX element, header
      const header = (
        <header>
            <div className='header-wrapper'>
            <h1>Welcome to a <span className='italic'>30DaysOfReact</span> Project</h1>
            <p>{explanation}</p>
            </div>
        </header>
        )   


      // JSX element, main
      const main = (
        <main>
          <div className='main-wrapper'>
            
            <img className="profile-image" src="/images/blank_profile.png" alt="blank profile silhouette" />
                
            <p className='bold'>YOUR NAME</p>
            <p>Software Developer, UK</p>

            <p className='bold'>SKILLS:</p>
            
            <ul className='skills-list'>{techsFormatted}</ul>

          </div>
        </main>
      )

      // JSX element, techImages

      const techImages = (
        <div className='images-wrapper'>
        <p className='bold'>Front End Technologies</p>
        <ul className='images-list'>{techsImages}</ul>
        </div>
      )

      // JSX element, subscribe

      const subscribe = (
        <div className='form-wrapper'>
          <p className='sign-up-title'>SUBSCRIBE</p>
          <p className='sign-up-text'>Sign-up with your email address to receive news and updates.</p>

          <form >
            <div className='subscribe-form'>
            <input type='text' id='firstname' placeholder='First name' />
            <input type='text' id='lastname' placeholder='Last name' />
            <input type='email' id='email' placeholder='Email' />
            </div>

            <div className='subscribe-form-button'>
            <button >Subscribe</button>
            </div>

          </form>
        </div>
      )

      // JSX element, app
      const app = (
        <div className='app'>
          {header}
          {main}
          {techImages}
          {subscribe}
        </div>
      )


const rootElement = document.getElementById('root')

createRoot(rootElement).render(app);