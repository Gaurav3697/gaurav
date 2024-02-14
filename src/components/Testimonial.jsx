import React from 'react'

const Testimonial = () => {

  const TestimonialCard = ({name,comment})=>(
    <div className="testimonialCard">
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Users"/>
    <h3>{name}</h3>
    <p>{comment}</p>
    </div>
  );

  return (
    <div id="testimonial">
      <h1>TESTIMONIAL</h1>
      <section>
        <TestimonialCard
          name={"Sam"}
          comment={"A Nice Programmer"}
        />
        <TestimonialCard
        name={"daniel"}
          comment={"Made a interactive website so fast for me"}
        />
        <TestimonialCard
          name={"Peter"}
          comment={"You are a good programmer"}
        />
      </section>
    </div>
  )
}

export default Testimonial