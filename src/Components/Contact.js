import React from 'react'
import './Contact.css'
import Nav from './Nav'
import { FiInstagram } from "react-icons/fi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { Link } from 'react-router-dom'
import Bannerhem from '../images/Bannerhem.png'
import iyi from '../images/iyi.png'
import yal from '../images/yal.png'
import yuh from '../images/yuh.png'
import gay from '../images/gay.png'
import lets from '../images/lets.png'
import { GrNext } from "react-icons/gr"
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Nav/>
      <div className='menus-bar'>
        <div className='submenus'>
        <div className='homes'>
        <Link to={"/"}  style={{textDecoration:"none"}}><h1>Home</h1></Link>
        </div>
        <div className='Servicess'>
        <Link to={"/IAservices"}  style={{textDecoration:"none"}}><h1>Services</h1></Link>
        </div>
        <div className='Abouts'>

            <Link to={"/AboutIA"} style={{textDecoration:"none"}}><h1>About us</h1></Link>
        </div>
        <div className='projectss'>
        <Link to={"/Blog"} style={{textDecoration:"none"}}><h1>Blog</h1></Link>
        </div>
        <div className='contacts'>
        <Link to={"/contact"} style={{textDecoration:"none"}}><h1>Contact us</h1></Link>
        </div>
        <div className='Careerss'>
        <Link to={"/Careers"} style={{textDecoration:"none"}}><h1>Careers</h1></Link>
        </div>
      
        </div>
        <div className='nextmenus'>
        <Link to={"https://www.instagram.com/"} style={{textDecoration:"none", color:"white"}}><FiInstagram/></Link>
            <Link to={"https://www.facebook.com/profile.php?id=100091745804529"} style={{textDecoration:"none", color:"white"}}><AiFillFacebook/></Link>
            <Link to={"https://twitter.com/home"} style={{textDecoration:"none", color:"white"}}><AiOutlineTwitter/></Link>
            <Link to={"https://www.linkedin.com/feed/"} style={{textDecoration:"none", color:"white"}}><AiFillLinkedin/></Link>
            <div className='appoints'>
              Request appoint
            </div>

        </div>

      </div>
      <div className='bodysis'>
        <img src={Bannerhem} className='Photos'/>
        <div className='textss'>
          <div className='logisticss'>
            <div className='colors'></div>
            <h1>Contact</h1>

          </div>
          <h2>Contact Us</h2>
          
        </div>
      </div>
      <div className='faq'>
        <div className='logis'>
            <div className='colos'></div>
            <h1>FAQ</h1>
            <h2>Where can I Find your IA services?</h2>
            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
            <h3>What Other Services available?        <GrNext style={{marginLeft:"15%", position:"absolute"}}/></h3>
            <h4>Where is the IA Group Located?        <GrNext style={{marginLeft:"14%", position:"absolute"}}/></h4>
            <h5>What are the Terms used at Ia?        <GrNext style={{marginLeft:"16%", position:"absolute"}}/></h5>


          </div>
          <div className='level'>
            <img src={gay} style={{height:"50vh", width:"100%", border:"1px solid transparent", borderRadius:"8px"}}/>
          </div>
          <div className='lev'>
            <img src={lets} style={{marginLeft:"15%", marginTop:"5%"}}/>
            <h1>You need any help? get free consultation</h1>
            <img src={yal} style={{height:"40px", marginLeft:"15%"}}/>
            <h3>Have Any Questions : +250799340499</h3>
            <div className='explo'>
              <div className='roti'></div>
              <h1>Contact us</h1>

            </div>
          </div>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className='now'>
      <div className='logi'>
            <div className='colo'></div>
            <h1>Contact</h1>
            

          </div>
          <h2>Get in touch with us</h2>
          <div className='iyi'>
          <img src={iyi}/>
          <img src={yal}/>
          <img src={yuh}/>

          </div>
          <div className='iyo'>
            <h1>Contact@logistics.com</h1>
            <h2>Call us: +250799340499</h2>
            <h3>Mon - Sat 9.00 - 18.00
Sunday Closed</h3>
          </div>
          <div className='user'> 
          <input type='text' name='name' className='name' placeholder='Your name*'/>
          <input type='email' name='name' className='email' placeholder='Your email*'/>
          </div>
          <div className='users'> 
          <input type='text' name='name' className='names' placeholder='Phone Number*'/>
          <input type='text' name='name' className='emails' placeholder='City*'/>
          </div>
          <input type='text' name='message' className='message' placeholder='Your Message'/>
          <div className='exps'>
              <div className='rom'></div>
              <h1>Submit Message</h1>

            </div>
      </div>
      <div className='sif'>
       <Footer/>
      </div>
    </div>
  )
}

export default Contact
