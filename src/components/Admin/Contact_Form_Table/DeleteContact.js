

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeleteContact extends Component {

    constructor(props) {
        super(props);

      
        // this.onChangeContactName = this.onChangeContactName.bind(this);
        // this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
        // this.onChangeContactMessage = this.onChangeContactMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // this.state = {
        //     contact_name: '',
        //    contact_email: '',
        //     contact_message: '',
           
        // }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:4001/contact_form/'+this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
                   
    //                 contact_name: response.data.contact_name,
    //                 contact_email: response.data.contact_email,
    //                 contact_message: response.data.contact_message
    //             })
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         })
    // }

   

    // onChangeContactName(e) {
    //     this.setState({
    //         contact_name: e.target.value
    //     });
    // }

    // onChangeContactEmail(e) {
    //     this.setState({
    //         contact_email: e.target.value
    //     });
    // }

    // onChangeContactMessage(e) {
    //     this.setState({
    //         contact_message: !this.state.todo_completed
    //     });
    // }

    onSubmit(e) {
        e.preventDefault();
       
        axios.delete('http://localhost:4001/post/'+this.props.match.params.id)
            .then(res => console.log(res.data));

        
            



       
    }
   

    render() {
        window.addEventListener("load", ()=>{
            this.onSubmit()
        })
        return (
            <div onLoad={this.onSubmit} style={{background:"#f6f6f6", height:"100vh"}}> 
            <section style={{textAlign:"center", background:"#f6f6f6", paddingTop:"30vh"}}>
           <button className="btn-danger btn p-5">Danger Zone</button>  
           <h5>This will be deleted permenently from  your database</h5>
              <h3>Are You sure You want continue this process??? </h3>
                {/* <section className="d-flex" style={{marginLeft:"30vw"}}>
                <div >
                    <br/>
                 </div> */}
                <form onSubmit={this.onSubmit} >
                   
                        <br/>
                        <div className="form-group">
                       <Link type='button' className="btn btn-success  w-25 p-1 h1" to="/admin" style={{color:"white"}}>NO</Link>
              
             
                            <input type="submit" value="DELETE" className="btn btn-danger w-25 p-1 h1" />
                        </div>
                    {/* </div> */}
                </form>
                </section>
                {/* </section> */}
            </div>
        )
    }
}