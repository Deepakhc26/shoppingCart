import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import { Row, Col, InputNumber, Button, Divider, Popover} from 'antd';

class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }
  
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="card" key={product.p_id}>
        <Row>
          <Col span={15}>
            <Row>
              <Col span={6}>
                <img src={product.p_image} alt={product.p_name} />
              </Col>
              <Col>
                <p>{product.p_name.toUpperCase()}</p>
                <p>Style #: {product.p_style.toUpperCase()}</p>
                <p>Color: {product.p_selected_color.name}</p>
                <Popover dataSource={this.props.products} 
                title={product.p_name.toUpperCase()} trigger="click">
                <Button type="dashed">EDIT</Button>
                </Popover> | <Button type="dashed" onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>ADD TO CART</Button> | <Button type="dashed">SAVE FOR LATER</Button>
                
              </Col>         
            </Row>          
          </Col>
          <Col span={3}>
            <p>{product.p_selected_size.code.toUpperCase()}</p>
          </Col>
          <Col span={3}>
          <InputNumber value={product.p_quantity} />
          </Col>
          <Col span={3}>
          <p> {product.c_currency}{parseFloat(product.p_price)}</p>
          </Col>
        </Row><Divider />
      </div>
    ));

    

    return (
      <div>
        <Row>
        <Divider />
          <Col span={15}>{`${this.props.products.length} ITEMS`}</Col>
          <Col span={3}>SIZE</Col>
          <Col span={3}>QTY</Col>
          <Col span={3}>PRICE</Col>
        </Row>
        <Divider />{productItems}
      </div>
     
    );
  }   
}

const mapStateToProps = (state) => ({  
  products: state.products.prodItems,
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
