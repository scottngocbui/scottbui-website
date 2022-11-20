import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <a href="mailto:scottngocbui@gmail.com" target="_blank">
            <article className="contact_option">
              <SiGmail className='contact_option-icons'/>
              <h4>Email</h4>
            </article>
          </a>
          <a href="www.linkedin.com/in/scottngocbui">
            <article className="contact_option">
              <SiLinkedin className='contact_option-icons'/>
              <h4>LinkedIn</h4>
            </article>
          </a>
        </div>
      </div>
    </section>
  )
}

export default contact