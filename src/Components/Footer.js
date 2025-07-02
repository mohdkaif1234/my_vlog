import React from 'react';
import { useNavigate } from 'react-router-dom';
import facebook from "../logo/facebook.png";
import intagram from "../logo/instagram.png";
import twitter from "../logo/twitter.png";
import youtube from "../logo/youtube.png";
import "./Footer.css";

const Footer = () => {
  const nav = useNavigate();

  return (
    <div className='footerContainner'>

      {/* About Section */}
      <div>
        <h2 className='about'>About Us</h2>
        <hr className='footerHr' />
        <span className='blo-des'>
          This project is based on a front-end label & built using HTML, CSS & React.
        </span>

        {/* Social Media Icons with Real Links */}
        <div className='displayFt'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className='footerLogo' alt='Facebook' src={facebook} height={50} width={50} />
          </a>
          <a
            href="https://www.instagram.com/kaif__7001?igsh=d2h1OXJhOWVvdDk5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='footerLogo' alt='Instagram' src={intagram} height={50} width={50} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img className='footerLogo' alt='Twitter' src={twitter} height={50} width={50} />
          </a>
          <a href="https://www.youtube.com/@mohdkaif5918" target="_blank" rel="noopener noreferrer">
            <img className='footerLogo' alt='YouTube' src={youtube} height={50} width={50} />
          </a>
        </div>
      </div>

      {/* Social Media Link Section (Navigation Inside App) */}
      <div>
        <h2 className='about1'>Social Media Link</h2>
        <hr className='footerHr1' />
        <span className='links1' onClick={() => nav("/")}>Facebook</span>
        <span className='links1' onClick={() => nav("/fitness")}>Instagram</span>
        <span className='links1' onClick={() => nav("/technology")}>Twitter</span>
        <span className='links1'>YouTube</span>
      </div>

      {/* Services Section */}
      <div>
        <h2 className='about1'>Our Services</h2>
        <hr className='footerHr1' />
        <span className='links1'>Bollywood</span>
        <span className='links1'>Hollywood</span>
        <span className='links1'>Fitness</span>
        <span className='links1'>Fitness Food</span>
        <span className='links1'>Technology</span>
      </div>

      {/* Contact Section */}
      <div>
        <h2 className='about1'>Contact</h2>
        <hr className='footerHr1' />
        <span>Mohd Kaif</span>
        <span>Please tell your queries...</span>
        <input type='text' placeholder='Write here' className='question' />
        <button className='qsend'>SEND</button>
      </div>

    </div>
  );
};

export default Footer;
