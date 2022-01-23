import React from "react";
import { connect } from "react-redux";
import QuantityButton from "../QuantityButton/index";
import "./cart.scss";
import { history } from "../../store";
import { Row, Col } from "reactstrap";

const CartComponent = (props) => {

  let addedItems = props.items.length ? (
    props.items.map((item) => {
      return (
        <li key={item.id} className="mb-3">
          <Row>
            <Col md="5" sm="12">
              <img
                src={item.image_src}
                alt={item.image_src}
                className=""
                width="100%"
                height="100%"
              />
            </Col>
            <Col className="py-5" md="3" sm="12">
              <div className="title">{item.vendor}</div>
              <div className="title">{item.name}</div>

              <button
                className="remove-btn my-2"
                onClick={() => props.onRemoveProduct(item)}
              >
                Remove
              </button>
            </Col>
            <Col className="py-5" md="2" sm="12">
              <p>
                <b>
                  <span className="d-block pb-2">Price </span>
                  <span className="pt-2">$ {item.price * item.quantity}</span>
                </b>
              </p>
            </Col>
            <Col className="py-5" md="2" sm="12">
              <>
                <b className="p-2">
                  Quantity <QuantityButton itemId={item.id} />
                </b>
              </>
            </Col>
          </Row>
        </li>
      );
    })
  ) : (
    <div className="d-flex justify-content-center fs-20">
      There is no item in your cart
    </div>
  );
  return (
    <Row>
      <Col sm="12" md="8" >
        <div className="card">
          <div className="card-body">
            <ul className="collection pl-0 ">{addedItems}</ul>
          </div>
        </div>
      </Col>
      <Col sm="12" md="4" >
        <div className="card">
          <div className="cart card-body">
            <p className="fs-25"> Total Amount </p>
            <ul className="list-group list-group-flush">
              <li className="d-flex justify-content-between py-2 fs-20">
                Total price
                <span>$ {props.total}</span>
              </li>
              <li className="d-flex justify-content-between py-2 fs-20">
                <span> Shipping </span>
                <span>N/A</span>
              </li>
              <div className="line">
                <hr />
              </div>
              <li className="d-flex justify-content-between fs-20">
                <div className="mb-3">
                  <strong>Net Total (including VAT)</strong>
                </div>
                <span>
                  <strong>$ {props.total}</strong>
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary btn-block waves-effect waves-light"
              disabled={props.total === 0}
              onClick={() => history.push("/checkout")}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  const { cart, total } = state.cart;
  return {
    items: cart,
    total: total
  };
};

export default connect(mapStateToProps, null)(CartComponent);
