import React ,{ useRef }from 'react'
import './Careers.css'
import Nav from './Components/Nav'
import { FiInstagram } from "react-icons/fi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import Photo from "./images/Photo.jpg";
import career from "./images/career.jpg";
import { Link } from 'react-router-dom'
import Footer from './Components/Footer'
import { FaBars, FaTimes} from "react-icons/fa"
import { useMediaQuery } from 'react-responsive';
import Logoz from "./images/Logoz.png";

const Careers = () => {
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
      <div className='menu-bar'style={{height:"10vh"}}>
      <div className='image' >
           
        </div>
        <div className='submenu' ref={navRef} style={{marginLeft:"-16%", marginTop: "16px"}}>
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
        <Link to={"/Careers"}  style={{textDecoration:"none",}}><h1 >Careers</h1></Link>
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
      <div className='body'>
        <img src={Photo} className='Photo' style={{width: isSmallScreen ? '80%':'',}}/>
        <div className='text'>
          <div className='logistics' style={{backgroundColor: isSmallScreen ?"transparent":""}}>
            <div className='color'></div>
            <h1>Want to become member</h1>
            <h2 style={{ fontSize: isSmallScreen ? '32px' : isLargeScreen ? '60px' : 'inherit' , width: isSmallScreen ? '262px':''}}>Your Gateway to any tourism in the rwanda</h2>
            <h3 style={{ display: isSmallScreen ? 'none' : '' , }}>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </h3>

            <div className='explore' style={{display: isSmallScreen?"none":"",marginLeft:"-5%",marginTop:"-5%"}}>
              <div className='rot'></div>
              <h1 style={{display: isSmallScreen?"none":"",}}>Welcome here</h1>

            </div>
          

          </div>
          
        </div>
      </div>
      <div className='car'>
        <h1 style={{fontSize: isSmallScreen?"23px":"",  width: isSmallScreen?"350px":""}}>Your Career Solutions</h1>
        <p style={{fontSize: isSmallScreen?"12px":"",  width: isSmallScreen?"350px":""}}>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>

        <div className='hee' style={{width: isSmallScreen?"350px":""}}>
            <p style={{fontSize: isSmallScreen?"12px":"",  width: isSmallScreen?"300px":""}}>“Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business.”</p>

        </div>
        <h3 style={{fontSize: isSmallScreen?"16px":"",  width: isSmallScreen?"350px":""}}>Safest Career Solutions Provider With Integrity</h3>
        <h4 style={{fontSize: isSmallScreen?"12px":"",  width: isSmallScreen?"350px":""}}>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</h4>
        <div className='cargo'>
            <img src={career} className='rgo' style={{width: isSmallScreen?"350px":""}}/>
        </div>
        <h5 style={{fontSize: isSmallScreen?"12px":"",  width: isSmallScreen?"350px":""}}>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium.

Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</h5>
        <div className='side' style={{display: isSmallScreen?"none":""}}>
            <div className='boy'>
                <h1>Categories</h1>
                <div className='one'>
                    <h1>Tourist Designer</h1>
                </div>
                 <div className='two'>
                    <h1>Tourist Administrator</h1>
                </div>
                <div className='three'>
                <h1>Tourist Specialist</h1>
                </div>
                <div className='four'>
                <h1>Tourist Analyst</h1>
                </div>
                <div className='five'>
                <h1>Tourist Administrator</h1>
                </div> 
            </div>
        </div>
        <div className='girl' style={{marginLeft: isSmallScreen?"-12%":"",  width: isSmallScreen?"280px":"", marginTop: isSmallScreen?"2%":""}}>
            <h1>Need To be a member?</h1>
            <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</p>
            <div className='explores' style={{marginLeft: isSmallScreen?"16%":"",   marginTop: isSmallScreen?"264%":""}}>
              <div className='rots' style={{display: isSmallScreen?"none":"", }}></div>
              <h1>Contact us</h1>

            </div>
          
        </div>
      </div>
      <div className='shan' style={{marginTop: isSmallScreen?"80%":"",  width: isSmallScreen?"374px":"",marginTop:"20%"}}>
      <Footer/>
      </div>
    </div>
  )
}

export default Careers
