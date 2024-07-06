import React from 'react'
import './DummyProperty.css'

const DummyProperty = ({property}) => {
  return (
    <>
        {property === 'exp' ? 
        <>
            <div className='dummy expe'>
                <div className='dummy-title'></div>
                <div className='dummy-sub'></div>
                <div className='dummy-p'></div>
                <div className='dummy-long'></div>
            </div>
            <div className='dummy expe'>
                <div className='dummy-title'></div>
                <div className='dummy-sub'></div>
                <div className='dummy-p'></div>
                <div className='dummy-long'></div>
            </div>
        </> : 
        property === 'project' ? 
        <>
            <div className='dummy proj'>
              <div className='dummy-banner'></div>
              <div className='dummy-title'></div>
              <div className='dummy-sub'></div>
              <div className='dummy-p'></div>
              <div className='dummy-long'></div>
            </div>
            <div className='dummy proj'>
              <div className='dummy-banner'></div>
              <div className='dummy-title'></div>
              <div className='dummy-sub'></div>
              <div className='dummy-p'></div>
              <div className='dummy-long'></div>
            </div>
        </> 
        : property === 'art' ? 
        <>
          <div className='dummy gallery'>
            <div className='dummy-img w-2 h-2'></div>
            <div className='dummy-img w-3 h-1'></div>
            <div className='dummy-img w-3 h-1'></div>
            <div className='dummy-img w-3 h-3'></div>
            <div className='dummy-img w-1 h-3'></div>
            <div className='dummy-img w-2 h-1'></div>
            <div className='dummy-img'></div>
            <div className='dummy-img w-2 h-2'></div>
            <div className='dummy-img'></div>
            <div className='dummy-img w-2 h-1'></div>
            <div className='dummy-img'></div>
            <div className='dummy-img w-3 h-1'></div>
          </div>
        </> : 
        <></>
        }
        
    </>
  )
}

export default DummyProperty