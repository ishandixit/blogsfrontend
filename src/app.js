import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import NavBar from "../src/components/navBar";
import BlogsPage from '../src/components/blogs';
import Signup from  '../src/components/signup';
import Dashboard from '../src/components/dashboard';

class App extends Component {

    render () {
      return (
        <Router>
          <div>   
            <NavBar/>      
            <Route exact path="/" component={Signup} /> 
            <Route path="/blogs" component={BlogsPage} />
            <Route path="/Dashboard" component={Dashboard} />        
          </div>
         </Router>
      );
    }
  }

export default App;
