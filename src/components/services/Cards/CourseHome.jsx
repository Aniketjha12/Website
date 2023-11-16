import React from "react"
import Back from "../../common/back/Back"
import CoursesCard from "./CoursesCard"
import HAbout from "./HAbout"

const CourseHome = () => {
  return (
    <>
      <Back title='Our Courses' /> 
      <HAbout />
      <CoursesCard />
    </>
  )
}

export default CourseHome
