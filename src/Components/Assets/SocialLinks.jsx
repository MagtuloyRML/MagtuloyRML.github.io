import React from 'react'
import { FaGithub,FaLinkedin,FaBehance,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import useFetch from './useFetch';

export const SocialLinks = () => {
    const {data, error, loading} = useFetch('https://rml-api-server.onrender.com/social_links')
    return (
        <>
            {!loading && data ? 
                data.map((link, index) => (
                    <a href={link.link} key={index} className='button-link' target="_blank" 
                    title={link.social.charAt(0).toUpperCase()+link.social.substr(1)}>
                        {link.social === "github" ? <FaGithub /> :
                        link.social === "linkedIn" ? <FaLinkedin /> :
                        link.social === "behance" ? <FaBehance /> :
                        link.social === "instagram" ? <FaInstagram /> :
                        link.social === "twitter" ? <BsTwitterX /> : null}
                    </a>
                ))
            : <>
                <div className='button-link skeleton'></div>
                <div className='button-link skeleton'></div>
                <div className='button-link skeleton'></div>
            </>
            
            }
        </>
    )
}

