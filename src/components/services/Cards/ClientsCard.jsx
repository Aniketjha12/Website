import React from 'react'
import {Link} from "react-router-dom"
export const ClientsCard = () => {
  return (
    <>
    <section className="indianclients"></section>
    <div>
        <h1>Our Indian Clients</h1>
    <Link to="https://www.google.com/search?q=goo&rlz=1C1RXQR_enIN1082IN1082&oq=goo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTILCAEQRRgnGDsYigUyCQgCECMYJxiKBTIVCAMQLhhDGIMBGMcBGLEDGNEDGIoFMg8IBBAAGEMYgwEYsQMYigUyDAgFEAAYQxixAxiKBTIJCAYQABhDGIoFMgwIBxAAGEMYsQMYigUyDwgIEC4YQxivARjHARiKBTIMCAkQABhDGLEDGIoF0gEKMTM5ODVqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"><img src="https://www.accenture.com/in-en" alt="logo" /></Link>
    </div>
    </>
  )
}
export default ClientsCard;