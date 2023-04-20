import React from 'react'
import './Newscard.css'
import cal from "../images/cal.png"
import { useMediaQuery } from 'react-responsive';




const Newscard = (propse) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div>
      
        <div className='piic' style={{display: isSmallScreen?"flex":"", flexDirection: isSmallScreen? "column":"", }}>
       
        <img src={propse.imgs} className='imgs' style={{width: isSmallScreen ? "90%":""}}/>
        
        <img src={cal} className='safu' style={{width: isSmallScreen ? "10%":"",height: isSmallScreen ? "4vh":"", marginTop: isSmallScreen ? "85%":"",marginLeft: isSmallScreen ? "50%":""}}/>
        <h4 style={{ marginTop: isSmallScreen ? "80%":"",marginLeft: isSmallScreen ? "-12%":"",fontSize: isSmallScreen ? "18px":""}}>{propse.dates}</h4>
        <h5 style={{ marginTop: isSmallScreen ? "62%":"",marginLeft: isSmallScreen ? "9%":"",fontSize: isSmallScreen ? "18px":""}}>{propse.day}</h5>
       
        <div className='haha' style={{borderLeft: isSmallScreen ? "none":"", marginTop: isSmallScreen ? "83%":"",marginLeft: isSmallScreen ? "-12%":"",}}>
          <h1 style={{fontSize: isSmallScreen ? "17px":"", width: isSmallScreen? "240px":"", marginTop: isSmallScreen? "17%":"",}}>{propse.haha}</h1>
          
          <p style={{display: isSmallScreen? "none":""}}>{propse.huhu}</p>
          <h2 style={{display: isSmallScreen? "none":""}}>{propse.yuh}</h2>
          <h3 style={{display: isSmallScreen? "none":""}}>{propse.yu}</h3>
         
        </div>

        
        </div>
     
      

    </div>
  )
}

export default Newscard
