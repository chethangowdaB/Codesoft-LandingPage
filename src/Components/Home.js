import React from 'react'
import './home.css'
import Navbar from './navbar';
import Hero from './herosectionforhome';
import image from '../assets/background.png'
import  Header from'./head';
import Footer from './foot.js';
import Projects from'./projectcard';
console.log("Hi")
const Title =(props)=>{
  return (
   <div>
    <Header />
    <Navbar />
    <Hero image={image} p={"WE ARE CREATIVE"}  p2={"Creative digital platform"} p3={"To learn more about Projects click on projects"} btn={"Projects"} btn2={"Request a Consult"}  />
    <Footer />
    <Projects />
   

    

    </div>
    
    )
}


export default Title
