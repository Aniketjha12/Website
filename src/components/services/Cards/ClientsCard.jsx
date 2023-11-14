import React from 'react'
import { Link } from "react-router-dom"
import Logo from "./Acc_Logo_Black_Purple_RGB.png"
// import Back from "C:/GitHub Projects/Website/src/components/common/back/Back"
export const ClientsCard = () => {
  return (
    <>
    {/* <Back title="Clients" />
      <ClientsCard /> */}
    <section className="clients"></section>
    <div>
        <h1>Our Indian Clients</h1>
        <div className="clientlogo"><Link to="https://www.accenture.com/in-en"><img src={Logo} alt="Company Logo" className="clientlogo" /></Link></div>
   
    </div>
    </>
  )
}
export default ClientsCard;