import { useEffect, useState } from 'react'
import rmlLogo from '../../assets/img/logo.svg'
import './Navbar.css'
const Navbar = () => {
    const [isShow, setIsShow] = useState('notShow');
    const showPhoneMenu = () => {
        setIsShow((prevState) => 
            prevState === 'show' ? 'notShow' : 'show'
        );
    }
    const resetViewNavbar = () => {
        window.innerWidth > 600 ? setIsShow('notShow') : null;
    }
    useEffect(() => {
        window.addEventListener('resize', resetViewNavbar);
        return() => {
            window.removeEventListener('resize', resetViewNavbar)
        }
    }, [window.innerWidth])

  return (
    <header className='navbar' loading="lazy">
        <section className='side-logo-sect'>
            <img src={rmlLogo} alt="RML" className='side-logo' />
            <p className='side-logo-text'>
                <span>RML</span>
                <span>MGTLY</span>
            </p>
        </section>
        <ul className={`nav-menu ${isShow}`}>
            <li className="menu-bttn">
                <a href="#Home" className='a' ariallabelby="Home" onClick={() => setIsShow('notShow')}>Home</a>
            </li>
            <li className="menu-bttn">
                <a href="#About_Me" className='a' ariallabelby="About_Me" onClick={() => setIsShow('notShow')}>About Me</a>
            </li>
            <li className="menu-bttn">
                <a href="#Projects" className='a' ariallabelby="Projects" onClick={() => setIsShow('notShow')}>Projects</a>
            </li>
            <li className="menu-bttn">
                <a href="#Gallery" className='a' ariallabelby="Gallery" onClick={() => setIsShow('notShow')}>Gallery</a>
            </li>
            <li className="menu-bttn">
                <a href="#Contacts" className='a' ariallabelby="Contacts" onClick={() => setIsShow('notShow')}>Contacts</a>
            </li>
            <li className='nav-footer'>
                <div className='nav-footer-underline'></div>
                <span className='nav-footer-text'>
                    RML MGTLY <br />
                    Based in Republic of the Philippines<br />
                    <br />
                    emagtuloy.comm@gmail.com<br />
                    rml.comm09@gmail.com<br />
                    © Copyright 2024 
                </span>
            </li>
        </ul>
        <button className={`right-bttn ${
            isShow === 'show' ? 'x' : ''
        }`} onClick={() => showPhoneMenu()} >
            <span className='x-form'></span>
            <span className='x-form'></span>
            <span id='last' className='x-form last'></span>
        </button>
    </header>
  )
}

export default Navbar