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
import Logoz from "../images/Logoz.png";
import {GoLocation} from "react-icons/go"
import {BsTelephoneForward} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {TbWorld} from "react-icons/tb"
import {BsFillEnvelopeCheckFill} from "react-icons/bs"
import {BsBox2} from "react-icons/bs"


import Projectcard from "./Projectcard"
import Newscard from './Newscard'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Rating from './Rating';


 export const Homepage = () => {
  const companyRating = 5; 
  const navRef = useRef();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });


  const Shownavbar = () => {
    navRef.current.classList.toggle("responsive_submenu");
  }
  return (
    <div>
      {/* <div className='nav'>
      <Nav/>
      </div> */}
      <div className='menu-bar' style={{height:"10vh"}}>
      <div className='image' >
            <img src={Logoz} style={{marginTop:"6px", marginLeft:"30%", height: "3vh"}}/>
        </div>
        <div className='submenu' ref={navRef} style={{marginLeft:"-16%", marginTop: "16px"}}>
        <div className='home'>
        <Link to={"/"}  style={{textDecoration:"none",}}><h1 style={{textDecoration:"none",   width: "90px",
  height: "32px",
  border:"4px solid #FFB82B",
  borderRadius: "5px",
  borderLeft:"none",
  borderTop:"none",
  borderRight:"none",
  textAlign: "center",
  alignItems:"center",  transform: "translateX(2%)"
  }}>Home</h1></Link>
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
      <div className='bodys' style={{backgroundColor:"white", }}>
        {/* <img src={Photo} className='Photo' style={{width: isSmallScreen ? '80%':'',}}/> */}
        <div className='text' style={{marginTop:"-0.5%", }}>
          <div className='logistics' style={{backgroundColor:"white"}}>
            {/* <div className='logs'></div> */}
            {/* <div className='color'></div> */}
            
            <h1 style={{color:"#343a40", fontSize:"36px", fontWeight: "bold", fontFamily:"sans-serif", width:"460px", marginTop:"-8%", marginLeft:"28%",position:"absolute" }}>Exec Rwanda </h1>
            
            {/* <h2 style={{ color:"black",fontSize: isSmallScreen ? '32px' : isLargeScreen ? '60px' : 'inherit' , width: isSmallScreen ? '262px':''}}>Your Gateway to any Data in the World</h2> */}
            {/* <h3 style={{ color:"black",display: isSmallScreen ? 'none' : '' , }}>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </h3> */}

            {/* <div className='explos' style={{ width: isSmallScreen ? '162px':'', height: isSmallScreen ? '6vh':''}}>
              <div className='rois'></div>
              <p>Explore More</p>

            </div> */}
            <div className='def'>
              <div className='defo'>
                <h1 style={{color: "black", letterSpacing:"2px", marginTop:"10%"}}>What is <span style={{color:"#FFB629"}}>Exec Rwanda ?</span></h1>
              </div>
              <div className='dud'>
                <p1 style={{width:"100%", color:"black", letterSpacing:"1px", fontSize:"bold", fontFamily: "Arial, sans-serif"}}>Exec Rwanda is a data company that offers a range of services,
                  including collecting and analyzing data, performing business
                intelligence tasks, managing data, developing data strategies,
                creating interactive and real-time dashboards, building data-related products,
               and providing training in data-related fields</p1>
               <h1 style={{color:"#FFB629", marginLeft:"-20%"}}>Read more</h1>
               <h3 style={{color:"#57595c",marginTop:"-8%", fontSize:"20px", fontWeight:"bold"}}>Sector</h3>
               <h3 style={{color:"#57595c",marginTop:"-2%", fontSize: "18px", fontWeight:"bold"}}>Rate of the Company</h3>
               <h3 style={{color:"#79759d",marginLeft:"30%" ,marginTop:"-8%",}}>Data Company</h3>
              
               <div style={{marginLeft:"50%", marginTop:"13%"}}>
               <Rating rating={companyRating} />
               <h3 style={{color:"#79759d",marginLeft:"1%", marginTop:"2%", fontSize:"14px", fontWeight:"bold"}}>Average: 5 (2 votes)</h3>
               </div>
              </div>
            </div>
            <div className='mount'>
              <p1 style={{color:"#d5a24a", fontSize:"16px",fontWeight:"bold", position:"absolute", marginTop:"20%", marginLeft:"8%"}}><br></br>Partnership is not a posture but a process<br></br>A strong partnership is built on trust, respect</p1>
              
            </div>
            <div className='mounts'>
            <h1 style={{color:"white", fontSize:"16px",fontWeight:"bold", position:"absolute", marginTop:"6%", marginLeft:"15%"}}>"Advanced Management Skills & <br></br> Customer service Culture"</h1>
            <div style={{backgroundColor:"white", height:"0.5vh", width:"200px",  marginTop:"19%", marginLeft:"22%"}}></div>
            <p1 style={{color:"#d6ebff", fontSize:"11px",fontWeight:"bold", position:"absolute", marginTop:"6%", marginLeft:"30%"}}>Become a member:<br></br>& Aparticipant</p1>
            </div>
            <div className='mounta'>
              <p1 style={{color:"white", fontSize:"14px", marginTop:"6%", marginLeft:"6%", position:"absolute"}}> Kigali-Rwanda</p1>
              <p1 style={{color:"white", fontSize:"14px", marginTop:"22%", marginLeft:"6%", position:"absolute"}}>www.execrwanda.org</p1>
             <p1 style={{color:"white", fontSize:"14px", marginTop:"10%", marginLeft:"50%", position:"absolute"}}>Execrwanda@gmail.com</p1>
              <p1 style={{color:"white", fontSize:"14px", marginTop:"22%", marginLeft:"50%", position:"absolute"}}>   0785842428</p1>  
            </div>
            <div className='monte'>
              <div className='mon'>
              <h1 style={{color:"white", fontWeight:"bold", fontSize:"16px", position:"absolute", marginTop:"2px"}}> Our Vision</h1>
                <div className='mov'>
                  <p1 style={{color:"#343a6b", marginTop:"4%", marginLeft:"4%", position:"absolute"}}>To empower businesses and individuals through data-driven insights and solutions,  </p1>
                </div>
              </div>
              <div className='mons'>
              <h1 style={{color:"white", fontWeight:"bold", fontSize:"16px", position:"absolute", marginTop:"2px"}}> Our Mission</h1>

                <div className='movs'>
                <p1 style={{color:"#343a6b", marginTop:"4%", marginLeft:"4%", position:"absolute"}}>To provide comprehensive data services and solutions to businesses across various industries,   </p1>

                </div>
              </div>
            </div>
          

          </div>
          
        </div>
      </div>
      <div className='about' style={{width: isSmallScreen ? '250px':"", marginTop:"-6%"}}>
      <div className='ric' style={{marginLeft: isSmallScreen ? '15%':""}}>
      <div className='colors'></div>
      <h1 style={{width: isSmallScreen ?  '250px':''}}>What We Do</h1>
      </div>
      <h2 style={{fontSize: isSmallScreen ? '18px':"",width: isSmallScreen ? '150px':"", marginTop: isSmallScreen ? '-24%':"" , marginLeft: isSmallScreen ? '15%':""}}>the following are our Main services </h2>
      {/* <img src={Icon} className='safe' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '-24%':"", display: isSmallScreen ? "none":""}}/>
      <img src={icons} className='saf' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '-24%':"", display: isSmallScreen ? "none":""}}/> */}
      <div className='data' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '100px':""}}>
        <h1 style={{marginLeft: isSmallScreen ? '25px':"", marginTop: isSmallScreen ? "4%":""}}>Collecting and analyzing data</h1>
        <p style={{marginLeft: isSmallScreen ? '25px':"", marginTop: isSmallScreen ? "2%":""}}>we specialize in providing comprehensive data collection and analysis services. We understand the importance of data as a strategic asset for businesses today. Our expert team is skilled in collecting data from various sources, ensuring its accuracy, relevance, and completeness.</p>
        {/* <img src={data} className='safe' style={{marginTop: isSmallScreen ? '10%':"",marginLeft: isLargeScreen ? '-13%':"",height: isSmallScreen ? '6vh':""}}/> */}
      </div>
      <div className='bi' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>Business intelligence activities</h1>
        <p>we excel in performing business intelligence activities to transform raw data into actionable information. We employ advanced analytics techniques to extract valuable insights from complex data sets, enabling our clients to gain a deeper understanding of their business performance, market trends, and customer behavior.</p>
        <img src={Iconbb} className='safed' style={{marginTop: isSmallScreen ? '-85%':"" ,display: isLargeScreen ? "none":""}} />
        
        
      </div>
      <div className='train'  style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>
        Developing data strategies
        </h1>
        <p>Data is a valuable resource, and developing a comprehensive data strategy is crucial for businesses to leverage its full potential. We specialize in assisting businesses in developing data strategies tailored to their specific objectives and needs.</p>
        <img src={icons} className='safed' style={{marginTop: isSmallScreen ? '-85%':"",display: isLargeScreen ? "none":""}}/>
        
      </div>
      <div className='cons'  style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>
        Building data-related products:
        </h1>
        <p> In the era of data-driven innovation, businesses are seeking customized data-related products to solve their specific challenges. We specialize in building data-related products tailored to your unique requirements.</p>
        {/* <img src={Iconbb} className='safed'  style={{marginTop: isSmallScreen ? '-85%':"",marginLeft: isLargeScreen ? '-13%':""}}/> */}

      </div>

      <div className='trai'  style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>
        Training in data-related fields:
        </h1>
        <p>At Exec, we offer comprehensive training programs in data-related fields to empower individuals and organizations with the skills and knowledge required to thrive in the data-driven world.</p>
        <img src={icons} className='safed' style={{marginTop: isSmallScreen ? '-85%':"",display: isLargeScreen ? "none":""}}/>
        
      </div>

      <div className='con'  style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>
        Maturity assessment
        </h1>
        <p> We conduct holistic Maturity assessments across diverse sectors. With our extensive expertise, we go beyond data and provide comprehensive evaluations of an organization's overall maturity level in various domains. Working closely with businesses, we develop customized assessment models that align with their industry and specific objectives</p>
        {/* <img src={Iconbb} className='safed'  style={{marginTop: isSmallScreen ? '-85%':"",marginLeft: isLargeScreen ? '-13%':""}}/> */}

      </div>
      
      </div>
      <div className='tot' style={{marginTop: isSmallScreen ?  '270%':'', marginTop:"15%"}}>
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
        <p style={{fontSize: isSmallScreen ? '18px':"",width: isSmallScreen ? '290px':"", marginTop: isSmallScreen ? '4%':"" , marginLeft: isSmallScreen ? '15%':""}}>Become a partner with Exec And unlock New Opportunities</p>
        <h2  style={{width: isSmallScreen ?  '98%':'',marginTop: isSmallScreen ?  '-8%':''}}> We are proud to partner with industry-leading organizations to deliver innovative solutions and create a positive impact. Together, we strive to achieve excellence and drive success in our respective fields. Our partnerships are built on trust, mutual respect, and a shared vision for the future. By combining our expertise, resources, and networks, we can unlock new opportunities and deliver exceptional value to our customers.</h2>
          <div className='picx' style={{display: isSmallScreen ?  'none':'',}}></div>
          <div className='picy' style={{display: isSmallScreen ?  'none':'',}}></div>
          <div className='come' style={{marginLeft: isSmallScreen ?  '-34%':''}}></div>
          <h3 style={{fontSize: isSmallScreen ?  '18px':'', marginLeft: isSmallScreen ? "52px":"",width: isSmallScreen ? "250px":"", width:"450px"}}>we aim to provide comprehensive solutions </h3>
         
          <div className='help' style={{marginLeft: isSmallScreen ?  '-34%':''}}></div>
          <h4 style={{fontSize: isSmallScreen ?  '18px':'', marginLeft: isSmallScreen ? "52px":"",width: isSmallScreen ? "250px":""}}>We believe in Collaborative Approach</h4>
      </div>
      {/* <div className='proje' style={{marginTop: isSmallScreen ?  '130%':'',}}>
        <h1 style={{fontSize: isSmallScreen ? '18px':"",marginLeft: isSmallScreen ? "-40%":"", width: isSmallScreen? "50px":""}}>IA Rwanda Projects Across the World</h1>
        <div className='pro' style={{display: isSmallScreen ?  'flex':'', flexDirection: isSmallScreen ? "column":"", gap: isSmallScreen? "5px" :"", with: isLargeScreen? "100%":""}}>
        <Projectcard img={proj} head="Intelligence Solutions" desc="Warehouse Management"/>
        <Projectcard img={dash} head="Intelligence Solutions" desc="Warehouse Management"/>
         <Projectcard img={science} head="Intelligence Solutions" desc="Warehouse Management"/>
         <Projectcard img={dd} head="Intelligence Solutions" desc="Warehouse Management"/>
        </div>
      </div> */}
      
      <div className='wapi' style={{marginTop:"30%"}}>
      <div className='rico' style={{marginTop: isSmallScreen ?  '-20%':'', }}>
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

