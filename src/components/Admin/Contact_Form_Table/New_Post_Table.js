import React from "react";

import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/uk'
import { Link } from "react-router-dom";

import AdminNav from "../AdminNav";
let Endpoint="https://tranquil-escarpment-53988.herokuapp.com"||"http://localhost:4001"



  
export default class PostList extends React.Component {

 
       
        state={
          // docked: mql.matches,
          open: false,
          infos: []
         
    
        };
    
  state = {
    posts: []
  }
  
  componentDidMount() {
    axios.get(`${Endpoint}/posts/`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
  
  deleteRow(id, e){
    axios.delete(`${Endpoint}/posts/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const posts = this.state.posts.filter(item => item._id !== id);
        this.setState({ posts });
      })
  
  }


  approveRow(id, e){
    axios.post(`${Endpoint}/posts/approved/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const posts = this.state.posts.filter(item => item );
        this.setState({ posts });
      })
  
  }
  
  render() {
    return (
      <div>
       <AdminNav new_entry={this.state.posts.filter(person => person.approval_status ===true).length} approved={this.state.posts.filter(person => person.approval_status ===false).length}/>
        <div style={{height:"100px"}}></div>
        
  <div style={{overflowX: "auto"}}>
        <table className="table table-bordered">
            <thead style={{ color:"white",background:"#C72482" , }}>
              <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Post</th>
                  <th>Actions</th>
              </tr>
            </thead>
  
            <tbody>
              {this.state.posts.filter(person => person.approval_status ===true).reverse().map((post) => (
                <tr>
                  <td style={{fontSize:"12px"}}><Moment >{post.date}</Moment></td>
                 
                  <td>{post.name}</td>
              <td>{post.place}, {post.country}</td>
                  <td>{post.message}</td>
                  <td>
                  <Link style={{color:"white", background:"blue", cursor:'pointer'}} to={"/edit/"+post._id}>Edit</Link>
                
                    <i style={{color:"white", background:"red", cursor:'pointer'}} onClick={(e) => this.deleteRow(post._id, e)}>Delete</i>
                   <form onSubmit={(e) => this.approveRow(post._id, e)}>
                    <input type="submit" style={{color:"white", background:"green",cursor:'pointer'}} value ='Disapprove'/>
                    </form>
                    </td>
                </tr>
              ))}
            </tbody>
  
        </table>
      </div>
      </div>
    )
  }
}


