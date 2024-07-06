import parse from 'html-react-parser';
import DummyProperty from '../../Assets/DummyProperty';

const getInfo = [
    {
        "id" : "1",
        "name" : "Bachelor of Science Information Technology",
        "date" : "2018 - 2022",
        "description" : "<p>Graduated in Polytechnic University of the Philippines Biñan Campus</p>",
        "gwa" : "1.57"
    }
];

const Education = () => {
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