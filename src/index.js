import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./store";

import 'antd/dist/antd.css';
import { Row, Col, Typography, Layout, Card } from 'antd';
import Cart from './components/Cart';

const { Content } = Layout;
const { Title } = Typography;

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div>
          <Content style={{ padding: '20px 50px' }}>
            <Title level={2}>YOUR SHOPPING CART</Title>
            <p>if the cart is compelety empty then we shell again add back the products for you.</p>            
            <Row>            
              <Col flex="1 1 200px"><Products /></Col>
              <Col flex="0 1 300px">
              <div className="site-card-border-less-wrapper">
                <Card title="Your Cart" bordered={true} style={{ width: 400 }}>
                <Cart />
                </Card>
              </div>
              </Col>
            </Row>
          </Content>          
        </div>
      </Provider>      
    )
  }
}

ReactDOM.render(
  <div>
    {/* <Layout> */}
      <Content>
        <App />        
      </Content>
    {/* </Layout> */}
  </div>
,document.getElementById('root'));

serviceWorker.unregister();
