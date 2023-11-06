import React from 'react'
import './footer.css'
import {FaClock, FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaRocket, FaTimes} from 'react-icons/fa'
const footer = () => {
  return (
    <div className='footer'>
        <div className='foot-container'>
            <div className='left'>
                <div className='location'>
                <div className='add'>
                    <p><FaRocket size={20} style={{color:"white",marginright:"2rem",margintop:"1rem"}}/> LAUNCH UR CAREER</p>
               
                <p className='pa'>LEARN TO BE CREATIVE </p>
                <p className='pa'>FROM INDUSTRY EXPERTS</p>
                </div>
                </div>
                <div className='phone'>
                <p> <FaPhone size={20} style={{color:"white",marginright:"2rem"}}/> +91 725-942-1988</p>
                </div>
                <div className='email'>
                <p><FaMailBulk size={20} style={{color:"white",marginright:"2rem"}}/>  chb21is@cmrit.ac.in</p>

                </div>
                
            </div>
            <div className='right'>
            <div className='add'>
                    <p><FaClock size={20} style={{color:"white",marginright:"2rem",margintop:"1rem"}}/> 24x7 ONLINE SUPPORT</p>
               
                <p className='pa'>WORK FROM YOUR COMFORT</p>
                <p className='pa'>INDUSTRY LEADING TECHNOLOGY</p>
                </div>
                
                
               
                <div className='phone'>
                <p className='pa'>
                  For more details contact  <FaFacebook size={20} style={{color:"white",marginright:"2rem"}}/> <FaGithub size={20} style={{color:"white",marginright:"2rem"}}/> <FaInstagram size={20} style={{color:"white",marginright:"2rem"}}/><FaLinkedin size={20} style={{color:"white",marginright:"2rem"}}/></p>
                </div>
               
           </div>
           </div>
      
    </div>
  )
}

export default footer
