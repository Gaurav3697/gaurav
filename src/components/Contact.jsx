import React, { useState } from 'react'
import vg from "../assets/vg.png"
import toast from 'react-hot-toast'

const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(name,email,message);
    toast.success("Sent Successfully");
  }


  return (
    <div id="contact">
        <section>
          <form onSubmit={submitHandler}>
            <h2>Contact me</h2>
            <input type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)} value={name} required/>
            <input type="email" placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} value={email}  required/>
            <input type="text" placeholder='Your message' onChange={(e)=>setMessage(e.target.value)} value={message} required/> 
            <button type='submit'>SEND</button>
          </form>
        </section>
        <aside>
            <img src={vg} alt='Contact Us'/>
        </aside>
    </div>
    )
}

export default Contact;