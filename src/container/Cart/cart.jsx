import React from "react";
import { connect } from "react-redux";
import { removeCart } from "../../reducers/cart";
import CartComponent from "../../components/cart/cart";
import { Row } from "reactstrap";

const Cart = (props) => {
    const onRemoveProduct = (item) => {
        props.removeCart(item);
    };

    return (
        <div className="container-fluid">
            <Row>
                <div className="col-12">
                    <h3 className="d-flex justify-content-center py-4">
                        SHOPPING CART
                    </h3>
                </div>
            </Row>
            <CartComponent onRemoveProduct={onRemoveProduct} />
        </div>
    );
};

const mapStateToProps = (state) => {
    const { cart } = state.cart;
    return {
        items: cart,
    };
};

export default connect(mapStateToProps, { removeCart })(Cart);
