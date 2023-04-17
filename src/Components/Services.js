import React from 'react'
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


const Services = () => {
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

      </div>
      <div className='bodys'>
        <img src={hhh} className='Photos'/>
        <div className='texts'>
          <div className='logisticss'>
            <div className='colors'></div>
            <h1>Services</h1>

          </div>
          <h2>Our Data Services</h2>
          
        </div>
      </div>
      <div className='abouts'>
      <div className='rics'>
      <div className='colorss'></div>
      <h1>What We Do</h1>
      </div>
      <h2>Our Data Services</h2>
      <img src={Icon} className='safes'/>
      <img src={icons} className='safess'/>
      <img src={yeah} className='safas'/>
      <img src={you} className='safasi'/>
      <div className='datas'>
        <h1>Data Management</h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={data} className='safee'/>
      </div>
      <div className='bis'>
        <h1>Data integration</h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        
      </div>
      <div className='trains'>
        <h1>
        Data cleaning and processing
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>
        <img src={Iconbb} className='safeds'/>
          
      </div>
      <div className='conss'>
        <h1>
        Data Dashboards
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>

      </div>
      <div className='consi'>
        <h1>
        Data analysis
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>

      </div>
      <div className='consis'>
        <h1>
        Consulting and training
        </h1>
        <p>Following the quality of our service thus having gained trust of our many clients.</p>

      </div>
      
      </div>
      <div className='how'>
        <h1>IA Group Services Decription</h1>
        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.

</p>
      </div>
      <div className='ben'>
        <h1>Benefits of Our Services</h1>
        <p>Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis.</p>
        <h2><AiOutlineArrowRight />  Clearance and compliance service</h2><br></br><br></br>
        <h2><AiOutlineArrowRight />  Saving Time to Deal with commodo iaculis</h2><br></br><br></br>
        <h2><AiOutlineArrowRight />  Automate your business elis tristique</h2><br></br>
        <div className='tab'>
          <img src={ines} className='ines'/>
          <div className='vid'>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/mRbeIZKcDyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='work'>
            <h1>How It Works</h1>
            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, doloremque laudantium.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis.</p>
          </div>

        </div>
 
      </div>
      <div className='joa'>
      <Footer/>
      </div>

    </div>
  )
}

export default Services
