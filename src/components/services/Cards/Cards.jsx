import React from 'react'
import { useState } from "react"
import "./Cards.css"

export const Card = () => {
  const [cards] = useState([
    {
      title: "Courses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
      image: "../images/about.webp"
    },
  
    {
      title: "Projects",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
      image: "../images/about.webp"
    },
    
    {
      title: "Clients",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
      image: "../images/about.webp"
    },
  ]);

  return (
    <div>
      <section>
        <div className='card-container'>
          <h1>Our Services</h1>
          <div className='cards'>
            {
              cards.map((card,i)=>(
                <div key={i} className='card'>
                  <div className='card-heading'><h3>{card.title}</h3></div>
                  <div className='img-container'><img src={card.image} alt=''/></div>
                  <div className='card-text'><p>{card.description}</p></div>
                  <div className='button'><button>Explore</button></div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card
