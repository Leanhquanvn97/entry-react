import React, { Component } from 'react';

import * as actions from './redux/actions/fetchData';
import { connect } from 'react-redux'
import {Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';
import Category from './containers/Category/Category';
import ProductPage from './containers/ProductPage/ProductPage';
import CartPage from './containers/CartPage/CartPage';

class App extends Component {
  displayOverlay = () => {

  }
  render() {
    let render = <div>loading...</div>
    render = <>
      <Navbar></Navbar>
      <Switch >
        <Route path="/cart" component={CartPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/:id" component={Category} />
        <Redirect to="/all"></Redirect>
      </Switch >
    </>
    return (
      <div id="main">
        {render}
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    productToggle: state.fetchData.productToggle
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleProduct: () => dispatch(actions.toggleProduct())
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)((withRouter(App))));
