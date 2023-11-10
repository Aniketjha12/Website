import React from "react"
import "./footer.css"
import Logo from "C:/Proj-Website/Website/src/components/common/header/Logo.png"

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1><img src={Logo} alt="Company Logo" className="logo_img"/></h1>
            <span>Leading provider of Technical Training</span>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Contact us</li>
            </ul>
          </div>
          
          <div className='box last'>
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
