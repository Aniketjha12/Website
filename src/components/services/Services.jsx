import React from "react"
import Back from "../common/back/Back"
// import "./services.css"
// import CourseHome from "./CourseHome"
import LinkedCard from "./LinkedCard"

const Services = () => {
  return (
    <> 
      <Back title='Services' />
      <section className='service'>
        {/* <CourseHome />  */}
         <LinkedCard />
      </section>
    </>
  )
}

export default Services