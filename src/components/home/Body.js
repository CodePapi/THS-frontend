import React,{useEffect,useState} from 'react'
// import classNamees from "./home.module.css"
import ReactSiema from 'react-siema'
import axios from "axios"
import Zoom from 'react-reveal/Zoom';
import {Fade}from 'react-reveal';
import Typed from "react-typed";
import { ShareSVG, PrevSVG, NextSVG } from './HomepageSVG';
import ReactTimeAgo from 'react-time-ago'
import { useHistory } from 'react-router-dom';
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.addLocale(en);


let Endpoint="https://tranquil-escarpment-53988.herokuapp.com"||"http://localhost:4001"
export default function Body() {
    const history = useHistory();
    let slider;
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          // You can await here
        //   const response = await MyAPI.getData(someId);
       
        const result = await axios(
            Endpoint+'/posts',
          );
          setData(result.data);
        }
    fetchData()},[]
    )
  const options = {
    duration: 1000,
    loop: true,
    
    resizeDebounce: 400
}

    const shareLink = () => history.push("/add_post");

    return (
        <div style={{height:"100%", width:"100%",  margin:"auto", paddingBottom:"10vh"}}>
          
            <div className=" text-center container-fluid" style={{margin:"auto", width:"95vw"}}>
                <div style={{minHeight:"50vh", margin:"auto"}} className="pt-1 mb-">
                <div style={{marginTop:"40px"}}></div>  
            <ReactSiema height="100vh" {...options} ref={siema => slider = siema}>

{data.filter(person => person.approval_status ===true).reverse().sort(() => Math.random() - 0.5).map(filteredPerson => (
    <div key={filteredPerson._id} >
    <Zoom>
      <div style={{width:"100%"}}>
               <section>      
                <div className="h2 container t-big" style={{textAlign:'left', height:"40vh", overflowX:"auto", overflowY:"auto", width:"100%"}}>
                
                <Fade> <Typed
                    strings={[`<Fade>${filteredPerson.message}</Fade>`]}
                    typeSpeed={10}
                  
                /></Fade>
                        </div>
                        </section>  
                        <br/>
                        <br/>
                    <div>
                      <div height="80px"></div>
                      <div className="container"  style={{display:"flex"}}>
                      <div className="h3 mx-1 date"><ReactTimeAgo date={filteredPerson.date} locale="en"/></div>
                      <div className="h3 mx-1 name" style={{fontWeight:"bolder"}}>.</div>
<div className="h3 mx-1 name">{filteredPerson.name}</div> <div className="h3 mx-1 name fontweight-bolder" style={{fontWeight:"bolder"}}>.</div> <div className="h3 mx-1 place">{filteredPerson.place} </div>  
            </div>
                 </div>
                 </div>
                 </Zoom>
    </div>
  ))}
            </ReactSiema>
            </div>
            <div style={{maxHeight:"30vh"}}></div>
            <hr className="container"style={{background:"white",width:"96%", border:"1px solid black"}}/>
            
            <div className="homepage-buttons">
                <div className="control-buttons">
                    <div  onClick={() => slider.prev()}><PrevSVG /></div>
                    <div onClick={() =>slider.next()}><NextSVG /></div>
                </div>
                <button onClick={shareLink} href="/add_post">
                    <ShareSVG />
                    <span>Share a story</span>
                </button>
            </div>
        </div>
        </div>
    )
}
