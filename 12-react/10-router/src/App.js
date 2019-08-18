import React, { Component } from 'react';

import './App.css'

import {
 // HashRouter
 BrowserRouter
  as Router,
 Route, 
 Link 
} from "react-router-dom";

import ToduList from './pages/todulist'

class Home extends Component{
    render(){
        return <h2>this is home page</h2>
    }
}

class User extends Component{
    render(){
        return <h2>this is user page,user id is {this.props.match.params.id}</h2>
    }
}

class App extends Component{
    render(){
        //const { handleChange,task,handleInit,handleAdd,handleDel,list } = this.props
        return (
	    	<Router>
	            <div className="App">
	                <nav>
	                	<ul>
	                		<li><Link to="/">Home</Link></li>
	                		<li><Link to="/todulist">ToduList</Link></li>
	                		<li><Link to="/about">About</Link></li>
	                		<li><Link to="/user/123">User</Link></li>
	                	</ul>
	                </nav>
	                <Route path="/" exact component={Home} />
	                <Route path="/todulist" component={ToduList} />
	                <Route path="/about" render={()=><h2>this is about page</h2>} />
	                <Route path="/user/:id" component={User} />
	            </div>
	        </Router>
        )
    }
}

export default App