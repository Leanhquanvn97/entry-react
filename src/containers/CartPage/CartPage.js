import React, { Component } from 'react'
import CartProduct from '../../components/CartProduct/CartProduct';
import {PageCart} from './styles'
import {connect} from 'react-redux'
class ProductPage extends Component {
    onHoverProduct = () => {
        if (this.props.cartToggle) {
            return "toggled"
        } else {
            return null
        }
    }
    render() {
        return (
            <PageCart className={this.onHoverProduct()}>
                <h1>CART</h1>
                <CartProduct></CartProduct>
            </PageCart>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartToggle: state.cart.hover
    }

}
export default connect(mapStateToProps)(ProductPage);