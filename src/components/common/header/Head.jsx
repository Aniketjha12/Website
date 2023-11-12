import React from "react"
import Logo from "../header/Logo.png"
import "./header.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className="pic"><img src={Logo} alt="Company Logo" className="Logo" /></div>
          <div className="main-heading">
            <h1>RACE OF ADVANCE COMPUTING & EDUCATION</h1>
            <h4>Leading provider of Technical Training</h4>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
