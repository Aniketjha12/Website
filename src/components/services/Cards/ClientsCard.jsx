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
    <Link to="https://www.google.com/search?q=goo&rlz=1C1RXQR_enIN1082IN1082&oq=goo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTILCAEQRRgnGDsYigUyCQgCECMYJxiKBTIVCAMQLhhDGIMBGMcBGLEDGNEDGIoFMg8IBBAAGEMYgwEYsQMYigUyDAgFEAAYQxixAxiKBTIJCAYQABhDGIoFMgwIBxAAGEMYsQMYigUyDwgIEC4YQxivARjHARiKBTIMCAkQABhDGLEDGIoF0gEKMTM5ODVqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw17bpraXcRfedq8oKx0R7E0&ust=1699943932138000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCA4-SuwIIDFQAAAAAdAAAAABAH" alt="logo" /></Link>
    </div>
    </>
  )
}
export default ClientsCard;