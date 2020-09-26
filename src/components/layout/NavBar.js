import React from 'react'
// import Logo from "./../../../public/images/LogoTwoHalf.svg"
import Logo from "../images/LogoTwoHalf.svg"
import classes from "../home/home.module.css"
// import Zoom from 'react-reveal';

export default function NavBar() {
    return (
        <div className="container">
        
     
        
            <nav id="navbar-example2" class="navbar navbar-white bg-white d-flex">
  <a className="navbar-brand" href="/"><img src={Logo} style={{width:"40%"}} alt="logo"/></a>
 
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
  
    <li className="">
      <a href="/about" className="h3 "style={{color:"black", fontWeight: "bolder"}} data-toggle="modal" data-target="#details"><i className="fa fa-book"></i></a>
    </li>
 
  </ul>



</nav>



<section>

<div class="modal fade" id="details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style={{  background:"black"}}>
            <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
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
            <ul style={{listStyle:'none'}}>
              <li><a href="/about" className={classes.h2+ " h3"}>About</a></li>
              <li data-toggle="modal" data-target="#detail"><div className={classes.h2+ " h3"}>Details</div></li>
              <li><a href="/add_post" className={classes.h2+ " h3"}>Add</a></li>
            </ul>
            
            

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
