import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn,setDisableBtn] = useState(false)

  const submitHandler = async(e) => {
    setDisableBtn(true)
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      toast.success("Sent Successfully");
      setDisableBtn(false)
    } catch (error) {
      console.log(error)
      toast.error("Some Error occured");

      setDisableBtn(false)
    }
    
  };

  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact me</h2>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="text"
            placeholder="Your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          <button disabled={disableBtn} type="submit">SEND</button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="Contact Us" />
      </aside>
    </div>
  );
};

export default Contact;
