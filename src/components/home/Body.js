import React,{useEffect,useState} from 'react'
import ReactSiema from 'react-siema'
import axios from "axios"
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.addLocale(en);
let Endpoint="http://localhost:4001"

export default function Body() {
    let slider
  

    const [data, setData] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      Endpoint+'/post',
    );
 
    setData(result.data);
  }, []);
  const options = {
    duration: 1000,
    loop: true,
    resizeDebounce: 400
}
    return (
        <div style={{height:"100%", width:"100%", background:"#C72481", margin:"auto", paddingBottom:"15vh"}}>
          
            <div className="text-white text-center container-fluid" style={{margin:"auto", width:"90vw"}}>
                <div style={{minHeight:"50vh", margin:"auto"}} className="pt-3 mb-">
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

{data.filter(person => person.approval_status ==false).reverse().sort(() => Math.random() - 0.5).map(filteredPerson => (
    <div key={filteredPerson._id} >
    <Zoom>
      <div style={{width:"100%"}}>
               <section>      
                <div className="h2 container t-big" style={{textAlign:'left', height:"40vh", overflowX:"auto", overflowY:"auto", width:"100%"}}>
                 {filteredPerson.message}
                        </div>
                        </section>  
                        <br/>
                        <br/>
                    <div>
                      <div height="100px"></div>
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
  <div>
    <a href="/add_post"><i>Add your own story</i></a>
 <hr/>

<a href ="/about"> <i className="h1"> About Us</i></a>
<hr/>

<a href href="/">
<i >Read Newer Stories</i></a>


  </div>
            </ReactSiema>
            </div>
           
            <div style={{maxHeight:"30vh"}}></div>
            <hr className="container mx-1"style={{background:"white",width:"90%", border:"1px solid white",}}/>
            <div id="btn-s" style={{margin:"auto", width:'90%'}}>
            <div style={{width:"300px"}}>
            <button onClick={() => slider.prev()} className="btn btn-lg btn-dark col-5 col-sm-4 col-xs-6 m-1">Previous</button>
            <button onClick={() => slider.next()} className="btn btn-lg btn-dark col-5 col-sm-4 col-xs-6 m-1">Next</button>
            </div>
            <div style={{width:"300px"}}>
            <button style={{width:"40px", height:"40px"}} className="btn  rounded-circle m-1" data-toggle="modal" data-target="#details">?</button>
           <a href="/add_post"><button  className="btn btn-dark btn-lg col-8 col-sm-4 col-xs-6 m-1 p-1">Add</button></a> 
            </div>
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
