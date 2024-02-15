import React from 'react';
import data from "../assets/data.json";

const Experience = () => {
  const TimeLineItem =({heading,text,Date,index})=> (
    <div className={ ` TimeLineItem ${ index%2===0 ?"even":"odd"}`}>
      <h2>{heading}</h2>
      <p>{text}</p>
      <span>{Date}</span>
    </div> 
  );

  return (
    <div id="timeline">
      <h1 >Timeline</h1>
      <div className='TimeLineBox'>
        {data.projects.map((item,index)=>(
          <TimeLineItem
            key={item.key}
            heading={item.title}
            text={item.description}
            Date={item.date}
            index={index}
          />
        ))}
      </div>
    </div>
  )

}

export default Experience