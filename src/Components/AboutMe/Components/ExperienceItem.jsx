import React, {useState,useEffect} from 'react';
import parse from 'html-react-parser';
import DummyProperty from '../../Assets/DummyProperty';

const ExperienceItem = () => {
    const [getInfo, setGetInfo] = useState();
  
    useEffect(() => {
        const fetchInfo = async () => {
        const get = await fetch('https://rml-api-server.onrender.com/experience');
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
                    <h4 className='exp-tool-title'>Experienced Tools:</h4>
                    <section className='exp-tool-container'>
                        {item.experienced_tools.map((item, index) => (
                            <p className='exp-tool-item' key={index}>
                                {item}
                            </p>
                        ))}
                    </section>
                </article>
            ))}
        </>
    )
}

export default ExperienceItem