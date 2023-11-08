import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            
            <li>
              <Link to='/About'>ABOUT US</Link>
            </li>
             
             <li>
               <Link to='/services'>SERVICES</Link>
             </li>

            <li> 
              <Link to='/Contact'>CONTACT</Link>
            </li>
          </ul>

        </nav>
      </header>
    </>
  )
}

export default Header
