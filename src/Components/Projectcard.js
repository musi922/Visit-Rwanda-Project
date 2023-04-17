import React from 'react'
import './Projectcard.css'

const Projectcard = (props) => {
  return (
    <div>
      <div className='pic'>
        <img src={props.img} className='img'/>
        <h1>{props.head}</h1>
        <p>{props.desc}</p>

      </div>
    </div>
  )
}

export default Projectcard
