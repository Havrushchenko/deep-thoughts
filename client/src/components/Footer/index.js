import React from 'react';
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">&copy;{year} by Havrushchenko</div>
    </footer>
  );
};

export default Footer;
