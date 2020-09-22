import React, {Component} from 'react';

// import UserContext from "../../auth/context/userContext";
// import AuthOptions from '../../auth/components/auth/AuthOptions';
import axios from 'axios';
import AdminNav from '../AdminNav';
let Endpoint="http://localhost:4001"

// const { userData } = useContext(UserContext)

// export default function Home() {
//   const { userData } = useContext(UserContext);

//   return (
//     <div className="page">
//       <AuthOptions/>
//       {userData.user ? (
//         <h1>Welcome {userData.user.displayName}</h1>
      
      
      
//         ) : (
//         <>
//           <h2>You are not logged in</h2>
//           <Link to="/login">Log in</Link>
//         </>
//       )}
//     </div>
//   );
// }

export default class EditPost extends Component {
    // const { userData } = useContext(UserContext);
    // static contextType = UserContext
    
    constructor(props) {
        super(props);

       
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);

   
    
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            message:'',
            place:'',
            // userData:{}
             history:""
        }
    }
   
    componentDidMount() {

        // const context = this.context;
        //It will get the data from context, and put it into the state.
        // this.setState({ userData: context.userData });
        // const userData = this.context
        // const { userData } = useContext(UserContext)
        axios.get(Endpoint+'/post/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    message: response.data.message,
                    place: response.data.place,
                   
                    
                     
                })
            })
            .catch(function(error) {
                console.log(error)
            })

    // this.setState({
    //     userData: useContext(UserContext)
    // })     

           
    }

   
onChangeName(e) {
    this.setState({
        name: e.target.value
    });
  }
  
  onChangeMessage(e) {
      this.setState({
          message: e.target.value
      });
  }
  
  onChangePlace(e) {
      this.setState({
          place: e.target.value
      });
  }
  


  

    onSubmit(e) {
        e.preventDefault();
        const obj = {
          
      name: this.state.name,
      message: this.state.message,
      place: this.state.place,
      
        };
        axios.post(Endpoint+'/post/edit/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
       this.props.history.push("/posts")
    }

    render() {
  
        return (
            <section>
         
         <AdminNav/>
      
        <section style={{height:"100px"}}></section>
            <div style={{height:"80vh", width:"100%", background:"#C72481", margin:"auto"}}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>
                <label className="label h3 text-white">Story</label>
                <textarea className="input border-top-0 border-left-0 bg-contain"
                name="message"
                 value={this.state.message} onChange={this.onChangeMessage} required
                
                ></textarea>
                </div>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>
                <label className="label h3 text-white">Name</label>
                <input className="input border-top-0 border-left-0 bg-contain"
                name="name"
                value={this.state.name} onChange={this.onChangeName}
               
                />
                </div>
                <div className="form-group" style={{width:"70%", margin:"auto"}}>
                <label className="label h3 text-white">Location</label>
                <input className="input border-top-0 border-left-0 bg-contain"
                name="place"
                value={this.state.place} onChange={this.onChangePlace} 
               />
                </div>
                <div className="form-group pt-5" style={{width:"70%", margin:"auto"}}>
                <button  className="btn btn-dark  col-8 col-sm-4 col-xs-5 m-1" >UPDATE </button>
                </div>
            </form>
        </div>
    
        </section>
        )
    }
}