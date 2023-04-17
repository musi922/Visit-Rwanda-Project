import React from 'react'
import './About.css'
import Nav from './Nav'
import { FiInstagram } from "react-icons/fi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { GoPrimitiveDot } from "react-icons/go"
import hero from "../images/hero.png";
import Abouts from "../images/Abouts.png";
import miss from "../images/miss.jpg";
import culs from "../images/culs.jpg";
import hai from "../images/hai.png";
import shema from "../images/shema.jpg";

import { Link } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Nav/>
      <div className='menu-bar'>
        <div className='submenu'>
        <div className='home'>
        <Link to={"/"}  style={{textDecoration:"none"}}><h1>Home</h1></Link>
        </div>
        <div className='Services'>
            <Link to={"/IAservices"}  style={{textDecoration:"none"}}><h1>Services</h1></Link>
        </div>
        <div className='About'>

            <Link to={"/AboutIA"} style={{textDecoration:"none"}}><h1>About us</h1></Link>
        </div>
        <div className='projects'>
        <Link to={"/Blog"} style={{textDecoration:"none"}}><h1>Blog</h1></Link>
        </div>
        <div className='contact'>
            <Link to={"/Contact"} style={{textDecoration:"none"}}><h1>Contact us</h1></Link>
        </div>
        <div className='Careers'>
           <Link to={"/Careers"} > <h1>Careers</h1></Link>
        </div>
      
        </div>
        <div className='nextmenu'>
        <Link to={"https://www.instagram.com/"} style={{textDecoration:"none", color:"white"}}><FiInstagram/></Link>
            <Link to={"https://www.facebook.com/profile.php?id=100091745804529"} style={{textDecoration:"none", color:"white"}}><AiFillFacebook/></Link>
            <Link to={"https://twitter.com/home"} style={{textDecoration:"none", color:"white"}}><AiOutlineTwitter/></Link>
            <Link to={"https://www.linkedin.com/feed/"} style={{textDecoration:"none", color:"white"}}><AiFillLinkedin/></Link>
            <div className='appoint'>
              Request appoint
            </div>

        </div>

      </div>
       <div className='bodys'>
        <img src={hero} className='Photos'/>
        <div className='text'>
          <div className='logistics'>
           
           
           

            <div className='explore'>
              <div className='rot'></div>
              <h1>Discover</h1>

            </div>
          

          </div>
          
        </div>
        <div className='huh'>
          <img src={Abouts} style={{width:"100%", height:"25vh"}}/>
        </div>
      </div>
      <div className='blog'>
        <div className='blogs'>
          <img src={miss} style={{height:"45vh", width:"100%", border:"1px solid transparent", borderRadius:"8px"}}/>
        </div>
        <div className='hup'>
          <h1> Company mission</h1>
          <p>“Success is based on pro-active and dedicated teamwork in a professional and ethical environment...” </p>
          <h2>We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that leads to creative solutions and fully deserved rewards. This said, we always focus on safety, quality, a detailed approach, and above all, diligent handling of budgetary means to maintain high standards at all levels of our activities, especially in dealings with employees, suppliers, subcontractors, and customers.</h2>
        </div>
        <div className='vis'>
        <h1> Company culture</h1>
        <h2><GoPrimitiveDot/>  Foster a professional and ethical work environment.</h2>
        <h2><GoPrimitiveDot/>  Set safety and quality as our top priorities.</h2>
        <h2><GoPrimitiveDot/>  Encourage creativity and innovation in every aspect .</h2>
        <h2><GoPrimitiveDot/>  Recognize the value of a continuous improvement.</h2>
        <h2><GoPrimitiveDot/>  Be open, listen to our customers, and adapt to change.</h2>
        </div>
        <div className='fot'>
        <img src={culs} style={{height:"45vh", width:"100%", border:"1px solid transparent", borderRadius:"8px"}}/>
        </div>
        <div className='hai'>
        <img src={hai} style={{height:"60vh", width:"100%", border:"1px solid transparent", borderRadius:"8px"}}/>
        <h1>Company vision </h1>
        <p>We aim to be a leading contractor in Rwanda by focusing on the timely implementation of our projects and meeting the expectations and requirements of our customers at the highest possible level.</p>
        </div>
        <div className='founders'>
          <h1>Our Founders </h1>
          <div className='fou'>
        <img src={shema} style={{height:"45vh", width:"90%", border:"1px solid transparent", borderRadius:"8px"}}/>
        <h2>Mr. Shema Frank</h2>
        <h3>Mr. Shema Frank</h3>
        <p>Bachelor’s degree in Applied Mathematics and Data Engineering from University of Rwanda, Cairo, Egypt, 2002. With 20 years of experience in the construction field for the main contractor of the below-listed construction projects before founding Projex-Tec.</p>
        </div>
        </div>
      </div>
      <div className='ing'>
      <Footer/>
      </div>
    </div>
  )
}

export default About
