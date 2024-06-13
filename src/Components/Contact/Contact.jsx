import React, {useState} from 'react'
import './Contact.css'
import check from '../../assets/img/Check.svg'
import wrong from '../../assets/img/Wrong.svg'
import spin from '../../assets/img/ripples.svg'
import { MdOutlinePhoneIphone, MdEmail } from "react-icons/md";
import { SocialLinks } from '../Assets/SocialLinks'

const Contact = () => {
    const [send, setSend] = useState(false);
    const [result, setResult] = useState();

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(spin);
        setSend(!send);
        const formData = new FormData(event.target);
        formData.append("access_key", "f859d1d1-4609-4417-a3f8-948420423101");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setTimeout(setResult(check), 5000);
            setSend(false);
            event.target.reset();
        } else {
            setTimeout(setResult(wrong), 5000);
            setSend(false);
        }
    };

    return (
    <>
        <section className='section cont' role="section" id="Contacts">
            <h1 className='section-title'><span className='red'>CONTACT</span> ME</h1>
            <p className='section-p'>If you have any inquiries or somthing to discuss, Here the few ways to reach me out</p>
            <section className='contact-container'>
                <section className='contact'>
                    <h3>Send us a Message</h3>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" required title='Name' />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" required title='Email' />
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" required title='Message' ></textarea>
                        {send === true?
                            <img src={result} className='status' />
                            : <button type="submit">Send</button>
                        }
                    </form>
                </section>
                <section className='contact info'>
                    <h3>Contact Information:</h3>
                    <ul className='contact-info'>
                        <li>
                            <h4><MdOutlinePhoneIphone /></h4>
                            <p>09279187452</p>
                        </li>
                        <li>
                            <h4><MdEmail /></h4>
                            <p>emagtuloy.comm@gmail.com</p>
                        </li>
                    </ul>
                    <div className='social-container'>
                        <SocialLinks />
                    </div>
                </section>
            </section>
        </section>
    </>
    )
}

export default Contact