import React from 'react'
import { Link } from 'react-router-dom'

export default function Not_Logged() {
    return (
        <div style={{ height:"100vh", background:"black"}}>
        <div style={{paddingTop:"30vh",}}>
        <div className="text-center">
           <h1 className="h1 i font-weight-lighter"> You Are Currently Not Logged </h1>
           <br></br>
           <Link to="/login"><button className="btn btn-dark btn-lg">Log in</button></Link> 
        </div>
        </div>
        </div>
    )
}
