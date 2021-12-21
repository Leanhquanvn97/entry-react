import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getDataByCategories } from '../../queries/queries';
import { connect } from 'react-redux'
import Product from './Product/Product';
import { ProductsStyle } from './styles.js';
import * as actions from '../../redux/actions/index'
class Products extends Component {
  display = () => {
    let render = <div>loading...</div>
    if (!this.props.data.loading) {
      const data = this.props.data;
      render = data.category.products.map((p) => {
        return (
          <Product key={p.id}
            n={p}
            currency={this.props.currency}
            toggleProduct={this.toggleProduct}
          > </Product>

        )
      })
    }
    return render
  }
  render() {
    return (
      <ProductsStyle >
        {this.display()}
      </ProductsStyle>
    )

  }
}
const mapStateToProps = state => {
  return {
    currency: state.cart.currency,
    currencySymbol: state.cart.currencySymbol
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      changeRates: (data) => dispatch(actions.changeRates(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(graphql(getDataByCategories, {
  options: (props) => {
    return {
      onCompleted: (data) => {
        let price = data.category.products[0].prices[0].amount;
        let rates = data.category.products[0].prices.map((el, index) => {
          return el.amount / price;
        })
        if(!data.loading)
          props.changeRates(rates)
      },
      fetchPolicy: 'network-only',
      variables: {
        input: {
          title: props.dProducts
        }
      }
    }
  }
})(Products));