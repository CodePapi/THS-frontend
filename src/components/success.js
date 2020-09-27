import React from 'react'
import { Link } from 'react-router-dom'

export default function Err() {
    return (
        <div style={{ height:"100vh", background:"white"}}>
        <div style={{paddingTop:"30vh",}}>
        <div className="text-center">
           <h1 className="h6 i font-weight-lighter text-black"><span role="img" aria-label="404 smile" style={{fontSize:"50px"}}>😊</span><br/>Thank you for writing your story to us</h1>
           <br></br>
           <Link to="/"><button className="btn btn-dark btn-lg">Get back to our home page</button></Link> 
        </div>
        </div>
        </div>
    )
}
