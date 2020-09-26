import React,{useEffect,useState} from 'react'
import classes from "./home.module.css"
import ReactSiema from 'react-siema'
import axios from "axios"
import Zoom from 'react-reveal/Zoom';
import {Fade}from 'react-reveal';
import Typed from "react-typed"
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.addLocale(en);


let Endpoint="https://tranquil-escarpment-53988.herokuapp.com"||"http://localhost:4001"
export default function Body() {
    let slider
  

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
//   useEffect(async () => {
//     const result = await axios(
//       Endpoint+'/post',
//     );
 
//     setData(result.data);
//   }, []);
  const options = {
    duration: 1000,
    loop: true,
    
    resizeDebounce: 400
}
    return (
        // <div onClick={() => {setInterval(() => {slider.next()
                
        // }, 7000);}} 
        
        
        <div style={{height:"100%", width:"100%",  margin:"auto", paddingBottom:"10vh"}}>
          
            <div className=" text-center container-fluid" style={{margin:"auto", width:"95vw"}}>
                <div style={{minHeight:"50vh", margin:"auto"}} className="pt-1 mb-">
                <div style={{marginTop:"40px"}}></div>  
            <ReactSiema height="100vh" {...options} ref={siema => slider = siema}>
          
            {/* {data.map(item => (
                    <div  key={item._id}  id={item._id}>
                     
                        <div>
               <section>      
                <div >
                 {item.message}
                        </div>
                        </section>  
                    <div>
            <i className="h4">{item.name}</i>
         
                 <div>{item.place}</div>
                 </div>
                  </div>
                  </div>
            ))} */}

{data.filter(person => person.approval_status ===false).reverse().sort(() => Math.random() - 0.5).map(filteredPerson => (
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
<div className="h3 mx-1 name">{filteredPerson.name}</div> <div className="h3 mx-1 name">|</div> <div className="h3 mx-1 place">{filteredPerson.place}, {filteredPerson.country}</div>  <div className="h3 mx-1 name">|</div>
            <div className="h3 mx-1 date"><ReactTimeAgo date={filteredPerson.date} locale="en"/></div>
             {/* <div className="h3 mx-5 date"><Moment >{filteredPerson.date}</Moment></div> */}
            </div>
                 
                 </div>
                 </div>
                 </Zoom>
    </div>
  ))}
  {/* <div>
    <a href="/add_post"><i>Add your own story</i></a>
 <hr/>

<a href ="/about"> <i className="h1"> About Us</i></a>
<hr/>

<a  href="/">
<i >Read Newer Stories</i></a>


  </div> */}
            </ReactSiema>
            </div>
           
            <div style={{maxHeight:"30vh"}}></div>
            <hr className="container"style={{background:"white",width:"96%", border:"1px solid black"}}/>
            
           
           
            <div className="d-fex">
             
            <div  onClick={() => slider.prev()} className={classes.btn + " btn btn-lg btn-dark col-5 col-sm-4 col-xs-6 m-1"} >Previous</div>
            <div onClick={() =>slider.next()} className={classes.btn +" btn btn-lg btn-dark col-5 col-sm-4 col-xs-6 m-1"}>Next</div>
            <div onClick={() =>slider.next()} className={classes.btn +" " + classes.btnhide +" btn btn-lg col-5 col-sm-4 col-xs-6 m-1"}></div>
      
            <a href="/add_post"style={{background:"black", color:"white"}} className={classes.btn +" btn btn-lg btn-white border border-1 col-5 col-sm-4 col-xs-6 m-1" } >Add</a>
      
  

            {/* <div > */}
            {/* <button style={{width:"40px", height:"40px"}} className="btn  rounded-circle m-1" data-toggle="modal" data-target="#details">?</button> */}
          
          
           {/* <a style={{width:"20vw"}}  className="btn btn-dark btn-lg col-8 col-sm-4 col-xs-6 m-1 p-1" href="/add_post">Add</a> 
            */}
            {/* </div> */}
            </div>
          
           

            
        </div>


     
    <section>

        <div class="modal fade" id="details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
