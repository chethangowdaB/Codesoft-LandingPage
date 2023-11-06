import React from 'react'
import Items from './items'
import port from '../assets/serivce.png'
import ecom from '../assets/creative.png'

const projects=[
    {id:"0",title:"User Experience",imageLink:port},
{id:"0",title:"Creative work",imageLink:ecom}
]
const projectcard = () => {
  return (
    <div>
      <center><h2 className='pro'> Our Services</h2>
</center>
        <Items projects={projects}/>
      
    </div>
  )
}

export default projectcard
