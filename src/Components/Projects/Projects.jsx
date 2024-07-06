import React, {useState} from 'react'
import Project from './Components/Project'
import './Projects.css'

const Projects = () => {
  return (
    <>
      <section className='section project' role="section" id="Projects">
        <h1 className='section-title'>MY <span className='red'>PROJECTS</span></h1>
        <p className='section-p'>Check out my personal projects</p>
        
        <Project /> 
        
        
      </section>
    </>
  )
}

export default Projects