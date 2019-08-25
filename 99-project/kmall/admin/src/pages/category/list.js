import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb,Button,Table,Input,InputNumber } from 'antd';
import Layout from 'common/layout'

import {
  Link
} from 'react-router-dom'

import moment from 'moment'

import "./index.css"
import { actionCreator } from './store'


class CategoryList extends Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
      this.props.handlePage(1)
    }
    render() {
      const { 
        list,
        current,
        total,
        pageSize,
        handlePage,
        isFetching,
        handleUpdataName,
        handleUpdataMobileName,
        handleUpdataOrder

        } = this.props
      
      const columns = [
        {
          title: '分类名称',
          dataIndex: 'name',
          width:"40%",
          key: 'name',
          render:(name,record)=><Input 
            style={{width:'60%'}}
            defaultValue={name}
            onBlur={
              (ev)=>{
                if(ev.target.value != name){
                  handleUpdataName(record._id,ev.target.value)
                }
              }
            }
          />
        },
        {
          title: '手机分类名称',
          dataIndex: 'mobiliName',
          key: 'mobiliName',
          width:"40%",
          render:(mobileName,record)=><Input 
            style={{width:'60%'}}
            defaultValue={mobileName}
            onBlur={
              (ev)=>{
                if(ev.target.value != mobileName){
                  handleUpdataMobileName(record._id,ev.target.value)
                }
              }
            }
          />
        },
        {
          title: '是否显示',
          dataIndex: 'isShow',
          key: 'isShow',
        },
        {
          title: '排序',
          dataIndex: 'order',
          key: 'order',
          render:(order,record)=><InputNumber 
            defaultValue={order}
            onBlur={
              (ev)=>{
                if(ev.target.value != order){
                  handleUpdataOrder(record._id,ev.target.value)
                }
              }
            }
          />
        },
      ];
      const dataSource = list.toJS()
        return (
          <div className="CategoryList">
            <Layout>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                <Breadcrumb.Item>分类列表</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{marginBottom:16}} className='clearfix' >
                <Link to='/category/add' style={{float:'right'}}>
                  <Button type='primary' >
                    添加分类
                  </Button>
                </Link>
              </div>
              <div className='content' >
                <Table 
                  dataSource={dataSource} 
                  columns={columns} 
                  pagination={{
                    current:current,
                    total:total,
                    pageSize:pageSize
                  }}
                  onChange={
                    (page)=>{
                        handlePage(page.current)
                    }
                  }
                  // loading={
                  //   {
                  //       spinning:isFetching,
                  //       tip:'数据正在加载...'
                  //   }
                  // }
                />;
              </div>
            </Layout>
          </div>
        )
    }
}


//映射属性到组件
const mapStateToProps = (state) => ({
  list:state.get('category').get('list'),
  current:state.get('category').get('current'),
  total:state.get('category').get('total'),
  pageSize:state.get('category').get('pageSize'),
  isFetching:state.get('category').get('isFetching')
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
  handlePage:(page)=>{
    dispatch(actionCreator.getPageAction(page))
  },
  handleUpdataName:(id,newName)=>{
    dispatch(actionCreator.getUpdataNameAction(id,newName))
  },
  handleUpdataMobileName:(id,newMobileName)=>{
    dispatch(actionCreator.getUpdataMobileNameAction(id,newMobileName))
  },
  handleUpdataOrder:(id,newOrder)=>{
    dispatch(actionCreator.getUpdataOrderAction(id,newOrder))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)