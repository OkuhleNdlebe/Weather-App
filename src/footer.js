import React from 'react';

const Footer = (props) => {
  return (
    <footer id='footer' style={footerStyle}>
    <p > Made with ❤️ by <a className='text-white underline hover:text-green-300' href='https://github.com' target='_blank'>&copy;Okuhle Ndlebe @ Capaciti</a></p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#8250DF',
  color:'white',
  padding: '1rem',
  textAlign: 'center',
  width: '100%',
  bottom:'0',
  position:'Fixed'
};

export default Footer;
