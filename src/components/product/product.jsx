import React, { useState, Fragment } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { updateCart } from "../../reducers/cart";
import "./product.scss";

const Product = (props) => {
  const [isAdded, setAdded] = useState([])
  
  const onAddToCart = (item) => {
    setAdded([...isAdded, item.id]);
    props.updateCart(item);
  };


  return (
    <Fragment>
      <Row className="px-3">
        {props.productDetails &&
          props.productDetails.map((item, index) => {
            const actualPrice = Number(item.price) * 2;
            return (
              <Col sm="12" lg="3" key={index}>
                <div
                  id={index}
                >
                  <img
                    className="card-img-top"
                    src={item.image_src}
                    alt="Card cap"
                    height="350px"
                  />
                  <div className="card-body">
                    <div className="card-text">

                      <span className="d-block">
                        <b>{item.vendor}</b>
                      </span>
                      
                      <div className="d-block">
                        <span className="fs-14">
                          <b>{`$${item.price}`}</b>
                        </span>
                        <span className="fs-12 fc-light">
                          {" "}
                          <strike>{`$${actualPrice}`}</strike>
                        </span>
                        <span className="fs-12 discount"> (50% OFF)</span>
                      </div>
                      <button
                        className="cart-button py-1 fs-14 fw-500 mt-1 mb-2"
                        type="button"
                        onClick={() => isAdded.some(e => e === item.id) ? props.history.push('/cart') : onAddToCart(item)}
                      >
                        {isAdded.some(e => e === item.id) ? 'Go To Cart' : 'ADD TO CART'}
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { cart } = state.cart;
  return {
    cart: cart
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateCart }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
