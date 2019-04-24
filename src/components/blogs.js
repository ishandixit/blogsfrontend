import React, {Component} from 'react'
import axios from 'axios';


class Blogs extends Component{
    constructor(props){
        super(props);
        this.state={
            "name":""
        }
    }
    handleClick=async()=>{
        let id = localStorage.getItem("userId")
        console.log(this.state,".....",id)
        let blog = await axios.post('http://localhost:3000/api/v1/blog',{
            "actionType":"post",
            "userId":id,
            "name":this.state.name
        })
        console.log(blog)
        window.location='http://localhost/Dashboard'
    }
    render(){
        return(
            <React.Fragment>
                <textarea placeholder="Enter Blog Data" onChange={e=>{this.setState({name:e.target.value})}}>
                </textarea>
                <button onClick={this.handleClick}>Create</button>
            </React.Fragment>
        )
    }
}

export default Blogs;