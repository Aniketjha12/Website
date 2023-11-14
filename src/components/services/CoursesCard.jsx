import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { useEffect } from 'react';

const CoursesCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
