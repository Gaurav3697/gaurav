import React from 'react';

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  )
};

const NavContent= ()=>(
  <>
  <h2>Gaurav.</h2>
  <div>
    <a href="#Home">Home</a>
    <a href="#Work">Work</a>
    <a href="#timeline">Experience</a>
    <a href="#services">services</a>
    <a href="#testimonial">Testimonial</a>
    <a href="#contact">Contact</a>
  </div>
  <a href="mailto:gm4063420@gmail.com"><button>Email</button></a>
  </>
)

export default Header