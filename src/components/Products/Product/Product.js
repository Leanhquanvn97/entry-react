import React, { Component } from 'react';
import { ProductStyle } from './styles';
import { Link } from 'react-router-dom';
import Backdrop from '../../Dropdown/Backdrop/Backdrop';
import CartIcon from '../../Icons/CartIcon';
class Product extends Component {
    state = {
        productIdd: '',
        productToggle: false
    }
    displayOFS = () => {
        if (!this.props.n.inStock)
            return 'out-of-stock'
        return ''
    }
    displayToggle = () => {
        this.setState({ productToggle: false })
    }

    displayAttribute = () => {
        if (this.state.productToggle)
            return (
                <Backdrop productIdd={this.state.productIdd} displayToggle={this.displayToggle}></Backdrop>
            )
        return ''
    }
    onOverlayClickHandler = () => {
        this.setState({
            productIdd: '',
            productToggle: false
        })

    }
    onClickHandler = () => {
        this.setState({
            productIdd: this.props.n.id,
            productToggle: true
        });

    }
    render() {
        let instock = this.props.n.inStock;
        const currency = this.props.currency;
        return (
            <ProductStyle className={this.state.productToggle ? 'add-clicked' : ''}>
                <div >
                    <Link to={`/product/${this.props.n.id}`}>
                        <div className='product-card' id={this.displayOFS()}>
                            {!instock ? <span>OUT OF STOCK</span> : ''}
                            <img src={this.props.n.gallery[0]} alt={this.props.n.name} />
                            <div style={{ fontWeight: 'bold' }}>{this.props.n.brand}</div>
                            <div>{this.props.n.name}</div>
                            <div>{this.props.n.prices[currency].currency.symbol + " " + this.props.n.prices[currency].amount}</div>
                        </div>
                    </Link>
                    {instock ? <button className='disabled' onClick={this.onClickHandler}>
                        <CartIcon></CartIcon>
                    </button> : ''}
                </div>

                {this.displayAttribute()}
            </ProductStyle>
        )
    }
}

export default (Product);