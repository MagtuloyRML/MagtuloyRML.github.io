import React, { useEffect, useState } from 'react'
import DummyProperty from '../../Assets/DummyProperty'
import useFetch from '../../Assets/useFetch'
import parse from 'html-react-parser';

const Project = () => {
  const [seeMore, setSeeMore] = useState(false);
  const {data, error, loading} = useFetch(seeMore === true ? 'https://rml-api-server.onrender.com/projects' : 'https://rml-api-server.onrender.com/projects?_limit=4');
  return (
    <>
      <section className="container">
      {loading === true ?
        <DummyProperty property={"project"}/>
        : 
        loading === false && data !== null ?
        data.map((item, index) => (
          <article className='project-container' key={index}>
            <img loading='lazy' className='project-banner' src={item.banner}/>
            <h3 className='project-title'>{item.title}</h3>
            <p className='project-date'>{item.date}</p>
            <h4 className='project-use'>Tools Used:</h4>
            <section className='project-para'>{parse(item.description)}</section>
            <ul className='project-lang-list'>
              {item.language.map((data, index) => (
                <li className='project-lang' key={index}>
                  {data}
                </li>
              ))}
            </ul>
            <ul className='project-button-container'>
              <li>
                <a href={item.code} className={`project-links${item.code === "null" ? ' disable' : ''}`} target='_blank'>Check the Code</a>
              </li>
              <li>
                <a href={item.demo} className={`project-links${item.demo === "null" ? ' disable' : ''}`} target='_blank'>Live Demo</a>
              </li>
            </ul>
          </article>
        ))
        :
        loading === false && data === null ?
        <h1>No Project Available</h1>
        :
        error ? <h1>No Project Available</h1>
        :
        <>
        </>
      }
      </section>
      {
        loading === false && data !== null && data.keys().lenght > 4 ?
        <button className='see-content' onClick={() => setSeeMore(!seeMore)} id='see-content'>
          {seeMore === true ? 'See Less...' : 'See More...'}
        </button> :
        <>
        </>
      }
      
    </>
    
  )
}

export default Project