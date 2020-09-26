import React from 'react'
import Roll from 'react-reveal/Roll';
import {Zoom, Fade} from 'react-reveal';
import {Link} from "react-router-dom"
export default function _Head() {
    return (
        <div className="text-left" style={{height:"100%", width:"100%", margin:"auto"}}>
           <div style={{margin:"auto", width:"60%"}}>
            <h1 style={{fontWeight:"900"}} className="h1">About</h1>
            
            <br/><p><Fade right>2020 has been an interesting year to say the least.</Fade></p><p><Zoom>Looking at the rollercoaster ride, the uncertainty,</Zoom> </p>  <Zoom> anxiety and all the change this year has brought with it, we asked a couple of friends what they will tell their kids about 2020.</Zoom><p><Zoom>There are humorous, reflective and interesting answers. </Zoom></p>
        
            <br/> <p><Roll left>We invite you to include your own answer and flick through the answers on the platform.</Roll><Zoom> You never know, you may find your soul mate.</Zoom></p>
            <br/>
            <Zoom>
            <h2  className="h5"><b>Initiator: </b><i className="i">Toyin Jolapamo</i></h2>
            <h2  className="h5"><b>UI Design:  </b><i className="i">Nnaemeka Otti</i></h2>
            <h2  className="h5"><b>Software Developer:  </b><i className="i">Samuel Egbajie</i></h2>
            </Zoom>
            <br></br>
            <Link to="/">
            <button  className="btn btn-dark  col-8 col-sm-4 col-xs-5 m-1" >Return</button>
            </Link>
        </div>
        </div>

    )
}
