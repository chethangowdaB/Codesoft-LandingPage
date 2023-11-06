import React from 'react'
import './head.css'
import {FaFacebook, FaGithub,  FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
const footer = () => {
  return (
    <div className='head'>
      <div className='ph'>
                <p> <FaFacebook size={20} style={{color:"white",marginright:"2rem"}}/> <FaGithub size={20} style={{color:"white",marginright:"2rem"}}/> <FaInstagram size={20} style={{color:"white",marginright:"2rem"}}/><FaLinkedin size={20} style={{color:"white",marginright:"2rem"}}/></p>
                </div>
         <div className='ph'>
                <p> <FaPhone size={20} style={{color:"white",marginright:"2rem"}}/> +91 725-942-1988</p>
                </div>
                
              <div className='em'>
                <p><FaMailBulk size={20} style={{color:"white",marginright:"2rem"}}/>  chb21is@cmrit.ac.in</p>

                </div>
                
                <div className='emb'>
                <button className="button-33" >RequestCall</button>


                </div>

      
        
      
    </div>
    
  )
}

export default footer
