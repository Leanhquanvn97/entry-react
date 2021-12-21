import React, { Component } from 'react'
import { connect } from 'react-redux';
import RemoveButton from '../Controls/RemoveButton';
import ProductAttribute from '../ProductAttribute/ProductAttribute';
import { PCart } from './styles'
import CSlide from '../Slide/CSlide';
class CartProduct extends Component {
    displayCart = () => {
        const currency = this.props.currency;
        const product = this.props.data.cart;
        if (!product.length) {
            return <div>Empty</div>
        }
        return product.map((el, index) => {
            return (
                <li key={el.id + index}>
                    <CSlide slideImgs={el.gallery} ></CSlide>
                    <h3 className='brand'> {el.brand}</h3>
                    <div className='product-name'>{el.name}</div>
                    <h5 className='quantity'>{el.quantity}</h5>
                    <ProductAttribute
                        currencySymbol={this.props.currencySymbol}
                        productPrice={el.prices[currency].amount}
                        buttonName="+" n={el}
                        attributes={el.attributes} 
                        inStock={true}/>
                    <RemoveButton n={el} buttonName="-"></RemoveButton>
                </li>

            )

        })
    }
    render() {
        return (
            <PCart>
                {this.displayCart()}
                <div><span>TOTAL</span> {this.props.data.currencySymbol + " " + (this.props.data.totalPrice).toFixed(2)}</div>
            </PCart>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state.cart,
        currency: state.cart.currency,
        currencySymbol: state.cart.currencySymbol
    }
}

export default connect(mapStateToProps)(CartProduct);