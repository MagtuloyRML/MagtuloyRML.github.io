import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer'
import Gallery from './Components/Gallery/Gallery'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import { SeeImageContext } from './Context/SeeImage'
import SeeImage from './Components/Assets/SeeImage'
import { useState } from 'react'
import Contact from './Components/Contact/Contact'

function App() {
  const [showImage, setShowImage] = useState(false);
  const [imgLink, setImgLink] = useState();
  const [titleImg, setTitleImg] = useState();
  const [dateImg, setDateImg] = useState();
  const [linksImg, setLinksImg] = useState();

  const seeImage = (img, title, date, links) => {
    setShowImage(!showImage);
    setImgLink(img);
    setTitleImg(title);
    setDateImg(date);
    setLinksImg(links);
    showImage ? 
    document.body.style.overflow = 'unset' 
    : document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <SeeImageContext.Provider value={{showImageContext : showImage, imgLinkContext : imgLink, 
        titleImgContext : titleImg, dateImgContext : dateImg, linksImgContext : linksImg, 
        seeImageContext: seeImage}} >
        <Home />
        <AboutMe />
        <Projects />
        <Gallery  />
        <Contact />
        <Footer />
        <Navbar />
        <SeeImage/>
      </SeeImageContext.Provider>
    </>
  )
}

export default App
