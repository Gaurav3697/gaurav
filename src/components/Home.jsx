import React from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronBarDown } from "react-icons/bs";
import me from "../assets/logo.png";
import { useRef } from "react";

const Home = () => {
  // const clientCount = useRef(null);
  const projectCount = useRef(null);

  // const animationClientsCount = () => {
  //   animate(0, 100, {
  //     duration: 1,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };

  const animationProjectCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: { x: "100%", opacity: 1 },
      whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
  };

  return (
    <div id="Home">
      <section>
        <motion.h1 {...animation.h1}>Hello! I Am Gaurav</motion.h1>
        <Typewriter
          options={{
            strings: ["A Developer", "A Programmer", "A Freelancer" , "A Life Long Learner"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriterpara",
            cursor: null,
          }}
        ></Typewriter>

        <div>
          <a href="mailto:gm4063420@gmail.com">Hire me</a>
          <a href="#work">
            Projects
            <BsArrowUpRight />
          </a>
        </div>

        <aside>
          {/* <article>
            <p>
              +
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Clients</span>
          </article> */}
          <article>
            <p>
              +
              <motion.span
                whileInView={animationProjectCount}
                ref={projectCount}
              ></motion.span>
            </p>
            <span>Projects Done</span>
          </article>
        </aside>
        <article>
          <p>Contact</p>
          <span>gm4063420@gmail.com</span>
        </article>
      </section>

      <section className="sectiontwo">
        <img src={me} alt="pic" />
        <BsChevronBarDown />
      </section>
    </div>
  );
};

export default Home;
