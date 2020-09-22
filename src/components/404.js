import React from 'react'
import { Link } from 'react-router-dom'

export default function Err() {
    return (
        <div style={{ height:"100vh", background:"black"}}>
        <div style={{paddingTop:"30vh",}}>
        <div className="text-center">
           <h1 className="h1 i font-weight-lighter">4<span role="img" aria-label="404 smile">😊</span>4|| You have reached the end of the internet </h1>
           <br></br>
           <Link to="/"><button className="btn btn-dark btn-lg">Get back to our home page</button></Link> 
        </div>
        </div>
        </div>
    )
}
