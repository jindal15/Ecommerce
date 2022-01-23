import React from "react";
import { connect } from "react-redux";
import { resetCart } from "../../reducers/cart";
import { Button, Col, Container, Row } from "reactstrap";
import { history } from "../../store";

const Checkout = (props) => {

    return (
        <Container>
            <Row>
                <Col sm="12">
                    <h3 className="d-flex justify-content-center py-4">
                        CHECKOUT
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col sm="12" className="d-flex justify-content-center">
                    <Button type="button" color="primary" onClick={() => {
                        props.resetCart();
                        history.push("/")
                    }}>Confirm Order</Button>
                </Col>
            </Row>
        </Container>
    );
};


export default connect(null, { resetCart })(Checkout);
