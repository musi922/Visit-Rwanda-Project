import React, { useRef } from 'react'
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
import { FaBars, FaTimes} from "react-icons/fa"
import { useMediaQuery } from 'react-responsive';



import Projectcard from "./Projectcard"
import Newscard from './Newscard'
import { Link } from 'react-router-dom'
import Footer from './Footer'


 export const Homepage = () => {
  const navRef = useRef();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });


  const Shownavbar = () => {
    navRef.current.classList.toggle("responsive_submenu");
  }
  return (
    <div>
      <div className='nav'>
      <Nav/>
      </div>
      <div className='menu-bar'>
        <div className='submenu' ref={navRef}>
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
        
            <button onClick={Shownavbar} className='nav-btn nav-close-btn'>
            <FaBars/>
            </button>

      </div>
      <div className='body'>
        <img src={Photo} className='Photo' style={{width: isSmallScreen ? '80%':'',}}/>
        <div className='text'>
          <div className='logistics' style={{backgroundColor: "transparent"}}>
            <div className='logs'></div>
            <div className='color'></div>
            <h1 style={{color:"white"}}>Logistics & Supply Chain </h1>
            <h2 style={{ fontSize: isSmallScreen ? '32px' : isLargeScreen ? '60px' : 'inherit' , width: isSmallScreen ? '262px':''}}>Your Gateway to any Data in the World</h2>
            <h3 style={{ display: isSmallScreen ? 'none' : '' , }}>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </h3>

            <div className='explos' style={{ width: isSmallScreen ? '162px':'', height: isSmallScreen ? '6vh':''}}>
              <div className='rois'></div>
              <p>Explore More</p>

            </div>
          

          </div>
          
        </div>
      </div>
      <div className='about' style={{width: isSmallScreen ? '250px':""}}>
      <div className='ric' style={{marginLeft: isSmallScreen ? '15%':""}}>
      <div className='colors'></div>
      <h1 style={{width: isSmallScreen ?  '250px':''}}>What We Do</h1>
      </div>
      <h2 style={{fontSize: isSmallScreen ? '18px':"",width: isSmallScreen ? '150px':"", marginTop: isSmallScreen ? '-24%':"" , marginLeft: isSmallScreen ? '15%':""}}>Safe & Reliable Data Solutions</h2>
      <img src={Icon} className='safe' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '-24%':"", display: isSmallScreen ? "none":""}}/>
      <img src={icons} className='saf' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '-24%':"", display: isSmallScreen ? "none":""}}/>
      <div className='data' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '100px':""}}>
        <h1 style={{marginLeft: isSmallScreen ? '25px':"", marginTop: isSmallScreen ? "4%":""}}>Data Management</h1>
        <p style={{marginLeft: isSmallScreen ? '25px':"", marginTop: isSmallScreen ? "2%":""}}>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={data} className='safe' style={{marginTop: isSmallScreen ? '10%':"",marginLeft: isLargeScreen ? '-13%':"",height: isSmallScreen ? '6vh':""}}/>
      </div>
      <div className='bi' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>BI & ANALYTICS</h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={Iconbb} className='safed' style={{marginTop: isSmallScreen ? '-85%':"" ,display: isLargeScreen ? "none":""}} />
        
        
      </div>
      <div className='train'  style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>
        Support And Training
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={icons} className='safed' style={{marginTop: isSmallScreen ? '-85%':"",display: isLargeScreen ? "none":""}}/>
        
      </div>
      <div className='cons'  style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>
        Data Dashboards
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={Iconbb} className='safed'  style={{marginTop: isSmallScreen ? '-85%':"",marginLeft: isLargeScreen ? '-13%':""}}/>

      </div>
      
      </div>
      <div className='tot' style={{marginTop: isSmallScreen ?  '270%':''}}>
      <div className='why' style={{marginTop: isSmallScreen ?  '8%':'',marginLeft: isSmallScreen ?  '4%':''}}>
       
       </div>
       <div className='whys' style={{marginTop: isSmallScreen ?  '8%':'',marginLeft: isSmallScreen ?  '4%':''}}>
        
       </div>
      </div>
      <div className='us' style={{marginTop: isSmallScreen ?  '-18%':'',width: isSmallScreen ?  '80%':'', marginLeft: isSmallScreen ?  '9%':''}}>
      <div className='ricy' style={{display: isSmallScreen ?  'none':''}}>
            <div className='colo'style={{ display: isSmallScreen ?  'none':'', marginLeft: isLargeScreen ?  '-3px':''}}></div>
            <h1 style={{display: isSmallScreen ? "none" : "", marginTop: isLargeScreen ?  '14px':'',marginLeft: isLargeScreen ?  '13px':''}}>Why us</h1>
        </div>
        <p style={{fontSize: isSmallScreen ? '18px':"",width: isSmallScreen ? '290px':"", marginTop: isSmallScreen ? '4%':"" , marginLeft: isSmallScreen ? '15%':""}}>We provide Data Cleansing and Intergration Services</p>
        <h2  style={{width: isSmallScreen ?  '98%':'',marginTop: isSmallScreen ?  '-8%':''}}>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 

          Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</h2>
          <div className='picx' style={{display: isSmallScreen ?  'none':'',}}></div>
          <div className='picy' style={{display: isSmallScreen ?  'none':'',}}></div>
          <div className='come' style={{marginLeft: isSmallScreen ?  '-34%':''}}></div>
          <h3 style={{fontSize: isSmallScreen ?  '18px':'', marginLeft: isSmallScreen ? "52px":"",width: isSmallScreen ? "250px":""}}>We give Support and Training</h3>
         
          <div className='help' style={{marginLeft: isSmallScreen ?  '-34%':''}}></div>
          <h4 style={{fontSize: isSmallScreen ?  '18px':'', marginLeft: isSmallScreen ? "52px":"",width: isSmallScreen ? "250px":""}}>We help in big Data Consulting</h4>
      </div>
      <div className='proje' style={{marginTop: isSmallScreen ?  '130%':'',}}>
        <h1 style={{fontSize: isSmallScreen ? '18px':"",marginLeft: isSmallScreen ? "-40%":"", width: isSmallScreen? "50px":""}}>IA Rwanda Projects Across the World</h1>
        <div className='pro' style={{display: isSmallScreen ?  'flex':'', flexDirection: isSmallScreen ? "column":"", gap: isSmallScreen? "5px" :"", with: isLargeScreen? "100%":""}}>
        <Projectcard img={proj} head="Intelligence Solutions" desc="Warehouse Management"/>
        <Projectcard img={dash} head="Intelligence Solutions" desc="Warehouse Management"/>
         <Projectcard img={science} head="Intelligence Solutions" desc="Warehouse Management"/>
         <Projectcard img={dd} head="Intelligence Solutions" desc="Warehouse Management"/>
        </div>
      </div>
      
      <div className='wapi' >
      <div className='rico' style={{marginTop: isSmallScreen ?  '-20%':'',}}>
            <div className='coloi'></div>
            <h1>Our Blog</h1>
           
        </div>
        <h2 style={{fontSize: isSmallScreen ? '18px':"",marginLeft: isSmallScreen ? "40%":"",marginTop: isSmallScreen ?  '-10%':'',}}>Our Latest News</h2>
       
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
      <div className='yego'style={{marginTop: isSmallScreen ?  '1%':''}}>
        <Footer/>
      </div>
    </div>
  )
}

