import React, {Component} from 'react'
import axios from 'axios';


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            "name":"",
            "data":[]
        }
    }
    componentDidMount=async()=>{
        
        let blog = await axios.post('http://localhost:3000/api/v1/blog',{
            "actionType":"find",
            
        })
        console.log(blog.data)
        let data = blog.data.data.map((item,index)=>{
            return <textarea key={index}>{item.name}</textarea>
        })
        await Promise.all(data)
        this.setState({data:data})
        console.log(blog)
    }
    render(){
        return(
            <React.Fragment>
               <div>
                   <h1>Blogs</h1>
                   
                       {this.state.data}
                   
               </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;