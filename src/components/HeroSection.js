import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='home-background'>
      <div className='color-bg'></div>
      <div className='hero-container'>
        <div className='hero-left'>
          <p className='overline'>hi there</p>
          <h1>I'm Alex, a Frontend Developer based out of West Chester, PA.</h1>
          <div className='hero-btns'>
          <Link to="/about">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>About Me</Button>
          </Link>
          <Link to="/contact">
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Say Hello</Button>
          </Link>
          </div>
        </div>
        <div className='hero-right'>
          <p className='overline'>MY WORK</p>
          <p className='text-large'>Links
          </p>
          <p className='text-large'>Coming
          </p>
          <p className='text-large'>Soon
          </p>
        </div>
      </div>
    </div>
  );
}


export default HeroSection;
