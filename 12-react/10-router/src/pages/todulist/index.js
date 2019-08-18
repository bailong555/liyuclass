import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Row, Col, List } from 'antd';
import {actionCreator} from './store';
import "./index.css";

class ToduList extends Component{
    componentDidMount(){
        this.props.handleInit()
    }
    render(){
        const { handleChange,task,handleInit,handleAdd,handleDel,list } = this.props
        return (
            <div className="ToduList">
                <Row>
                <Col span={18}>
                    <Input 
                        onChange={handleChange}
                        value={task}
                    />
                </Col>
                <Col span={6}>
                    <Button 
                        type="primary"
                        onClick={handleAdd}
                    >
                        Primary
                    </Button>
                </Col>
            </Row>
            <Col span={20}>
            <List
              style={{marginTop:15}}
              bordered
              dataSource={list}
              renderItem={(item,index) => (
                <List.Item
                    onClick={()=>{handleDel(index)}}
                >
                   {item}
                </List.Item>
              )}
            />
            </Col>
        </div>
    )
  } 
}

//映射属性到组件
const mapStateToProps = (state)=>({
    task:state.get('todulist').get('task'),
    list:state.get('todulist').get('list')      
})
//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
    handleChange:(ev)=>{
        const task = ev.target.value
        dispatch(actionCreator.getChangeItemAction(task))
    },
    handleAdd:() =>{
        dispatch(actionCreator.getAddItemAction())
    },
    handleDel:(index) =>{
        dispatch(actionCreator.getDelItemAction(index))
    },
    handleInit:()=>{
        dispatch(actionCreator.getRequestInitDataAction())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ToduList)