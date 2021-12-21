import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from '@apollo/client/react/hoc';
import { getProduct } from '../../queries/queries'
import ProductAttribute from '../../components/ProductAttribute/ProductAttribute';
import { PPage } from './styles';
import PSlide from '../../components/Slide/PSlide';
import * as actions from '../../redux/actions/index'

const sanitize = (input) => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    for (const elm of doc.querySelectorAll('*')) {
        for (const attrib of elm.attributes) {
            if (attrib.name.startsWith('on')) {
                elm.removeAttribute(attrib.name);
            }
        }
    }
    return doc.body.innerHTML;
};

class ProductPage extends Component {
    onHoverProduct = () => {
        if (this.props.cartToggle) {
            return "toggled"
        } else {
            return null
        }
    }

    displayProduct = () => {
        const currency = this.props.currency;
        const data = this.props.data;
        console.log(this.props)
        if (data.loading) {
            return <div>Loading...</div>
        } else {

            return <>
                <section className='d-imgs'>
                    <PSlide slideImage={data.product.gallery}></PSlide>
                </section>
                <section className="d-attributes">
                    <h2>{data.product.brand}</h2>
                    <div>{data.product.name}</div>
                    <ProductAttribute
                        productPrice={data.product.prices[currency].amount}
                        currencySymbol={data.product.prices[currency].currency.symbol}
                        buttonName="Add to cart"
                        n={this.props.data.product}
                        attributes={this.props.data.product.attributes}
                        inStock={data.product.inStock} />
                    <p dangerouslySetInnerHTML={{ __html: sanitize(data.product.description) }}></p>
                </section>
            </>
        }
    }
    render() {
        return (
            <PPage className={this.onHoverProduct()}>
                {this.displayProduct()}
            </PPage>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.cart.currency,
        cartToggle: state.cart.hover
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeRates: (data) => dispatch(actions.changeRates(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(graphql(getProduct, {
    options: (props) => {
        return {
            onCompleted:(data) => {
                let price = data.product.prices[0].amount;
                let rates = data.product.prices.map((el, index) => {
                    return el.amount / price;
                })
                props.changeRates(rates)
            },
            fetchPolicy: 'network-only',
            variables: {
                productId: props.match.params.id
            }
        }
    }
})(ProductPage));