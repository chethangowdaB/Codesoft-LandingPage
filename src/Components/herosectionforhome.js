import React from 'react'
import './hero.css' 
import {Link} from 'react-router-dom'
const herosec = (props) => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='introimg' src={props.image} alt='introimg'></img>

        </div>
        <div className='content'>
            
            <h2>{props.p2}</h2>
            <p>
                {props.p}
            </p>
            <p>
                {props.p3}
            </p>
            <div >
                
                <Link to='/projects'><button className='btn'>{props.btn}</button></Link>
                <Link to='/contact'><button className='btnn'>{props.btn2}</button></Link>



            </div>

        </div>
      
    </div>
  )
}

export default herosec


