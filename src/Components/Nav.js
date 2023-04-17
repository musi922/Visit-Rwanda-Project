import React from 'react'
import "./nav.css"
import Frame from "../images/Frame.jpg";
import { BiTimeFive } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className='top-nav'>
        <div className='image' >
            <img src={Frame} style={{marginTop:"-2%", marginLeft:"6px"}}/>
        </div>
        <div className='time'>
            <div >
                <div className='duration'>
                    <BiTimeFive className='icon'/>
                </div>
                <div>
                    <h1>Mon - Sat 9.00 - 18.00
                        <br></br>Sunday Closed
                    </h1>
                </div>

            </div>
           
        </div>
        <div className='times'>
            <div >
                <div className='durations'>
                    <BiMessage className='icon'/>
                </div>
                <div>
                    <h1>Email
                        <br></br>I A group@gmail.com
                    </h1>
                </div>

            </div>
           
        </div>
        <div className='tim'>
            <div >
                <div className='duratio'>
                <IoCallOutline className='icon'/>
                </div>
                <div>
                    <h1>Call Us
                        <br></br>+250799340499
                    </h1>
                </div>

            </div>
           
        </div>

      </div>
    </div>
  )
}

export default Nav
