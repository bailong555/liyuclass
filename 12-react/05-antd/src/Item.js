import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props)
	}
	componentWillUnmount(){
        //清理工作,比如关闭定时间
        console.log('componentWillUnmount()')
    }
	render(){
		const {handleDel,task} = this.props
		return(
			<li onClick={handleDel}>{task}</li>
		)
	}
}

Item.propTypes = {
    handleDel:PropTypes.func,
    task:PropTypes.string.isRequired
}
Item.defaultProps = {
    task:'learn...'
}

export default Item