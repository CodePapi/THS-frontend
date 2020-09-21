import React from "react";
import UserContext from "../../auth/context/userContext";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "../material_title_panel";
import SidebarContent from "../SiddebarContent";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/uk'
import { Link } from "react-router-dom";
import Close_header from "../../Add_post/close_header";
import AdminNav from "../AdminNav";
let Endpoint="http://localhost:4001"

const styles = {
    contentHeaderMenuLink: {
      textDecoration: "none",
      color: "white",
      padding: 8
    },
    content: {
      padding: "16px"
    }
  };

const mql = window.matchMedia(`(min-width: 1500px)`);
  
export default class Approved extends React.Component {

 
       
        state={
          // docked: mql.matches,
          open: false,
          infos: []
         
    
        };
    
  state = {
    posts: []
  }
  
  componentDidMount() {
    axios.get(`${Endpoint}/post/`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
  
  deleteRow(id, e){
    axios.delete(`${Endpoint}/post/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const posts = this.state.posts.filter(item => item._id !== id);
        this.setState({ posts });
      
      })
  
  }


  approveRow(id, e){
    axios.post(`${Endpoint}/post/dissaprove/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const posts = this.state.posts.filter(item => item );
        this.setState({ posts });
      })
  
  }
  
  render() {
    return (
      <div  > 
        <AdminNav new_entry={this.state.posts.filter(person => person.approval_status ==true).length} approved={this.state.posts.filter(person => person.approval_status ==false).length}/>
        
        {/* <Close_header/> */}
        {/* <h1 style={{background:"#C72482", textAlign:"center", color:"white", position:"fixed", width:"100vw"}}>Approved</h1> */}
  <div style={{height:"100px"}}></div>
  <div   style={{overflowX: "auto"}}>
        <table className="table table-bordered">
            <thead style={{background:'blue', color:"white",background:"#C72482" , }}>
              <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Post</th>
                  <th>Actions</th>
              </tr>
            </thead>
              {console.log(this.state.posts.filter(person => person.approval_status ==false).length)}
              {console.log(this.state.posts.filter(person => person.approval_status ==true).length)}
            <tbody style={{marginTop:"200px"}}>
              {this.state.posts.filter(person => person.approval_status ==false).reverse().map((post) => (
                <tr>
                  <td style={{fontSize:"12px"}}><Moment >{post.date}</Moment></td>
                 
                  <td>{post.name}</td>
                  <td>{post.place}</td>
                  <td>{post.message}</td>
                  <td>
                  <Link style={{color:"white", background:"blue", cursor:'pointer'}} to={"/edit/"+post._id}>Edit</Link>
                    <i style={{color:"white", background:"red", cursor:'pointer'}} onClick={(e) => this.deleteRow(post._id, e)}>Delete</i>
                    <form onSubmit={(e) => this.approveRow(post._id, e)}>
                    <input className="i" type='submit' style={{color:"white", background:"green",cursor:'pointer'}} value="Disapprove"/>
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



