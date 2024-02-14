import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
// import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";

function App(){
  return <>
  <Header/>
  <Home/>
  {/* <Work/> */}
  <Experience/>
  <Services/>
  <Testimonial/>
  <Contact/>
  <Footer/>
  <Toaster/>
  </>
}

export default App;


// To start npm run start