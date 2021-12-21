import React, { Component } from 'react'
import ProductAttribute from '../../ProductAttribute/ProductAttribute';
import { connect } from 'react-redux'
import { graphql } from '@apollo/client/react/hoc';
import { getProduct } from '../../../queries/queries';
import { DropdownStyles } from './styles'
class Backdrop extends Component {
    dropClassName = () => {
        if (this.props.productIdd)
            return 'dropdown-product'
        return ''
    }
    dropdownAttribute = () => {
        console.log(this.props.productIdd)
        const currency = this.props.currency;
        const data = this.props.data;
        if (data.loading) {
            return <div className={this.dropClassName()}>Loading...</div>
        } else {
            console.log(data)
            return (
                <div className={this.dropClassName()} >
                    <h2>{data.product.brand}</h2>
                    <div>{data.product.name}</div>
                    <ProductAttribute
                        currencySymbol={data.product.prices[currency].currency.symbol}
                        productPrice={data.product.prices[currency].amount}
                        buttonName="Add"
                        n={this.props.data.product}
                        attributes={this.props.data.product.attributes}
                        inStock={data.product.inStock} 
                        />
                    <button onClick={()=>this.props.displayToggle()}>close</button>
                </div>
            )
        }
    }
    render() {
        return (
            <DropdownStyles>
                {this.dropdownAttribute()}
            </DropdownStyles>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currency: state.cart.currency,
    }
}
export default connect(mapStateToProps)(graphql(getProduct, {
    options: (props) => {
        return {
            fetchPolicy: 'network-only',
            nextFetchPolicy: "no-cache",
            variables: {
                productId: props.productIdd
            }
        }
    }
})(Backdrop));