import React from 'react'
import { Link } from 'react-router-dom'

export default function Err() {
    return (
        <div style={{ height:"100vh", background:"black"}}>
        <div style={{paddingTop:"30vh",}}>
        <div className="text-center">
           <h1 className="h4 i font-weight-lighter"><span role="img" aria-label="404 smile">😊</span>Thank you for writing your story to us, a member of our team will get it approved as soon as it meets our demand. Once again, we say thank you, you are important</h1>
           <br></br>
           <Link to="/"><button className="btn btn-dark btn-lg">Get back to our home page</button></Link> 
        </div>
        </div>
        </div>
    )
}
