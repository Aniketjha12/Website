import React from 'react';
import './LinkedCard.css'; // Import the CSS file for styling (create this file)

const LinkedCard = () => {
  // Define the URL you want the card to link to
  const linkURL = 'CourseHome.jsx';

  // Function to redirect to the link URL
  const redirectToLink = () => {
    window.location.href = linkURL;
  };

  return (
    <div className="linked-card" onClick={redirectToLink}>
      <h2>Click Me!</h2>
      <p>Click this card to go to {linkURL}</p>
    </div>
  );
};

export default LinkedCard;
