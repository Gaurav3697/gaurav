import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle } from "react-icons/ai";

const Services = () => {
  const Service = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: -100,
      opacity: 0,
    },
    Two: {
      x: 100,
      opacity: 0,
    },
  };

  return (
    <div id="services">
      <h1>Services</h1>
      <section>
        <motion.div
          className="ServiceBox1"
          whileInView={Service.whileInView}
          initial={Service.one}
        >
          <p>1+</p>
          <span>EXPERIENCE</span>
        </motion.div>

        <motion.div
          className="ServiceBox2"
          whileInView={Service.whileInView}
          initial={Service.Two}
        >
          <AiFillIeCircle />
          <span>WEB DEVELOPMENT</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
