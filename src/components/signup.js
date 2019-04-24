import React ,{Component} from 'react';
import axios from 'axios';

class Signup extends Component{

    constructor(props){
        super(props)
        this.state={
            "name":"",
            "password":"",
            "contactNumber":"",
            "email":""
        }
    }
    
    handleSubmit=async()=> {
        console.log(this.state)
        let signupData = await axios.post(`http://localhost:3000/api/v1/signup`,this.state)
        console.log(signupData)
        if(signupData.data.outputCode === 200){
            localStorage.setItem("userId",signupData.data.data._id)
            window.location='http://localhost/blogs'
        }
    }
    render(){
        return(
            <React.Fragment>
                <div >
                <form  action="/action_page.php">
                 <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="name" class="form-control" onChange={(e)=>{this.setState({name:e.target.value})}} id="name"  placeholder="Enter username" />
                    </div>
                     <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Enter Email" id="email" />
                    </div>
                    <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" onChange={e=>{this.setState({password:e.target.value})}} id="pwd" placeholder="Enter Password" name="pwd" />
                    </div>
                    <div class="form-group">
                    <label for="contactNumber">Password:</label>
                    <input type="contactNumber" class="form-control" onChange={(e)=>{this.setState({contactNumber:e.target.value})}} id="contactNumber" placeholder="Enter Contact Number" name="contactNumber" />
                    </div>
    
                    <button type="button" onClick={this.handleSubmit} class="btn btn-default">Submit</button> 
                </form>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Signup;