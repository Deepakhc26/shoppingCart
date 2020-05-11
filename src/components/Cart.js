import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/cartActions";
import {Row, Col, Button } from 'antd';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          "Cart is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the cart. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.p_id}>
                  <b>{item.p_name.toUpperCase()}</b>
                  <button style={{ float: "right" }} className="btn btn-danger btn-xs"  onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)}>X</button>
                  <br />
                  {item.count} X {util.formatCurrency(item.p_price)}
                </li>
              ))}
            </ul>
            <hr />
            <Row>
              <Col span={12}><h1>Sum Total :</h1></Col>
              <Col span={6} offset={6}>
              <h1>{" "}{util.formatCurrency(cartItems.reduce((a, c) => a + c.p_price * c.count, 0))}</h1>
              </Col>
            </Row>
            <hr /> 
            <Row><br/>
            <Col span={15} offset={15}>
              <Button type="primary" size={'large'} onClick={() => alert("CHECKOUT")}>CHECKOUT</Button>
              </Col>
            </Row>              
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
