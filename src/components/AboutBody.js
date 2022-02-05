import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './AboutBody.css'

function AboutBody() {
  return (
    <div className='content-container'>
      <div className='content-left'>
        <h1 className='overline' tabindex="0">LET ME INTRODUCE MYSELF</h1>
        <h2 tabindex="0">I'm Alex Hawkins, a Frontend Developer with 2+ years of experience building and maintaining user-friendly, accessible websites.</h2>
        <p tabindex="0">Having spent six years in  hospitality prior to transitioning into tech, I aim to create design-forward, innovative websites that put the guest experience first.</p>
        <p>Most recently I've been a Web Developer for Pegasus (newly Cendyn), where we develop websites for hotel clients using a proprietary CMS that allows them to make edits post-launch.</p>
        <p>Not online? You can probably find me staring at a large screen (playing Zelda), staring at a small screen (scrolling through TikTok), on my spin bike (working out with Cody Rigsby), or out for a walk with my  dog, Bub. Yes–that's really his name!</p>
      </div>
      <div className='content-right'>
        <p className='overline' tabindex='0'>Skills</p>
        <ul>
          <li tabindex='0'>JavaScript</li>
          <li tabindex='0'>React</li>
          <li tabindex='0'>HTML</li>
          <li tabindex='0'>CSS</li>
          <li tabindex='0'>Liquid</li>
          <li tabindex='0'>Jekyll</li>
          <li tabindex='0'>Node.js</li>
        </ul>
        <p className='overline' tabindex='0'>& Other</p>
        <ul>
          <li tabindex='0'>Content Management Systems</li>
          <li tabindex='0'>Adobe Creative Suite</li>
          <li tabindex='0'>Github</li>
          <li tabindex='0'>AWS | Netlify</li>
        </ul>
        <p className='overline' tabindex='0'>Strengths</p>
        <ul>
          <li tabindex='0'>Written Communication</li>
          <li tabindex='0'>Detail-oriented</li>
          <li tabindex='0'>Efficient</li>
          <li tabindex='0'>Organized</li>
          <li tabindex='0'>Design-oriented</li>
        </ul>
      </div>
    </div>
  );
}


export default AboutBody;
