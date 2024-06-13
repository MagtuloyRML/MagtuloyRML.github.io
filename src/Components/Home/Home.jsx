import React from 'react'
import './Home.css'
import rmlPic from './assets/images/pic1.png'
import brush from '../../assets/img/brush.svg'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { SocialLinks } from '../Assets/SocialLinks';

const Home = () => {

  const [text] = useTypewriter({
    words: ["Front-End React Developer", "Graphic Illustrator"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 2000,
  })
  
  return (
    <>
      <section className='section home' role="section" id="Home">
        <section className="container">
          <h1 className='container-name-title'>
            HELLO!
            I'M <span className='red'>ERMIL</span> MAGTULOY
          </h1>
          <h2 className='container-name-subtitle red'>
            {text}
            <Cursor className='lower'/>
          </h2>
          <section className={'container-text'}>
            <p>A person with the experience of Full-Stack Development, Web Development and 2D Graphic Illustrator Freelancing, who eager to learn new things to enhance and develop new skills in Web Development and able to share my knowledge in the industry.</p>
          </section>
          <section className='button-container'>
            <SocialLinks />
          </section>
        </section>
        <section className="container">
          <div className='image-container'>
            <img loading="lazy" src={brush} alt='brush' className='brush-image'/>
            <img loading="lazy" src={rmlPic} alt='rml' className='rml-image'/>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home