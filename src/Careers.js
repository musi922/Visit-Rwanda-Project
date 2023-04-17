import React from 'react'
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


const Careers = () => {
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

            <Link to={"/AboutIA"} style={{textDecoration:"none"}}><h1>About us</h1></Link>
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
            <h1>Want to become member</h1>
            <h2>Your Gateway to any Data in the World</h2>
            <h3>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </h3>

            <div className='explore'>
              <div className='rot'></div>
              <h1>Welcome here</h1>

            </div>
          

          </div>
          
        </div>
      </div>
      <div className='car'>
        <h1>Your Career Solutions</h1>
        <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>

        <div className='hee'>
            <p>“Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business.”</p>

        </div>
        <h3>Safest Career Solutions Provider With Integrity</h3>
        <h4>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</h4>
        <div className='cargo'>
            <img src={career} className='rgo'/>
        </div>
        <h5>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium.

Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</h5>
        <div className='side'>
            <div className='boy'>
                <h1>Categories</h1>
                <div className='one'>
                    <h1>Dashboard Designer</h1>
                </div>
                 <div className='two'>
                    <h1>Database Administrator</h1>
                </div>
                <div className='three'>
                <h1>Data Visualization Specialist</h1>
                </div>
                <div className='four'>
                <h1>Business Intelligence Analyst</h1>
                </div>
                <div className='five'>
                <h1>Dashboard Administrator</h1>
                </div> 
            </div>
        </div>
        <div className='girl'>
            <h1>Need To be a member?</h1>
            <p>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.</p>
            <div className='explores'>
              <div className='rots'></div>
              <h1>Contact us</h1>

            </div>
          
        </div>
      </div>
      <div className='shan'>
      <Footer/>
      </div>
    </div>
  )
}

export default Careers
