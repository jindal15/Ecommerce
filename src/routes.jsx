import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./store";
import { connect } from "react-redux";
import Header from "./components/Header/index";
import HomePage from "./container/Home/homePage";
import Cart from "./container/Cart/cart";
import CheckoutPage from "./container/Checkout/checkoutPage";


import "./styles.css";
import Login from "./container/Login/login";

const RouteConfig = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
)
const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated
  }
}

const PrivateRoute = connect(mapStateToProps)(RouteConfig)

const RouteMe = () => {
  return (
    <Router history={history}>
      <div className="main-body">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <PrivateRoute path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouteMe;
