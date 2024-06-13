import React, { useContext, useState } from 'react'
import { SeeImageContext } from '../../Context/SeeImage'
import { FaBehance, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SeeImage = () => {
  const {showImageContext, imgLinkContext, titleImgContext, dateImgContext, linksImgContext, seeImageContext} = useContext(SeeImageContext);
  const showImage = showImageContext;
  const imgLink = imgLinkContext;
  const title = titleImgContext;
  const date = dateImgContext;
  const links = linksImgContext; 
  return (
    <>
      {showImage?
        <div className={`modal-image ${showImage ? 'show' : ''}`} id='modal-image'>
          <div className='full-img-container'>
            <img loading="lazy" src={imgLink} alt="image" className='img-full' />
            <div className='img-details'>
              <h3 className='img-title'>{title}</h3>
              <h4 className='img-subtitle'>{date}</h4>
              <ul className='img-link-container'>
                <li>
                  <a href={links.behance} target='_blank' title='Behance'><FaBehance /></a>
                </li>
                <li>
                  <a href={links.instagram} target='_blank' title='Instagram'><FaInstagram /></a>
                </li>
                <li>
                  <a href={links.twitter} target='_blank' title='Twitter'><FaXTwitter /></a>
                </li>
              </ul>
            </div>
          </div>
          <button className='bg-bttn' onClick={() => seeImageContext('', '', '', '')}></button>
        </div> 
      :
      <>
      </>
      }
    </>
    
    
  )
}

export default SeeImage