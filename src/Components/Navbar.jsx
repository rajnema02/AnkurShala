import React from 'react'
import logo from '../assets/img/logo.png';
const Navbar = () => {
  return (
    <>
        <div class=" text-center">
        <div className="row" style={{ background: '#0B527A'}}>
             <div class="col-5 text-white d-flex align-items-center justify-content-center">
             <div className="logo d-flex align-items-center">
               <img src={logo} alt="Ankurshala logo" />
                 <div className="ms-2" >
                    <h3>Ankurshala</h3>
                    <p>On Demand Learning</p>
                 </div>
             </div>
             </div>
             <div class="col-5 text-center d-flex align-items-center justify-content-end">
                 <button className="btn bg-white px-4 me-2" style={{ color: '#1291A3', borderColor: '#1291A3' }}>
                     THE APP
                  </button>
                   <button className="btn px-4 text-white" style={{ background: '#1291A3', borderColor: 'white' }}>
                      JOIN IN
                   </button>
             </div>
           </div>
        </div>
    </>
  )
}

export default Navbar
