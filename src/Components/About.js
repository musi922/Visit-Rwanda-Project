import React, { useRef } from 'react'
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
import { FaBars, FaTimes} from "react-icons/fa"
import { useMediaQuery } from 'react-responsive';

import { Link } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
  const navRef = useRef();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const Shownavbar = () => {
    navRef.current.classList.toggle("responsive_submenu");}
  return (
    <div>
      {/* <div className='nav'>
      <Nav/>
      </div> */}
      <div className='menu-bar'>
        <div className='submenu' ref={navRef}>
        <div className='home'>
        <Link to={"/"}  style={{textDecoration:"none"}}><h1>Home</h1></Link>
        </div>
        <div className='Services'>
            <Link to={"/IAservices"}  style={{textDecoration:"none"}}><h1>Services</h1></Link>
        </div>
        <div className='About'>

           
            <Link to={"/AboutIA"}  style={{textDecoration:"none",}}><h1 style={{textDecoration:"none",   width: "90px",
  height: "32px",
  border:"4px solid #FFB82B",
  borderRadius: "5px",
  borderLeft:"none",
  borderTop:"none",
  borderRight:"none",
  textAlign: "center",
  alignItems:"center",  transform: "translateX(2%)"
  }}>About us</h1></Link>
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
        {/* <div className='nextmenu'>
        <Link to={"https://www.instagram.com/"} style={{textDecoration:"none", color:"white"}}><FiInstagram/></Link>
            <Link to={"https://www.facebook.com/profile.php?id=100091745804529"} style={{textDecoration:"none", color:"white"}}><AiFillFacebook/></Link>
            <Link to={"https://twitter.com/home"} style={{textDecoration:"none", color:"white"}}><AiOutlineTwitter/></Link>
            <Link to={"https://www.linkedin.com/feed/"} style={{textDecoration:"none", color:"white"}}><AiFillLinkedin/></Link>
            <div className='appoint'>
              Request appoint
            </div>

        </div> */}
        <button onClick={Shownavbar} className='nav-btn nav-close-btn'>
            <FaBars/>
            </button>

      </div>
       <div className='bodys' >
        <img src={hero} className='Photos' style={{width: isSmallScreen? "100%":""}}/>
        <div className='text'>
          <div className='logistics ' style={{display: isSmallScreen?"none":""}}>
           
           
           

            <div className='explore' style={{ marginTop: isSmallScreen? "-400px":"",marginLeft: isSmallScreen? "-45px":"", width: isSmallScreen? "150px":"", height: isSmallScreen?"8vh":""}}>
              <div className='rot'></div>
              <h1>Discover</h1>

            </div>
          

          </div>
          
        </div>
        <div className='huh'>
          <img src={Abouts} style={{width:"100%", height:"25vh", marginTop: isSmallScreen? "-400px":"",marginLeft: isSmallScreen? "-45px":"", width: isSmallScreen? "250px":""}} />
        </div>
      </div>
      <div className='blog' style={{marginTop: isSmallScreen?"-64%":"", height: isSmallScreen ? '300vh':""}}>
        <div className='blogs' style={{width: isSmallScreen?"300px":"", marginTop: isSmallScreen?"60%":"", position: isSmallScreen?"absolute":""}}>
          <img src={miss} style={{height:"45vh", width: "100%", border:"1px solid transparent", borderRadius:"8px", }} />
        </div>
        <div className='hup'>
          <h1 style={{marginTop: isSmallScreen?"-34%":"", marginLeft: isSmallScreen?"-40%":"", fontSize: isSmallScreen?"25px":"", position: isSmallScreen?"absolute":"",}}> Company mission</h1>
          <p style={{marginTop: isSmallScreen?"-44%":"", marginLeft: isSmallScreen?"-96%":"", fontSize: isSmallScreen?"14px":"",  width: isSmallScreen?"310px":""}}>“Success is based on pro-active and dedicated teamwork in a professional and ethical environment...” </p>
          <h2 style={{marginTop: isSmallScreen?"-74%":"", marginLeft: isSmallScreen?"-96%":"", fontSize: isSmallScreen?"12px":"",  width: isSmallScreen?"350px":""}}>We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that leads to creative solutions and fully deserved rewards. This said, we always focus on safety, quality, a detailed approach, and above all, diligent handling of budgetary means to maintain high standards at all levels of our activities, especially in dealings with employees, suppliers, subcontractors, and customers.</h2>
        </div>
        <div className='vis' style={{marginTop: isSmallScreen?"20%":""}}>
        <h1 style={{fontSize: isSmallScreen?"25px":"",  marginLeft: isSmallScreen?"-38%":"" }}> Company culture</h1>
        <h2 style={{fontSize: isSmallScreen?"14px":"", width: isSmallScreen?"350px":"",  marginLeft: isSmallScreen?"-34px":"",}}><GoPrimitiveDot/>  Foster a professional and ethical work environment.</h2>
        <h2 style={{fontSize: isSmallScreen?"14px":"", width: isSmallScreen?"350px":"",  marginLeft: isSmallScreen?"-34px":"",}}><GoPrimitiveDot/>  Set safety and quality as our top priorities.</h2>
        <h2 style={{fontSize: isSmallScreen?"14px":"", width: isSmallScreen?"350px":"",  marginLeft: isSmallScreen?"-34px":"",}}><GoPrimitiveDot/>  Encourage creativity and innovation in every aspect .</h2>
        <h2 style={{fontSize: isSmallScreen?"14px":"", width: isSmallScreen?"350px":"",  marginLeft: isSmallScreen?"-34px":"",}}><GoPrimitiveDot/>  Recognize the value of a continuous improvement.</h2>
        <h2 style={{fontSize: isSmallScreen?"14px":"", width: isSmallScreen?"350px":"",  marginLeft: isSmallScreen?"-34px":"",}}><GoPrimitiveDot/>  Be open, listen to our customers, and adapt to change.</h2>
        </div>
        <div className='fot' style={{width: isSmallScreen?"300px":"", marginTop: isSmallScreen?"3%":"", display: isSmallScreen?"none":"", }}>
        <img src={culs} style={{height:"45vh", width:"100%", border:"1px solid transparent", borderRadius:"8px"}}/>
        </div>
        <div className='hai' style={{marginTop: isSmallScreen?"10%":""}}>
        <img src={hai} style={{height:"60vh", width:"100%", border:"1px solid transparent", borderRadius:"8px"}}/>
        <h1 style={{fontSize: isSmallScreen?"25px":"", marginTop: isSmallScreen?"-74%":"",  marginLeft: isSmallScreen?"9%":"", width: isSmallScreen?"250px":""}}>Company vision </h1>
        <p style={{marginTop: isSmallScreen?"-64%":"", marginLeft: isSmallScreen?"6%":"", fontSize: isSmallScreen?"14px":"",  width: isSmallScreen?"310px":"" , }}>We aim to be a leading contractor in Rwanda by focusing on the timely implementation of our projects and meeting the expectations and requirements of our customers at the highest possible level.</p>
        </div>
        <div className='founders'>
          <h1 style={{fontSize: isSmallScreen?"25px":"", marginTop: isSmallScreen?"4%":"",  marginLeft: isSmallScreen?"9%":"",}}>Our Founders </h1>
          <div className='fou'>
        <img src={shema} style={{height:"45vh", width:"90%", border:"1px solid transparent", borderRadius:"8px" , width: isSmallScreen? "300px":"", marginTop: isSmallScreen?"80%":"", position: isSmallScreen?"absolute":""}}/>
        <h2 style={{fontSize: isSmallScreen?"16px":"", width: isSmallScreen?"350px":"",  display: isSmallScreen?"none":"",}}>Mr. Shema Frank</h2>
        <h3 style={{marginTop: isSmallScreen?"10%":"", marginLeft: isSmallScreen?"19%":"", fontSize: isSmallScreen?"15px":"",  width: isSmallScreen?"250px":"" , }}>Mr. Shema Frank</h3>
        <p style={{marginTop: isSmallScreen?"15%":"", marginLeft: isSmallScreen?"4%":"", fontSize: isSmallScreen?"14px":"",  width: isSmallScreen?"310px":"" , }}>Bachelor’s degree in Applied Mathematics and Data Engineering from University of Rwanda, Cairo, Egypt, 2002. With 20 years of experience in the construction field for the main contractor of the below-listed construction projects before founding Projex-Tec.</p>
        </div>
        </div>
      </div>
      <div className='ing' style={{marginTop: isSmallScreen?"4%":""}}>
      <Footer/>
      </div>
    </div>
  )
}

export default About
