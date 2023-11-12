import React from 'react'
import { useState } from "react"
import "./Cards.css"

export const Card = () => {
  const [cards] = useState([
    {
      title: "Courses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
      image: "../images/about.jpg"
    },
  
    {
      title: "Projects",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
      // image: ".components/services/Cards/about.jpg"
    },
    
    {
      title: "Clients",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
      // image: "./components/services/Cards/about.jpg"
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
                <div className='card'>
                  <div className='card-heading'><h2>{card.title}</h2></div>
                  <div className='img-container'><img src={card.image} alt=''/></div>
                  <div className='card-text'><p>{card.description}</p></div>
                  <div className='explore-btn'><button>Explore</button></div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card
