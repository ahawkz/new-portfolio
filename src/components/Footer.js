import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='links-container'>
        <p class="overline">THE OTHER STUFF</p>
        <div className='links'>
          <a href="https://github.com/ahawkz" target="_blank">github</a> | <a href="https://www.linkedin.com/in/hawkinsalex/" target="_blank">LinkedIn</a> | <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}


export default Footer;
