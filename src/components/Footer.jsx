import React from 'react'
import './Footer.css'
import {FaReact} from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { ImPhone } from "react-icons/im"


const Footer = () => {
    return(
        <div className='main-footer'  style={{ marginTop: "40px" }}>
          <div className='container'>
           <div className='row'>
             <div className='col-md-3 col-sm-6'>
               <h4>Tecnologías usadas para este sitio</h4>
               <ul className='list-unstyled'>
                   <li>Html5 <AiFillHtml5/></li>
                   <li>Css3 <FaCss3/></li>
                   <li>React Js <FaReact/></li>
                   <li>Bootstrap5 <FaBootstrap/></li>
               </ul>
             </div>

             <div className='col-md-3 col-sm-6'>
              
             </div>

             <div className='col-md-3 col-sm-6'>
               <h4>Contactos</h4>
               <ul className='list-unstyled'>
                   <li></li>
                   <li><ImPhone/> +593 999637950</li>
               </ul>
             </div>
             <div className='col-md-3 col-sm-6'>
             <p className='text-xs-center'>
                &copy;{new Date().getFullYear()} CV  - All Rights Reserved
              </p>
             </div>
           </div>
          </div>
        </div>
    )
}

export default Footer