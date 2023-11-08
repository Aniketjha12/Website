import React from "react"
import Heading from "../common/heading/Heading"
import Message from "./Message"
import "./about.css"


const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='About US' title='RACE of Advance Computing & Education Pvt. Ltd' />
            <div className="mission"><p>RACE (formerly-RACE of Advance Computing and Education Pvt Ltd) is a leading provider of technical training in the Gurgaon Division, HR. It was co-founded by Mr Lavish Arora in the Year 2014. Currently we have the team of 125+ employees working in our 3 operational branches(Gurugram, Tilak Nagar & Chandigarh With a focus on delivering high-quality education and practical skills we are dedicated to helping individuals and organizations thrive in the rapidly evolving technical landscape.</p></div>
            <div className="item"><h1>Our Mission</h1>
            <div className='mission'>
            <p>Our mission is to deliver high-quality education, innovative solutions, and practical skills that
                drive success in the ever-evolving technical landscape. We are committed to fostering growth,
                innovation, and excellence in every endeavor.Our team of experienced instructors and industry experts
                ensure that our training programs are up-to-date, relevant,and tailored to meet the specific needs of our clients.
                Whether you are looking to enhance your own technical skills or empower your team with the latest knowledge,
                RACE Pvt Ltd is here to support your growth and success.
            </p>
            </div>
            </div> 
          </div>
        </div>
        <Message/>
      </section>
    </>
  )
}

export default AboutCard
