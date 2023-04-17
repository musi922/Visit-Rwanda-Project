import React from 'react'
import "./Homepage.css"
import Nav from './Nav'
import { FiInstagram } from "react-icons/fi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import Photo from "../images/Photo.jpg";
import Icon from "../images/Icon.png";
import newsnow from "../images/newsnow.jpg";
import bed from "../images/bed.jpg";
import amer from "../images/amer.jpeg";
import icons from "../images/icons.png";
import Iconbb from "../images/Iconbb.png";
import data from "../images/data.png";
import proj from "../images/proj.jpg";
import dash from "../images/dash.jpg";
import dd from "../images/dd.jpeg";
import science from "../images/science.jpg";
import why from "../images/why.jpg";



import Projectcard from "./Projectcard"
import Newscard from './Newscard'
import { Link } from 'react-router-dom'
import Footer from './Footer'

 export const Homepage = () => {
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

            <Link to={"AboutIA"} style={{textDecoration:"none"}}><h1>About us</h1></Link>
        </div>
        <div className='projects'>
        <Link to={"/Blog"} style={{textDecoration:"none"}}><h1>Blog</h1></Link>
        </div>
        <div className='contact'>
            <Link to={"/Contact"} style={{textDecoration:"none"}}><h1>Contact us</h1></Link>
        </div>
        <div className='Careers'>
           <Link to={"/Careers"} style={{textDecoration:"none"}}> <h1>Careers</h1></Link>
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
      <div className='body'>
        <img src={Photo} className='Photo'/>
        <div className='text'>
          <div className='logistics'>
            <div className='color'></div>
            <h1>Logistics & Supply Chain Solutions</h1>
            <h2>Your Gateway to any Data in the World</h2>
            <h3>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </h3>

            <div className='explos'>
              <div className='rois'></div>
              <p>Explore More</p>

            </div>
          

          </div>
          
        </div>
      </div>
      <div className='about'>
      <div className='ric'>
      <div className='colors'></div>
      <h1>What We Do</h1>
      </div>
      <h2>Safe & Reliable Data Solutions</h2>
      <img src={Icon} className='safe'/>
      <img src={icons} className='saf'/>
      <div className='data'>
        <h1>Data Management</h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={data} className='safe'/>
      </div>
      <div className='bi'>
        <h1>BI & ANALYTICS</h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        
      </div>
      <div className='train'>
        <h1>
        Support And Training
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={Iconbb} className='safed'/>
      </div>
      <div className='cons'>
        <h1>
        Data Dashboards
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>

      </div>
      
      </div>
      <div className='tot'>
      <div className='why'>
       
       </div>
       <div className='whys'>
        
       </div>
      </div>
      <div className='us'>
      <div className='ricy'>
            <div className='color'></div>
            <h1>Why us</h1>
        </div>
        <p>We provide full range Data Cleansing and Intergration Services</p>
        <h2>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 

          Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</h2>
          <div className='picx'></div>
          <div className='picy'></div>
          <div className='come'></div>
          <h3>We give Support and Training</h3>
         
          <div className='help'></div>
          <h4>We help in big Data Consulting</h4>
      </div>
      <div className='proje'>
        <h1>IA Rwanda Projects Across the World</h1>
        <div className='pro'>
        <Projectcard img={proj} head="Intelligence Solutions" desc="Warehouse Management"/>
        <Projectcard img={dash} head="Intelligence Solutions" desc="Warehouse Management"/>
         <Projectcard img={science} head="Intelligence Solutions" desc="Warehouse Management"/>
         <Projectcard img={dd} head="Intelligence Solutions" desc="Warehouse Management"/>
        </div>
      </div>
      
      <div className='wapi'>
      <div className='rico'>
            <div className='coloi'></div>
            <h1>Our Blog</h1>
           
        </div>
        <h2>Our Latest News</h2>
       
         <div className='any'>

       
      
        <div>
          <Newscard imgs={amer} dates="08" day="Thursday" haha="Manager recently made a worthy solution for your business" huhu="We are dedicated in creating added value for our customers by implementing modern technology in our work. " yuh=". Urgent transport solutions" />
        </div>
  

       
        <div>
        <Newscard imgs={bed} dates="06" day="Tuesday" haha="Manager recently made a worthy solution for your business" huhu="We are dedicated in creating added value for our customers by implementing modern technology in our work. " yuh=". Urgent transport solutions" />
        </div>
        <div>
        <Newscard imgs={newsnow} dates="05" day="Monday" haha="Manager recently made a worthy solution for your business" huhu="We are dedicated in creating added value for our customers by implementing modern technology in our work. " yuh=". Urgent transport solutions" />
        </div>
        
        </div> 
      
      </div>
      <div className='yego'>
        <Footer/>
      </div>
    </div>
  )
}

