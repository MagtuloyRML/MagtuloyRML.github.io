import React, { useContext, useState} from 'react'
import useFetch from '../../Assets/useFetch'
import DummyProperty from '../../Assets/DummyProperty'
import { SeeImageContext } from '../../../Context/SeeImage';

const ArtWork = () => {
    const {data, error, loading} = useFetch('https://rml-api-server.onrender.com/gallery?_limit=9');
    const {seeImageContext} = useContext(SeeImageContext);
    return (
    <>
        {loading === false && data !== null ?
        <section className={`gallery-bento`}>
        {
            data.map((item, index) => (
                <article className={`gallery-img-container ${item.width} ${item.height}`}
                key={index} onClick={() => seeImageContext(data[index].full_image, data[index].title, 
                    data[index].date, data[index].links)}>
                    <img src={item.banner} className='gallery-img' alt="art" />
                </article>
            ))
        }
        </section>
        :
            <DummyProperty property="art" />
        }
    </>
    )
}

export default ArtWork