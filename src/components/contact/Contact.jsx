import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {ImWhatsapp} from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0lk5jd', 'template_b3sz1i2', form.current, 'A58zBEK-v4aQAY1KD')
    e.target.reset()
  };

  return (
    <section id='contact'>
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>
      <div className="container contact_container">
           <div className="contact_options">
             <article className='contact_option'>
                <MdOutlineMail  className='contact_option_icon'/>
                <h4>E-mail</h4>
                <h5  className='email'>asimbangash1999@gmail.com</h5>
                <a href='mailto:asimbangash1999@gmail.com'>Send a message</a>
             </article>
             <article className='contact_option'>
                <RiMessengerLine className='contact_option_icon' />
                <h4>Messenger</h4>
                <h5>Asim Bangash</h5>
                <a href='#'>Send a message</a>
             </article>
             <article className='contact_option'>
                <ImWhatsapp  className='contact_option_icon'/>
                <h4>WhatsApp</h4>
                <h5>+923345815545</h5>
                <a href='https://wa.me/3345815545'>Send a message</a>
             </article>
           </div>
             {/* {End of contact option} */}
           <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Your full name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
      </div>
    </section>
  )
}

export default Contact