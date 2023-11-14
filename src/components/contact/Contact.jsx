import React from "react"
import Back from "../common/back/Back"
import "./contact.css"


const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Office no.51,&nbsp;Street no.2,&nbsp;Vatika Kunj,&nbsp;Gurugram 122102</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> raceofeducation@gmail.com</p>
                <p>lavisharora133@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91-8800701946</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name*' required />
                <input type='email' placeholder='Email*' required />
              </div>
              <input type='text' placeholder='Phone No.(optional)' />
              <textarea cols='30' rows='10'>
                PLEASE WRITE YOUR QUERY HERE......
              </textarea>
              <button className='primary-btn'>CONTACT US</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
