import React, { Component } from 'react';

import './App.css'

import {
 // HashRouter
 BrowserRouter
  as Router,
 Route, 
 Link,
 Switch 
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

class Admin extends Component{
    render(){
        return (
        	<Switch>
				<Route path="/admin/profile" render={()=><h2>this is admin profile page</h2>} />      	
				<Route exact path="/admin/" render={()=><h2>this is admin home page</h2>} />      	
				<Route path="/admin/:id" render={(route)=>(<h2>this is admin info page</h2>)} />      	
        	</Switch>
        )
    }
}

class App extends Component{
    render(){
		const ProtectRoute = ({Component:Component,...rest})=>{
			return <Route 
				{...rest}
				render={()=>{
					return <Component />
				}}
			/>
		}

        //const { handleChange,task,handleInit,handleAdd,handleDel,list } = this.props
        return (
	    	<Router>
	            <div className="App">
	                <nav>
	                	<ul>
	                		<li><Link to="/">Home</Link></li>
	                		<li><Link to="/todulist">ToduList</Link></li>
	                		<li><Link to="/about">About</Link></li>
	                		<li><Link to="/user/123/">User</Link></li>
	                		<li><Link to="/admin/">Admin</Link></li>
	                		<li><Link to="/admin/profile/">Admin</Link></li>
	                		<li><Link to="/admin/123/">Admin</Link></li>
	                	</ul>
	                </nav>
	                <Route path="/" exact component={Home} />
	                <Route path="/todulist" component={ToduList} />
	                <Route path="/about" render={()=><h2>this is about page</h2>} />
	                <Route path="/user/:id" component={User} />
	                <ProtectRoute path="/admin/" component={Admin} />
	            </div>
	        </Router>
        )
    }
}

export default App