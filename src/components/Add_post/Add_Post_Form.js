import React, { useState } from 'react'
 import { CountryDropdown} from 'react-country-region-selector';
 import { useHistory } from "react-router-dom";
import axios from 'axios'
let Endpoint= "https://tranquil-escarpment-53988.herokuapp.com" || "http://localhost:4001" 


export default function Add_Post_Form() {
    const history=useHistory()

    // const [loading, setLoading] = useState(true);
    // // const [items, setItems] = useState(...);
    // const [value, setValue] = useState();
    const [countryAdd, setCountryAdd] = useState(
        { country: ''}
    );

    const [post, setPost] = useState(
        { message: '', name: '', place: ''}
    );

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }
    // const handleChangeCountry = (event) => {
    //     setPost({...countryAdd, [event.target.name]: event.target.value})
    // }
    const handleChangeCountry= (val)=> {
        setCountryAdd({ country: val });
      }
    

    const handleSubmit = (e) => {
        history.push('/success')
        e.preventDefault()
        const obj = {
            message: post.message,
            name: post.name,
         
            place: post.place,
            country:countryAdd.country
            
              };
        axios.post(Endpoint+'/posts/add',  obj)
          .then(function (response) {
              console.log(response)
         
          })
          .catch(function (error) {
              console.log(error)
          }) 
     


          setPost({ message: '', name: '', place: ''})
          setCountryAdd({country:""})
          
          ; }
    return (
        <div style={{height:"90vh", width:"100%", background:"#C72481", margin:"auto"}}>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>
                <label className="label h3 text-white">Story</label>
                <textarea className="input border-top-0 border-left-0 bg-contain"
                name="message"
                 value={post.message} onChange={handleChange} required
                
                ></textarea>
                </div>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>
                <label className="label h3 text-white">Name</label>
                <input className="input border-top-0 border-left-0 bg-contain"
                name="name"
                value={post.name} onChange={handleChange}
               required
                />
                </div>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>
                <label className="label h3 text-white">Location</label>
                <input className="input border-top-0 border-left-0 bg-contain"
                name="place"
                value={post.place} onChange={handleChange} 
                required
               />
                </div>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>   
                     
        <CountryDropdown
       name="country"
       className="input-country border-top-0 border-left-0 bg-contain "
 
  labelType="long"
  valueType="short"
  value={countryAdd.country} 
  
//   onChange={handleChangeCountry} 
  onChange={(val) => handleChangeCountry(val)} 
  />


</div>
                <div className="form-group pt-5" style={{width:"70%", margin:"auto"}}>
                <button  className="btn btn-dark  col-8 col-sm-4 col-xs-5 m-1" >Submit</button>
                </div>
            </form>
        </div>
    )
}




