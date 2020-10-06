import React,{useState} from 'react'
import {Link} from "react-router-dom"
import AuthOptions from '../auth/components/auth/AuthOptions'
export default function AdminNav(props) {
    const[close, setClose]=useState(true)

    return (
        <section onClick={(()=>setClose(!close))} style={{position:"fixed", zIndex:"100"}}>
        <div className="containr" style={{height:"15vh", width:"100vw", margin:"auto", background:"#C72482"}}>
        <div className="m-3 " style={{float:"left", fontSize:"50px", color:"white"}}><i  onClick={(()=>setClose(!close))} style={{cursor:"pointer"}} className="fa fa-bars"></i></div>
         
            <div className="m-3 pr-3" style={{float:"right", fontSize:"50px", color:"white"}}><Link to="/"><i className="fa fa-times"></i></Link></div>
        </div>
        <section className="text-left pl-5 pt-5" style={{width: close?"0px":"300px",display: close?"none":"block", height:"100vh", border:"1px solid blue", background:"#C72481"}}>
 <h3 style={{color:"white"}}>Welcome {props.name}</h3>
<Link to="/posts">
<h4 className="m-1 h5" style={{color:'#FFFFFF', cursor:"pointer"}}>
({props.new_entry})New Entry 
</h4>


</Link>

<Link to="/approved">
<h4 className="m-1 h5" style={{color:'#FFFFFF', cursor:"pointer"}}>
({props.approved})Disapproved Storylines
</h4>


</Link>
{/* <h4 style={{cursor:"pointer"}}>
    New Entry
</h4> */}
<div style={{marginTop:"50vh" , cursor:"pointer"}} >

<h4 className="h5 m-1">
<AuthOptions/>
</h4>

</div>
        </section>
        </section>
    )
}
