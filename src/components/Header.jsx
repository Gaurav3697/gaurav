import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav>
      <h2>Gaurav.</h2>
      <div className={showMediaIcons ? "HamBurger" : "NavBarComputer"}>
        <div className={showMediaIcons ? "HamBurgerComputerLinks" : "NavBarComputerLinks"}>
          <a href="#Home">Home</a>
          {/* <a href="#Work">Work</a> */}
          <a href="#timeline">Experience</a>
          <a href="#services">services</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="mailto:gm4063420@gmail.com">
          <button>Email</button>
        </a>
      </div>
      <a
        href="#home"
        onClick={() => {
          setShowMediaIcons(!showMediaIcons);
        }}
      >
        <GiHamburgerMenu />
      </a>
    </nav>
  );
};

export default Header;
