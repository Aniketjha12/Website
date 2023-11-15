import React from 'react'
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import Back from '../../common/back/Back'

export const ClientsCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Back title='Our Clients' />
    <section className="clients"></section>
    <div>
        <h1>Our Indian Clients</h1>
        <div className="clientlogo"><Link to="https://www.accenture.com/in-en"><img src={Logo} alt="Company Logo" className="clientlogo" /></Link></div>
   
    </div>
    </>
  )
}
export default ClientsCard;