import React, { useRef } from 'react'
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
import { FaBars, FaTimes} from "react-icons/fa"
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const navRef = useRef();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const Shownavbar = () => {
    navRef.current.classList.toggle("responsive_submenu");}
  return (
    <div>
      <div className='nav'>
      <Nav/>
      </div>
      <div className='menus-bar'>
        <div className='submenus' ref={navRef}>
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
        <button onClick={Shownavbar} className='nav-btn nav-close-btn'>
            <FaBars/>
            </button>

      </div>
      <div className='bodysis' style={{height: isSmallScreen ? '80vh':""}}>
        <img src={Bannerhem} className='Photos' style={{width: isSmallScreen ? '100%':'',}}/>
        <div className='textss' style={{marginTop: isSmallScreen ? '-98%':'',}}>
          <div className='logisticss'>
            <div className='colors'></div>
            <h1>Contact</h1>

          </div>
          <h2 style={{fontSize: isSmallScreen ? '32px' :"", width: isSmallScreen ? '162px' :"", marginTop: isSmallScreen ? '42px' :""}}>Contact Us</h2>
          
        </div>
      </div>
      <div className='faq' style={{width: isSmallScreen ? '387px':"", marginLeft: isSmallScreen?"-4%":"",height: isSmallScreen ? '140vh':""}}>
        <div className='logis'>
            <div className='colos' style={{marginLeft: isSmallScreen ? '-10px':"",}}></div>
            <h1>FAQ</h1>
            <h2 style={{fontSize: isSmallScreen ?  '20px':'',marginLeft: isSmallScreen ?  '-10%':'',marginTop: isSmallScreen ?  '343%':'', width: isSmallScreen?"290px":"", position: isSmallScreen?"absolute":""}}>Where can I Find your IA services?</h2>
            <p style={{fontSize: isSmallScreen ?  '14px':'', width: isSmallScreen?"340px":"", marginLeft: isSmallScreen ?  '-20%':'',}}>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of .</p>
            <h3 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '10%':'',marginTop: isSmallScreen ?  '18%':'', width: isSmallScreen?"250px":""}}>What Other Services available?        <GrNext style={{marginLeft:"15%", position:"absolute"}}/></h3>
            <h4 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '10%':'',marginTop: isSmallScreen ?  '16%':'', width: isSmallScreen?"250px":""}}>Where is the IA Group Located?        <GrNext style={{marginLeft:"14%", position:"absolute"}}/></h4>
            <h5 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '10%':'',marginTop: isSmallScreen ?  '16%':'', width: isSmallScreen?"250px":""}}>What are the Terms used at Ia?        <GrNext style={{marginLeft:"16%", position:"absolute"}}/></h5>


          </div>
          <div className='level' style={{marginTop: isSmallScreen ? '140%':"",  width: isSmallScreen?"300px":"",marginLeft: isSmallScreen ? '12%':"", }}>
            <img src={gay} style={{height:"50vh", width:"100%", border:"1px solid transparent", borderRadius:"8px"}}/>
          </div>
          <div className='lev' style={{marginTop: isSmallScreen ? '120%':"", marginLeft: isSmallScreen ? '15%':"", width: isSmallScreen ? '280px':"",}}>
            <img src={lets} style={{marginLeft:"15%", marginTop:"5%"}}/>
            <h1 style={{fontSize: isSmallScreen ? "16px":"", width: isSmallScreen ? '280px':"", marginLeft: isSmallScreen ? '10%':"",  marginTop: isSmallScreen ? '4%':"",}}>You need any help? get free consultation</h1>
            <img src={yal} style={{height:"40px", marginLeft:"15%" }}/>
            <h3 style={{ marginTop: isSmallScreen ? '-58%':"",}}>Have Any Questions : +250799340499</h3>
            <div className='explo'>
              <div className='roti'></div>
              <h1 style={{ marginTop: isSmallScreen ? '2%':"",  width: isSmallScreen ? '200px':"",}}>Contact us</h1>

            </div>
          </div>
        <h1 style={{marginTop: isSmallScreen ? '20%':"",}}>Frequently Asked Questions</h1>
      </div>
      <div className='now'  style={{marginTop: isSmallScreen ? '6%':"",  width: isSmallScreen?"176px":"", marginLeft: isSmallScreen ? '-91%':"", }}>
      <div className='logi' style={{marginTop: isSmallScreen ? '-19%':"", }} >
            <div className='colo'></div>
            <h1 style={{width: isSmallScreen ? '100px':"",}}>Contact</h1>
            

          </div>
          <h2 style={{fontSize: isSmallScreen ? '20px':"",}}>Get in touch with us</h2>
          <div className='iyi' style={{width: isSmallScreen?"300px":"", }}>
          <img src={iyi} style={{marginLeft: isSmallScreen ? '10%':"", width: isSmallScreen ? '50px':"", height: isSmallScreen ? '5vh':"", }}/>
          <img src={yal}  style={{marginLeft: isSmallScreen ? '53%':"", width: isSmallScreen ? '50px':"", height: isSmallScreen ? '5vh':"", position: isSmallScreen?"absolute":""}}/>
          <img src={yuh}  style={{marginLeft: isSmallScreen ? '-4%':"", width: isSmallScreen ? '50px':"", display: isSmallScreen ? 'none':"", }}/>

          </div>
          <div className='iyo' style={{width: isSmallScreen?"300px":""}}>
            <h1 style={{fontSize: isSmallScreen ?  '13px':'', marginLeft: isSmallScreen ? '5%':"",marginTop: isSmallScreen ? '8%':"", width: isSmallScreen ? '50px':"", height: isSmallScreen ? '5vh':"",}}>Contact@logistics.com</h1>
            <h2 style={{fontSize: isSmallScreen ?  '12px':'', marginLeft: isSmallScreen ? '48%':"",marginTop: isSmallScreen ? '8%':"", width: isSmallScreen ? '170px':"", height: isSmallScreen ? '5vh':"", position: isSmallScreen?"absolute":""}}>Call us: +250799340499</h2>
            <h3 style={{display: isSmallScreen?"none":""}}>Mon - Sat 9.00 - 18.00 Sunday Closed</h3>
          </div>
          <div className='user' style={{width: isSmallScreen ?  '400px':'',  position: isSmallScreen?"absolute":"", marginLeft: isSmallScreen ? '-34%':"", }}> 
          <input type='text' name='name' className='name' placeholder='Your name*' style={{marginLeft: isSmallScreen ? '34%':"",position: isSmallScreen?"absolute":"", marginTop: isSmallScreen ? '2%':"",  width: isSmallScreen ? '240px':"",}}/>
          <input type='email' name='name' className='email' placeholder='Your email*' style={{marginLeft: isSmallScreen ? '34%':"", marginTop: isSmallScreen ? '22%':"", position:isSmallScreen?"absolute":"", width: isSmallScreen ? '240px':"", }}/>
          </div>
          <div className='users' style={{marginTop: isSmallScreen ? '80%':"", width: isSmallScreen ?  '400px':'',  position: isSmallScreen?"absolute":"", marginLeft: isSmallScreen ? '-34%':"",}}> 
          <input type='text' name='name' className='names' placeholder='Phone Number*' style={{marginLeft: isSmallScreen ? '34%':"", marginTop: isSmallScreen ? '2%':"",  width: isSmallScreen ? '240px':"",}}/>
          <input type='text' name='name' className='emails' placeholder='City*'style={{marginLeft: isSmallScreen ? '34%':"", marginTop: isSmallScreen ? '22%':"", position:isSmallScreen?"absolute":"", width: isSmallScreen ? '240px':"", }}/>
          </div>
          <input type='text' name='message' className='message' placeholder='Your Message'  style={{marginTop: isSmallScreen ? '128%':"",marginLeft: isSmallScreen ? '10%':"",  width: isSmallScreen ? '240px':"",}}/>
          <div className='exps'  style={{marginTop: isSmallScreen ? '178%':"",}}>
              <div className='rom'></div>
              <h1>Submit Message</h1>

            </div>
      </div>
      <div className='sif' style={{marginTop: isSmallScreen ? '260%':"", width: isSmallScreen ?  '365px':'', marginLeft: isSmallScreen ?  '2px':'', }}>
       <Footer/>
      </div>
    </div>
  )
}

export default Contact
