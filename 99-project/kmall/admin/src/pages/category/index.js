import React, { Component } from 'react'
import {
	Route,
	Switch
} from 'react-router-dom'
import CatrgoryAdd from './add.js'
import CatrgoryList from './list.js'

import "./index.css"

class Category extends Component {
    constructor(props){
      super(props)
    }

    render() {
      return (
      	<Switch>
      		<Route path='/category/add'  component={CatrgoryAdd} />
      		<Route path='/category/' component={CatrgoryList}  />
      	</Switch>
      )
  }
}
export default Category