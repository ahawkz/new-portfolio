import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='home-background'>
      <div className='gray-bg'></div>
      <div className='hero-container'>
        <div className='hero-left'>
          <p className='overline'>hi there</p>
          <h1>I'm Alex, a Frontend Developer based out of West Chester, PA.</h1>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              About Me
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              Say Hello
            </Button>
          </div>
        </div>
        <div className='hero-right'>
          <p className='overline'>MY WORK</p>
          <p className='text-large'>Lorem
          </p>
          <p className='text-large'>Lorem
          </p>
          <p className='text-large'>Lorem
          </p>
          <p className='text-large'>Lorem
          </p>
        </div>
      </div>
    </div>
  );
}


export default HeroSection;
