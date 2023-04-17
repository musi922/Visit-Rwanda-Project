import React from 'react'
import './Newscard.css'
import cal from "../images/cal.png"



const Newscard = (propse) => {
  return (
    <div>
      
      <div className='piic'>
      <img src={propse.imgs} className='imgs'/>
      <img src={cal} className='safu'/>
      <h4>{propse.dates}</h4>
      <h5>{propse.day}</h5>
      <div className='haha'>
        <h1>{propse.haha}</h1>
        
        <p>{propse.huhu}</p>
        <h2>{propse.yuh}</h2>
        <h3>{propse.yu}</h3>
      </div>

      
      </div>
      

    </div>
  )
}

export default Newscard
