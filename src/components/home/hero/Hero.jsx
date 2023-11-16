import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
          
            <Heading subtitle='WELCOME TO RACE of Advance Computing & Education Pvt. Ltd
' title='Best Training Institute' />
            <h4>You are at the right place if you want to brighten your future!</h4>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
