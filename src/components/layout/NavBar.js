import React from 'react'
// import Logo from "./../../../public/images/LogoTwoHalf.svg"
import Logo from "../images/LogoTwoHalf.svg"

import Zoom from 'react-reveal';
export default function NavBar() {
    return (
        <div>
            <nav id="navbar-example2" class="navbar navbar-white bg-white">
  <a className="navbar-brand" href="/"><img src={Logo} style={{width:"40%"}} alt="logo"/></a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <div className="nav-link h3 nav-move" style={{color:"#C72481",  fontWeight: "bolder", fontFamily:"Helvetica !important"}} >  
      <Zoom>What We Are Telling Our Kids About 2020 by Two Half Stories</Zoom>
      {/* <Zoom
                    strings={['  What We Are Telling Our Kids About 2020 by Two Half Stories']}
                    typeSpeed={160}
                  
                /> */}
     
</div>
    </li>
    
  
    <li className="nav-item about-nav">
      <a href="/about" className="nav-link h2 about"style={{color:"#C72481", fontWeight: "bolder"}} >About</a>
    </li>
 
  </ul>
</nav>

        </div>
    )
}
