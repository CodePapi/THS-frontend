import React from 'react'
// import Logo from "./../../../public/images/LogoTwoHalf.svg"
import Logo from "../images/LogoTwoHalf.svg"
import classes from "../home/home.module.css"
import "../home/swing.css"
import styles from "./nav.module.css"

// import Zoom from 'react-reveal';

export default function NavBar() {
    return (
        <div className="container">
        
     
        
            <nav class="navba container navbar-white bg-white d-flex pt-3">
  <a className="navbar-brand" style={{width:'100%'}} href="/"><img src={Logo} style={{width:"140px"}} alt="logo"/>
  
 
  </a>
 
  <ul className="nav nav-pills">
    {/* <li className="nav-item">
      <div className="nav-link h3 nav-move" style={{color:"#C72481",  fontWeight: "bolder", fontFamily:"Helvetica !important"}} >  
      <Zoom>What We Are Telling Our Kids About 2020 by Two Half Stories</Zoom> */}
      {/* <Zoom
                    strings={['  What We Are Telling Our Kids About 2020 by Two Half Stories']}
                    typeSpeed={160}
                  
                /> */}
     
{/* </div> */}
 
 
    {/* </li> */}
  

 <li className={styles.dropdowncontent}>
  <img src={Logo} alt="Cinque Terre" width="300" height="200"/>
  <div className={styles.desc}>Beautiful Cinque Terre</div>
 
 </li>

  </ul>

  
  <div className={styles.dropdown+" swing"} >
      <a href="/about" className={"h1"} style={{color:"black", fontWeight: "bolder"}} data-toggle="modal" data-target="#details"><i className={" fa fa-book"}  ></i>
 
      
      </a>
    </div>


</nav>



<section>

<div class="modal fade" id="details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document" style={{margin:"aut", textAlign:"center", maxWidth:"200px"}}>
        <div class="modal-content" style={{  background:"gray"}}>
            {/* <div class="modal-header" style={{textAlign:"center"}}>
hello
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> */}
            <div style={{margin:"auto"}}>
            <div data-dismiss="modal" aria-label="Close" style={{width:"40px", height:"40px", borderRadius:"50%", background:"black", cursor:"pointer"}}>
            <span className="h1" aria-hidden="true">&times;</span>
            </div>
            </div>
            {/* <div class="modal-body">
                <h5 class="modal-title" id="exampleModalLabel">
                    <h4><i class="fa fa-hand-o-right"></i> swipe
                        <i class="fa fa-arrow-left"></i>
                        <i class="fa fa-hand-pointer-o"></i>
                        <i class="fa fa-arrow-right"></i>
                        or click <b>Previous</b> / <b>Next</b> buttons to view people's stories.
                    </h4>
                    <hr/>
                    <h4><i class="fa fa-hand-o-right"></i> Click the <b>Add</b> button to add your own story
                    </h4>


                </h5>
            </div> */}
            <div style={{listStyle:'none',}}>
              <div><a href="/about" className={classes.h2+ " h3"}>About</a></div>
              {/* <li data-toggle="modal" data-target="#details">Details</li> */}
              <div><a href="/add_post" className={classes.h2+ " h3"}>Add</a></div>
            </div>
            
            

        </div>
    </div>
</div>




</section>

   
<section>

<div class="modal fade" id="detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style={{  background:"#C72481"}}>
            <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h5 class="modal-title" id="exampleModalLabel">
                    <h4><i class="fa fa-hand-o-right"></i> swipe
                        <i class="fa fa-arrow-left"></i>
                        <i class="fa fa-hand-pointer-o"></i>
                        <i class="fa fa-arrow-right"></i>
                        or click <b>Previous</b> / <b>Next</b> buttons to view people's stories.
                    </h4>
                    <hr/>
                    <h4><i class="fa fa-hand-o-right"></i> Click the <b>Add</b> button to add your own story
                    </h4>


                </h5>
            </div>

        </div>
    </div>
</div>




</section>
        </div>
    )
}
