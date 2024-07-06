import React from 'react'
import './AboutMe.css'
import realME from '../../assets/img/IMG_1684-removebg-small.png'
import brush from '../../assets/img/brush.svg'
import ExperienceItem from './Components/ExperienceItem';
import Education from './Components/Education';

const AboutMe = () => {
    return (
        <section className='section about-me' role="section" id="About_Me">
            <section className='container me'>
                <article className='info-container'>
                    <h1 className='info-title'>
                        ABOUT <span className='red'>ME</span>
                    </h1>
                    <section>
                        <p>
                            I’m Ermil Magtuloy, working as a Freelance Graphic Illustrator, previously working as a Full Stack Developer and aspiring Front-End Developer based in Philippines.<br/>
                            <br/>
                            I really love to draw something tickle in my mind specially fan arts and I really like to adapt it in making website. As they said “Without heartfelt dedication to one's work, art cannot exist”.
                        </p>
                    </section>
                </article>
                <div className='about-img-container'>
                    <img src={brush} alt="ME" className='about-brush' />
                    <img src={realME} alt="ME" className='about-pic' />
                </div>
            </section>
            <section className='container exp'>
                <h2 className='info-subtitle'>
                    EXPERIENCE
                </h2>
                    <ExperienceItem />
            </section>
            <section className='container exp'>
                <h2 className='info-subtitle'>
                    EDUCATION
                </h2>
                    <Education />
            </section>
        </section>
    )
}

export default AboutMe