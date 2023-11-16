import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"
import Logo from "../header/Logo.png"

const Footer = () => {
  const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      
      <footer>
        <div className='container padding'>
          <div className='logo'>
            <h1><img src={Logo} alt="Company Logo" className="logo_img"/></h1>
          </div>
            <div className="test">
            <span>Leading provider of Technical Training</span>
            </div>
          
          <div className="icons">
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          <div className='link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to='/' onClick={scrollToTop}>Home</Link></li>
              <li><Link to='/About' onClick={scrollToTop}>About Us</Link></li>
              <li><Link to='/services' onClick={scrollToTop}>Services</Link></li>
              {/* <li>Courses</li> */}
              <li><Link to='/Contact' onClick={scrollToTop}>Contact us</Link></li>
            </ul>
          </div>
          
          <div className='last'>
            <h3>Details</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>&nbsp;&nbsp;
                Office no. 51, Street no. 2 , Vatika Kunj , Gurugram 122102
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>&nbsp;&nbsp;
                +918800701946
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved by RACE OF ADVANCE COMPUTING & EDUCATION
        </p>
      </div>
    </>
  )
}

export default Footer
