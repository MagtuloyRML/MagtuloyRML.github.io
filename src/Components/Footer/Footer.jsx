import React from 'react'
import './Footer.css'
import rmlLogo from '../../assets/img/logo.svg'
import dp from '../../assets/img/dppic.png'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { SocialLinks } from '../Assets/SocialLinks'

const Footer = () => {
    const [text] = useTypewriter({
        words: ["Front-End React Developer", "Graphic Illustrator"],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 80,
        delaySpeed: 2000,
    })
  return (
    <>
        <footer loading="lazy" className='footer'>
            <section className='footer-logo-container'>
                <img loading="lazy" src={rmlLogo} alt="rml" className='logo-image'>
                </img>
            </section>
            
            <section className='footer-profile'>
                <img loading="lazy" src={dp} alt="rml" className='footer-pic' />
                <div className='footer-text-container'>
                    <h3 className='name'>
                        <span className='red'>ERMIL</span> MAGTULOY
                    </h3>
                    <p className='role'>
                        {text}
                        <Cursor />
                    </p>
                </div>
            </section>

            <section className='footer-menu'>
                <ul className="menu-list">
                    <li className="menu-item">
                        <a href="#Home" ariallabelby="Home" className="footer-bttn">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#About_Me" ariallabelby="About_Me" className="footer-bttn">About Me</a>
                    </li>
                    <li className="menu-item">
                        <a href="#Projects" ariallabelby="Projects" className="footer-bttn">Projects</a>
                    </li>
                    <li className="menu-item">
                        <a href="#Gallery" ariallabelby="Gallery" className="footer-bttn">Gallery</a>
                    </li>
                    <li className="menu-item">
                        <a href="#Contacts" ariallabelby="Contacts" className="footer-bttn">Contacts</a>
                    </li>
                </ul>
            </section>
            <section className='footer-social'>
                <h3 className='title'>
                    Visit Us in our Social:
                </h3>
                <section className='footer-button-container'>
                    <SocialLinks />
                </section>
            </section>
            <section className='footer-copy'>
                <div className='footer-line'></div>
                <p className='footer-copy-text'>
                    Copyright © 2024 All Rights Reserved
                </p>
            </section>
        </footer>
    </>
  )
}

export default Footer
