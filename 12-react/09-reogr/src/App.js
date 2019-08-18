import React, { Component } from 'react';
import './App.css'

import ToduList from './pages/todulist/'

class App extends Component{
    render(){
        const { handleChange,task,handleInit,handleAdd,handleDel,list } = this.props
        return (
            <div className="App">
                <ToduList />
            </div>
        )
    }
}

export default App