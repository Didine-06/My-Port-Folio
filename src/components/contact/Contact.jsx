import React from 'react'
import './Contact.css'
import Lottie from 'lottie-react'
import { useForm, ValidationError } from '@formspree/react';

import doneAnimation from '../../animations/done.json'
import emailAnimation from '../../animations/Email.json'


function Contact() {

  const [state, handleSubmit] = useForm("mvoewlaa");

 


  return (
    <div className='contact' id='contact' >
      <div className='head flex'>
        <span className='icon-envelope'></span>
        <h1> Contact Us</h1>
      </div>
      <div className='flex' style={{ justifyContent: "space-between" }}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" autoComplete='off' className="contact-form-text" name='nom' placeholder="Your name" required />
          <ValidationError
            prefix="nom"
            field="nom"
            errors={state.errors}
          />
          <input type="email" autoComplete='off' className="contact-form-text" placeholder="Your email" required name='email' />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          
          <textarea className="contact-form-text" placeholder="Your Message" name='message' required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input type="submit" className="contact-form-btn" value={state.submitting ? "sending..." : "send"} disabled={state.submitting} />
          {
            state.succeeded && (
              <p className='p-animation'>
                <Lottie loop={false} animationData={doneAnimation} style={{ height: 40 }} />
                Your message sended succesfully !
              </p>
            )
          }
        </form>

        <div className='contact-right'>
          <Lottie loop={true} animationData={emailAnimation} style={{ height: 450 }} />
        </div>
      </div>

    </div>
  )
}

export default Contact
