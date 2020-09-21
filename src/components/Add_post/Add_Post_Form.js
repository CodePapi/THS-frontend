import React, { useState, useEffect } from 'react'
 import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import axios from 'axios'
let Endpoint="http://localhost:4001"


export default function Add_Post_Form() {


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
        e.preventDefault()
        const obj = {
            message: post.message,
            name: post.name,
         
            place: post.place,
            country:countryAdd.country
            
              };
        axios.post(Endpoint+'/post/add',  obj)
          .then(function (response) {
              console.log(response)
          })
          .catch(function (error) {
              console.log(error)
          }) 
        //   axios.post(Endpoint+'/post/add',  countryAdd)
        //   .then(function (response) {
        //       console.log(response)
        //   })
        //   .catch(function (error) {
        //       console.log(error)
        //   }) 




          setPost({ message: '', name: '', place: ''})
          setCountryAdd({country:""})
          
          ; }
    return (
        <div style={{height:"80vh", width:"100%", background:"#C72481", margin:"auto"}}>
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
               
                />
                </div>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>
                <label className="label h3 text-white">Location</label>
                <input className="input border-top-0 border-left-0 bg-contain"
                name="place"
                value={post.place} onChange={handleChange} 
               />
                </div>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>   
                     
        <CountryDropdown
       name="country"
       className="input-country border-top-0 border-left-0 bg-contain text-green"
 
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










// import React, { useState, useEffect } from 'react'
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
// import axios from 'axios'
// let Endpoint="http://localhost:4001"


// export default function Add_Post_Form() {
//     // constructor (props) {
//     //     super(props);
//     //     this.state = { country: '', region: '' };
//     //   }
    
//      let val
//     const [dropDown, setDropDown]=useState({country:""})
//     const [post, setPost] = useState(
//         { message: '', name: '', place: ''}
//     );

//     useEffect(() => {
//         effect
//         return () => {
//             set
//         }
//     }, [input])
//     const handleChange = (event) => {
        
//         setPost({...post, [event.target.name]: event.target.value  })
        
//         // setPost({[post.country.name]: post.country.value })
       
//     }



//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post(Endpoint+'/post/add', post)
//           .then(function (response) {
//               console.log(response)
              
//           })
//           .catch(function (error) {
//               console.log(error)
//           }) 




//           setPost()({ message: '', name: '', place: ''}); }

          

//         // const  selectCountry =(val)=> {
//         //     setPost({ country: val });
//         //   }
        
//         //  const selectRegion= (val)=> {
//         //    setDropDown({ region: val });
//         //   }
//     return (
//         <div style={{height:"80vh", width:"100%", background:"#C72481", margin:"auto"}}>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group" style={{width:"70%", margin:"auto"}}>
//                 <label className="label h3 text-white">Story</label>
//                 <textarea className="input border-top-0 border-left-0 bg-contain"
//                 name="message"
//                  value={post.message} onChange={handleChange} required
//                  maxlength="50" placeholder="Enter text here"
//                 ></textarea>
//                 </div>
//                 <div className="form-group" style={{width:"70%", margin:"auto"}}>
//                 <label className="label h3 text-white">Name</label>
//                 <input className="input border-top-0 border-left-0 bg-contain"
//                 name="name"
//                 value={post.name} onChange={handleChange}
               
//                 />
//                 </div>
//                 <div className="form-group" style={{width:"70%", margin:"auto"}}>
//                 <label className="label h3 text-white">Location</label>
//                 <input className="input border-top-0 border-left-0 bg-contain"
//                 name="place"
//                 value={post.place} onChange={handleChange} 
//                />
//                 </div>


//      <div className="form-group" style={{width:"70%", margin:"auto"}}>        
//        {/* <CountryDropdown
//        name="country"
//        className="input-country border-top-0 border-left-0 bg-contain text-green"
 
//   labelType="long"
//   valueType="short"
//   value={post.country} onChange={selectCountry, handleChange} 
//   /> */}
// {/* <RegionDropdown 
//   country={dropDown.country}
//   value={dropDown.region}
//   countryValueType="short"
//   labelType="short"
//   valueType="short"
//   onChange={selectRegion} /> */}
//   </div>
//                 <div className="form-group pt-5" style={{width:"70%", margin:"auto"}}>
//                 <button  className="btn btn-dark  col-8 col-sm-4 col-xs-5 m-1" >Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

