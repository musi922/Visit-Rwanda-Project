import React ,{ useRef }from 'react'
import './Blog.css'
import Nav from './Nav'
import Newscard from './Newscard'
import { FiInstagram } from "react-icons/fi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { Link } from 'react-router-dom'
import blogs from '../images/blogs.png'
import ines from '../images/ines.jpg'
import Photo from "../images/Photo.jpg";
import Icon from "../images/Icon.png";
import yeah from "../images/yeah.png";
import you from "../images/you.png";
import icons from "../images/icons.png";
import Iconbb from "../images/Iconbb.png";
import data from "../images/data.png";
import { AiOutlineArrowRight } from "react-icons/ai"
import newsnow from "../images/newsnow.jpg";
import bed from "../images/bed.jpg";
import amer from "../images/amer.jpeg";
import breaks from "../images/breaks.jpg";
import Footer from './Footer'
import { FaBars, FaTimes} from "react-icons/fa"
import { useMediaQuery } from 'react-responsive';
import Logoz from "../images/Logoz.png";


const Blog = () => {
  const navRef = useRef();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });


  const Shownavbar = () => {
    navRef.current.classList.toggle("responsive_submenu");
  }

  return (
    <div>
      {/* <div className='navs' style={{display:isSmallScreen? "none":""}}>
        <Nav/>
      </div> */}
      <div className='menus-bar' style={{height:"10vh"}}>
      <div className='image' >
            <img src={Logoz} style={{marginTop:"6px", marginLeft:"30%", height: "3vh"}}/>
        </div>
        <div className='submenus'  ref={navRef} style={{ marginLeft:"-16%", marginTop: "16px",background: isSmallScreen? "#070d29":"",height: isSmallScreen? "50vh":"",width: isSmallScreen? "330px":""}}>
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
        
        <Link to={"/AboutIA"}  style={{textDecoration:"none",}}><h1 style={{textDecoration:"none",   width: "90px",
  height: "32px",
  border:"4px solid #FFB82B",
  borderRadius: "5px",
  borderLeft:"none",
  borderTop:"none",
  borderRight:"none",
  textAlign: "center",
  alignItems:"center",  transform: "translateX(2%)"
  }}>Blog</h1></Link>
        </div>
        <div className='contacts'>
        <Link to={"/contact"} style={{textDecoration:"none"}}><h1>Contact us</h1></Link>
        </div>
        <div className='Careerss'>
        <Link to={"/Careers"} style={{textDecoration:"none"}}> <h1>Careers</h1></Link>
        </div>
      
        </div>
        {/* <div className='nextmenus'>
        <Link to={"https://www.instagram.com/"} style={{textDecoration:"none", color:"white"}}><FiInstagram/></Link>
            <Link to={"https://www.facebook.com/profile.php?id=100091745804529"} style={{textDecoration:"none", color:"white"}}><AiFillFacebook/></Link>
            <Link to={"https://twitter.com/home"} style={{textDecoration:"none", color:"white"}}><AiOutlineTwitter/></Link>
            <Link to={"https://www.linkedin.com/feed/"} style={{textDecoration:"none", color:"white"}}><AiFillLinkedin/></Link>
            <div className='appoints'>
              Request appoint
            </div>
            

        </div> */}
        <button onClick={Shownavbar} className='nav-btn nav-close-btn'>
            <FaBars/>
            </button>

      </div>
      <div className='bodysi' style={{height: isSmallScreen ? '115vh':""}}>
        <img src={blogs} className='Photos' style={{width: isSmallScreen ? '100%':'',}}/>
        <div className='textss' style={{marginTop: isSmallScreen ? '-90%':'',}}>
          <div className='logisticss'>
            <div className='colors'></div>
            <h1>Blog</h1>

          </div>
          <h2 style={{fontSize: isSmallScreen ? '32px' :"", width: isSmallScreen ? '162px' :""}}>Our Latest News</h2>
          
        </div>
      </div>
      <div className='intro' style={{marginTop: isSmallScreen ? '-80%' :"", width: isSmallScreen?"350px":""}}>
        <h1 style={{fontSize: isSmallScreen ? '22px' :"", width: isSmallScreen ? '262px' :""}}>Exec Rwanda Latest news</h1>
        <p style={{fontSize: isSmallScreen ? '14px' :"", width: isSmallScreen ? '350px' :""}}>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</p>
      </div>
       <div className='newsi' style={{ marginTop: isSmallScreen ? '40%' :""}}>
        <div>
        <Newscard imgs={amer} dates="08" day="Thursday" haha="Manager recently made a worthy solution for your business" huhu="We are dedicated in creating added value for our customers by implementing modern technology in our work. " yuh=". Urgent transport solutions" yu=". Reliable & experienced staffs"/>
        </div>
        <div>
        <Newscard imgs={bed} dates="06" day="Tuesday" haha="Manager recently made a worthy solution for your business" huhu="We are dedicated in creating added value for our customers by implementing modern technology in our work. " yuh=". Urgent transport solutions" yu=". Reliable & experienced staffs"/>
        </div>
        <div>
        <Newscard imgs={breaks} dates="05" day="Monday" haha="Manager recently made a worthy solution for your business" huhu="We are dedicated in creating added value for our customers by implementing modern technology in our work. " yuh=". Urgent transport solutions" yu=". Reliable & experienced staffs"/>
        </div>
        <div>
        <Newscard imgs={newsnow} dates="04" day="Monday" haha="Manager recently made a worthy solution for your business" huhu="We are dedicated in creating added value for our customers by implementing modern technology in our work. " yuh=". Urgent transport solutions" yu=". Reliable & experienced staffs"/>
        </div>
       
        </div>
        <div style={{marginTop:"28%",  marginTop: isSmallScreen ? '90%' :""}}>
          <Footer/>
          </div> 
    </div>
  )
}

export default Blog
