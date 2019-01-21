import React from 'react';

const Footer = () => (
  <div className='footer'>
    ©
    {` ${new Date().getFullYear()} `}
    Chiew Carol
  </div>
);

export default Footer;