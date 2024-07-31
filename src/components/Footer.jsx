
import React from 'react'
import me from "../assets/logo.png"
import { AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Creator</h2>
        <span>gm4063420@gmail.com</span>
        <p>Always learn and be happy</p>
      </div>

      <aside>
        <h2>My Links</h2>
        <a href="https://github.com/Gaurav3697/">
          <AiFillGithub/><br/>
          <span>Github</span>
        </a>
      </aside>
    </footer>
  )
}

export default Footer