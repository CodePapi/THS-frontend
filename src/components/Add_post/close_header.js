import React from 'react'
import {Link} from "react-router-dom"
export default function Close_header() {
    return (
        <div className="container" style={{height:"10vh", width:"100vw", margin:"auto"}}>
            <div className="m-3 mr-5" style={{float:"right", fontSize:"50px", color:"white", marginRight:"140px"}}><Link to="/"><i className="fa fa-times"></i></Link></div>
        </div>
    )
}
