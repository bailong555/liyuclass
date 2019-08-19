import React, { Component } from 'react'
import './App.css'

import { 
    BrowserRouter as Router, 
    Route, 
    Link,
    Switch 
} from "react-router-dom"

import TodoList from 'pages/todolist'
import Login from 'pages/login'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )          
    }
}



export default App