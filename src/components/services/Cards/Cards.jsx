import React from 'react'
import { useState } from "react"
import "./Cards.css"
import { useHistory } from 'react-router-dom';

export const Card = () => {
  const history = useHistory();
  const [cards] = useState([
    {
      title: "Courses",
      description: "Unlock your potential with our comprehensive range of courses designed to equip you with the skills demanded by today's fast-paced Tech Industry. From foundational principles to advanced techniques, our courses are designed by industry experts to ensure you stay ahead in your career. Dive into hands-on learning experiences, stay updated with the latest industry trends, and chart your course towards success.",
      image: "../images/about.jpg"
    },
  
    {
      title: "Projects",
      description: "Immerse yourself in practical, real-world projects that bridge the gap between theory and application. Our projects are carefully curated to provide you with hands-on experience, allowing you to apply the skills learned in our courses to solve industry-relevant challenges. Collaborate with peers, build a robust portfolio, and showcase your problem-solving abilities to future employers. Elevate your learning through projects that make a tangible impact.",
       image: "../images/about.jpg"
    },
    
    {
      title: "Clients",
      description: " Our institute has built strong partnerships with leading companies across various sectors. Our clients recognize the quality of education and training our students receive, making them valuable assets in the workforce. Benefit from our extensive network and open doors to exciting career opportunities with organizations that trust and value our graduates.You can visit our clients page to have a look on our Indian and International Clients ",
       image: "../images/about.jpg"
    },
  ]);
  const handleExploreClick = (index) => {
    // Navigate to the '/project' route when the "Explore" button is clicked
    const routes = ['/CourseHome', '/ProjectCard', '/ClientsCard'];
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
