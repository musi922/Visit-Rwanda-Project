import React ,{ useRef }from 'react'
import './Services.css'
import Nav from './Nav'
import { FiInstagram } from "react-icons/fi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { Link } from 'react-router-dom'
import hhh from '../images/hhh.png'
import ines from '../images/ines.jpg'
import Photo from "../images/Photo.jpg";
import Icon from "../images/Icon.png";
import yeah from "../images/yeah.png";
import you from "../images/you.png";
import icons from "../images/icons.png";
import Iconbb from "../images/Iconbb.png";
import data from "../images/data.png";
import { AiOutlineArrowRight } from "react-icons/ai"
import Footer from './Footer'
import { FaBars, FaTimes} from "react-icons/fa"
import { useMediaQuery } from 'react-responsive';


const Services = () => {
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
        <Link to={"/Contact"} style={{textDecoration:"none"}}><h1>Contact us</h1></Link>
        </div>
        <div className='Careerss'>
        <Link to={"/Careers"} style={{textDecoration:"none"}}> <h1>Careers</h1></Link>
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
      <div className='bodys' style={{height: isSmallScreen ? '240vh':""}}>
        <img src={hhh} className='Photos' style={{width: isSmallScreen ? '100%':'',}}/>
        <div className='texts' style={{marginTop: isSmallScreen ? '-90%':'',}}>
          <div className='logisticss'>
            <div className='colors'></div>
            <h1>Services</h1>

          </div>
          <h2 style={{fontSize: isSmallScreen ? '32px' :"", width: isSmallScreen ? '162px' :""}}>Our Data Services</h2>
          
        </div>
      </div>
      <div className='abouts' style={{width: isSmallScreen ? '250px':"", marginTop: isSmallScreen ? '-15%':""}}>
      <div className='rics' style={{marginLeft: isSmallScreen ? '15%':"", marginTop: isSmallScreen ? '-25%':""}}>
      <div className='colorss'></div>
      <h1 style={{marginLeft: isSmallScreen ? '6%':"", marginTop: isSmallScreen ? '-22%':"",width: isSmallScreen ?  '250px':''}}>What We Do</h1>
      </div>
      <h2 style={{fontSize: isSmallScreen ? '18px':"",width: isSmallScreen ? '150px':"", marginTop: isSmallScreen ? '-24%':"" , marginLeft: isSmallScreen ? '15%':""}}>Our Data Services</h2>
      <img src={Icon} className='safes' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '4%':"",marginLeft: isSmallScreen ? '34%':"",}}/>
      <img src={icons} className='safess' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '74%':"",marginLeft: isSmallScreen ? '34%':"",}}/>
      <img src={yeah} className='safas' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '144%':"",marginLeft: isSmallScreen ? '34%':"",}}/>
      <img src={you} className='safasi' style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '284%':"",marginLeft: isSmallScreen ? '34%':"",}}/>
      <div className='datas' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '10px':""}}>
        <h1 style={{marginLeft: isSmallScreen ? '25px':"", marginTop: isSmallScreen ? "4%":""}}>Data Management</h1>
        <p style={{marginLeft: isSmallScreen ? '25px':"", marginTop: isSmallScreen ? "2%":""}}>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={data} className='safee'  style={{width: isSmallScreen ? '35px':"", marginTop: isSmallScreen ? '260%':"",marginLeft: isSmallScreen ? '34%':"",}}/>
      </div>
      <div className='bis' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '4%':""}}>
        <h1>Data integration</h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        
      </div>
      <div className='trains' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '4%':""}}>
        <h1>
        Data cleaning and processing
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={Iconbb} className='safeds' style={{marginLeft: isSmallScreen ? '34%':"", }}/>
          
      </div>
      <div className='conss' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '4%':""}}>
        <h1>
        Data Dashboards
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>

      </div>
      <div className='consi' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '50px':""}}>
        <h1>
        Data analysis
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>

      </div>
      <div className='consis' style={{marginLeft: isSmallScreen ? '-12px':"", marginTop: isSmallScreen ? '4%':""}}>
        <h1>
        Consulting and training
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>

      </div>
      
      </div>
      <div className='how' style={{marginTop: isSmallScreen ?  '10%':''}}>
        <h1 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '20%':'', width: isSmallScreen?"250px":""}}>IA Group Services Decription</h1>
        <p style={{fontSize: isSmallScreen ?  '12px':'',marginLeft: isSmallScreen ?  '2%':'', width: isSmallScreen?"380px":""}}>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

</p>
      </div>
      <div className='ben' style={{marginTop: isSmallScreen ?  '30%':''}}>
        <h1 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '20%':'',marginTop: isSmallScreen ?  '3%':'', width: isSmallScreen?"250px":""}}>Benefits of Our Services</h1>
        <p style={{marginLeft: isSmallScreen ?  '2px':'',width: isSmallScreen ?  '380px':''}}>Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis.</p>
        <h2 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '10%':'', width: isSmallScreen?"350px":""}}><AiOutlineArrowRight />  Clearance and compliance service</h2><br></br><br></br>
        <h2 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '10%':'', width: isSmallScreen?"350px":""}}><AiOutlineArrowRight />  Saving Time to Deal with commodo iaculis</h2><br></br><br></br>
        <h2 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '10%':'', width: isSmallScreen?"350px":""}}><AiOutlineArrowRight />  Automate your business elis tristique</h2><br></br>
        <div className='tab'>
          <img src={ines} className='ines' style={{marginTop: isSmallScreen ?  '55%':'',marginLeft: isSmallScreen ?  '-102%':'', width: isSmallScreen?"350px":""}}/>
          <div className='vid'>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/mRbeIZKcDyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  style={{marginTop: isSmallScreen ?  '55%':'',marginLeft: isSmallScreen ?  '-22%':'', width: isSmallScreen?"350px":""}}></iframe>
          </div>
          <div className='work' style={{marginTop: isSmallScreen ?  '40%':'', marginLeft: isSmallScreen ?  '-48%':'', width: isSmallScreen?"380px":""}}>
            <h1 style={{fontSize: isSmallScreen ?  '18px':'',marginLeft: isSmallScreen ?  '20%':'', width: isSmallScreen?"250px":""}}>How It Works</h1>
            <p style={{marginLeft: isSmallScreen ?  '2px':'',width: isSmallScreen ?  '380px':'',fontSize: isSmallScreen ?  '14px':'',}}>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, doloremque laudantium.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis.</p>
          </div>

        </div>
 
      </div>
      <div className='joa' style={{marginTop: isSmallScreen ?  '200%':'',width: isSmallScreen ?  '380px':'', marginLeft: isSmallScreen ?  '10px':''}}>
      <Footer/>
      </div>

    </div>
  )
}

export default Services
