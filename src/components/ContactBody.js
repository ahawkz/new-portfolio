import React from 'react';
import ButtonMailto from './ButtonMailTo';
import '../App.css';
import './ContactBody.css'

function ContactBody() {
  return (
    <div className='contact-container'>
      <h1>Let's work together.</h1>
      <div className='btn-container'>
      <ButtonMailto
        className='btn--large btn--primary email-btn'
        label="Write me an E-Mail"
        mailto="mailto:alexandra.ryan.hawkins@gmail.com" />
      </div>
    </div>
  );
}


export default ContactBody;
