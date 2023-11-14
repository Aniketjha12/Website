import React from 'react'
import { useState } from "react"
import "./Cards.css"
import { useHistory } from 'react-router-dom';

export const Card = () => {
  const history = useHistory();
  const [cards] = useState([
    {
      title: "Courses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
      image: "../images/about.jpg"
    },
  
    {
      title: "Projects",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
       image: "../images/about.jpg"
    },
    
    {
      title: "Clients",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar purus nunc, sit amet auctor sem aliquam et. Nunc vulputate varius magna in convallis. Vestibulum non sem interdum nibh eleifend pellentesque quis nec purus. Ut sit amet elit id nisl sollicitudin",
       image: "../images/about.jpg"
    },
  ]);
  const handleExploreClick = (index) => {
    // Navigate to the '/project' route when the "Explore" button is clicked
    const routes = ['/CoursesCard', '/ProjectCard', '/ClientsCard'];
    history.push(routes[index]);
  };
  return (
    <div>
    
      <section>
        <div className='card-container'>
          <h1>Our Services</h1>
          <div className='cards'>
            {
              cards.map((card,i)=>(
                <div className='card' key={i}>
                  <div className='card-heading'><h2>{card.title}</h2></div>
                  <div className='img-container'><img src={card.image} alt=''/></div>
                  <div className='card-text'><p>{card.description}</p></div>
                  <div className='explore-btn'><button onClick={() => handleExploreClick(i)}>Explore</button></div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card
