import React, {Component} from 'react'



class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
                <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <span class="navbar-brand" href="#">Blogs</span>
                    </div>
                    <ul class="nav navbar-nav">
                    <li class="active"><a href="/Dashboard">Dashboard</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/">Logout</a></li>
                    </ul>
                </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;