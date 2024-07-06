import React from 'react'
import './Gallery.css'
import ArtWork from './Components/ArtWork'

const Gallery = () => {
  return (
    <>
      <section className='section art' role="section" id="Gallery">
        <h1 className='section-title'>MY <span className='red'>GALLERY</span></h1>
        <p className='section-p'>How about my Art Gallery, Check it out?</p>
        <ArtWork />
      </section>
    </>
  )
}

export default Gallery