
// ContactUs.js
import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling
import { SocialIcon } from 'react-social-icons'
const ContactUs = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to get in touch with us:</p>
      <address>
      <p><SocialIcon network="instagram" href='https://www.instagram.com/djs.nova'/>  <SocialIcon network="linkedin" href='https://www.linkedin.com/company/djs-nova/?originalSubdomain=in'/> </p>
        <p>Email: djsnova09@gmail.com</p>
        
      </address>
    </section>
  );
};

export default ContactUs;
