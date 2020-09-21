import React from 'react'
// import Logo from "./../../../public/images/LogoTwoHalf.svg"
import Logo from "../images/LogoTwoHalf.svg"
import Typed from 'react-typed';
export default function NavBar() {
    return (
        <div>
            <nav id="navbar-example2" class="navbar navbar-white bg-white">
  <a class="navbar-brand" href="#"><img src={Logo} style={{width:"40%"}} alt=""/></a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link h3 nav-move" style={{color:"#C72481",  fontWeight: "bolder", fontFamily:"Helvetica !important"}} >  
      
      <Typed
                    strings={['  What We Are Telling Our Kids About 2020 by Two Half Stories']}
                    typeSpeed={160}
                  
                />
     
</a>
    </li>
    
  
    <li class="nav-item about-nav">
      <a href="/about" className="nav-link h2 about"style={{color:"#C72481", fontWeight: "bolder"}} >About</a>
    </li>
 
  </ul>
</nav>

        </div>
    )
}
