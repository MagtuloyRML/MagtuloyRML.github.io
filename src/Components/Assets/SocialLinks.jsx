import React from 'react'
import { FaGithub,FaLinkedin,FaBehance,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const data = [{ 
    "id" : 1,
    "social" : "github",
    "link" : "https://github.com/MagtuloyRML"
},
{
    "id" : 2,
    "social" : "linkedIn",
    "link" : "https://www.linkedin.com/in/rmlmgtly/"
},
{
    "id" : 3,
    "social" : "behance",
    "link" : "https://www.behance.net/rmlmgtly"
},
{
    "id" : 4,
    "social" : "instagram",
    "link" : "https://www.instagram.com/drw.w.rml/"
},
{
    "id" : 5,
    "social" : "twitter",
    "link" : "https://twitter.com/Drw_w_Rml"
}];

export const SocialLinks = () => {
    
    return (
        <>
            {data ? 
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

