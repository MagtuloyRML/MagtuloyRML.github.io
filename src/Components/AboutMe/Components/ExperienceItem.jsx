import parse from 'html-react-parser';
import DummyProperty from '../../Assets/DummyProperty';

const getInfo = [
    {
        "id" : "1",
        "name" : "TSUKIDEN ELECTRONIC PHIL. INC.",
        "date" : "November 2022 - April 2024",
        "description" : "<p>Full Stack Software Developer specialize in maintaining and developing in-house Windows and Web-based Application for Productions and Traceability Monitoring application in the produced products called <b>RTdbX (Real Time Data Base Expanded).</b></p>",
        "experienced_tools" : ["C#", "SQL (Crud Operation and Database Administration)", "Web Development (HTML, CSS, jQuery, C#)"]
    },
    {
        "id" : "2",
        "name" : "Freelance 2D Graphic Illustrator",
        "date" : "August 2020 - Present",
        "description" : "<p>Illustrating client requested art piece with certain detailed with using digital art application</p>",
        "experienced_tools" : ["Clip Studio Paint", "Adobe Illustrator", "Krita", "Ibis Paint X" , "Medibang" , "Photoshop"]
    }
];

const ExperienceItem = () => {
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