import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>RACE OF ADVANCE COMPUTING & EDUCATION</h1>
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
