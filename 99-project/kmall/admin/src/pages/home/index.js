import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Card,Row, Col } from 'antd';
import Layout from 'common/layout'

import "./index.css"
import { actionCreator } from './store'

class Home extends Component {
    constructor(props){
      super(props)
    }
    render() {
        return (
          <div className="Home">
            <Layout>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
              </Breadcrumb>
              <div className='content' >
              <Row>
                <Col span={8}>
                  <Card title="用户数" bordered={false} style={{ width: 300 }}>
                    <p>10</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="商品数" bordered={false} style={{ width: 300 }}>
                    <p>10</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="订单数" bordered={false} style={{ width: 300 }}>
                    <p>10</p>
                  </Card>
                </Col>
              </Row>
                
                
                
              </div>
            </Layout>
          </div>
        )
    }
}


//映射属性到组件
const mapStateToProps = (state) => ({
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)