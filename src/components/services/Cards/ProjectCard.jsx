import React from 'react'
import "./ProjectCard.css"
import { useEffect } from 'react';


export const ProjectCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <section className="pro-page">
        <div className="project">
       
        <h1>PROJECTS</h1>
        <ul className="pro-list">
            <li>Training Metrics as Free Lancer Corporate Trainer</li>
            <li>Training Number of Cycles</li>
            <li>Amazon AWS 100+</li>
            <li>ITIL</li>
            <li>ITILO 30+</li>
            <li>Apache Hadoop</li>
            <li>Apache Spark 20+</li>
            <li>Shell Scripting (BASH) 13</li>
            <li>Linux System Programming (Make files, Libraries, IPCs, Multi-Threading, Signals, TCP/IP or Socket or Network Programming) 80</li>
            <li>DevOps – All Modules 200+</li>
            <li>SAN</li>
            <li>NAS 33</li>
            <li>Python (+ Advanced) 14</li>
            <li>Database 50</li>
            <li>Windows Azure 22</li>
            <li>Open stack cloud</li>
            <li>CISCO cloud 90</li>
        </ul>
        </div>
        </section>
    

    </>
  )
}
export default ProjectCard;