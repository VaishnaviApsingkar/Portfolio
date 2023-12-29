import React, { useRef } from 'react';
import './contact.css';
import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedinIcon.png';
import Hackerrank from '../../assets/hackerrank.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k1lsjih', 'template_9u8q16e', form.current, 'B029DvvgVPXIIedqC')
          .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email sent.");
          }, (error) => {
                console.log(error.text);
          });
      };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>
                    Please fill out the form below to reach out.
                </span>
                <br/>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name'  name='your_name' required />
                    <input type="email"className='email' placeholder='Your Email' name='your_email' required/>
                    <textarea name="message" className="msg"  rows="5" placeholder='Your Message' required></textarea>
                    <button type='submit' value="Send" className="submitBtn"> Submit </button>
                </form>    
                    <div className='Links'>
                        <a href='https://github.com/VaishnaviApsingkar'><img src={GithubIcon}  alt="github" className="link" /></a>
                        <a href='https://www.linkedin.com/in/vaishnavi-apsingkar-903369166/'><img src={LinkedinIcon}  alt="linkedin" className="link" /></a>
                        <a href="https://www.hackerrank.com/profile/vaishnaviapsing1"><img src={Hackerrank}  alt="hackerrank" className="link" /></a>
                        {/* <a href="" ><img src={LinkedinIcon}  alt="linkedin" className="link" /></a> */}
                    </div> 

                
            </div>
        </section>
    );
}

export default Contact;