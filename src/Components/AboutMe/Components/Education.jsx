import React, {useState,useEffect} from 'react';
import parse from 'html-react-parser';
import DummyProperty from '../../Assets/DummyProperty';

const Education = () => {
  const [getInfo, setGetInfo] = useState();
  
    useEffect(() => {
        const fetchInfo = async () => {
        const get = await fetch('https://rml-api-server.onrender.com/education');
        const response = await get.json();
        !response ? await null : await setGetInfo(response)
        };
        fetchInfo();
    }, [!getInfo]);

    return (
        <>
            {!getInfo ? 
                <DummyProperty property={"exp"}/>
            : getInfo.map((item, index) => (
                <article className='exp-container' key={index}>
                    <h3 className='exp-title'>
                        {item.name}
                    </h3>
                    <p className='exp-date'>
                        {item.date}
                    </p>
                    <section className='exp-description'>
                        {parse(item.description)}
                    </section>
                    <h4 className='exp-gwa'>GWA: {item.gwa}</h4>
                </article>
            ))}
        </>
    )
}

export default Education