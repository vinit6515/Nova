// AboutUs.js
import React from 'react';
import Accordion1 from './Accordion1';

const AboutUs = () => {
  
  return (
    <section className="container mt-5">
      <h2>About Us</h2>
      <p>We are DJS NOVA, the official Astronomy Club of DJ Sanghvi College of Engineering. Our club aims to rekindle the spirit of Indian astronomy and raise awareness about the tools and techniques in field of astronomy and astrophysics. </p>
      <Accordion1/>
      <ul>
        
        <li>Organize stargazing events and workshops.</li>
        <li>Connect astronomy enthusiasts and promote research.</li>
      </ul>
      <p>Join us on our celestial journey!</p>
    </section>
  );
};

export default AboutUs;
