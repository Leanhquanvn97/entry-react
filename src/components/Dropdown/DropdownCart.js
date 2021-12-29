import React, { Component } from 'react';
import { DCart } from './styles.js'
import CartProduct from '../CartProduct/CartProduct.js';
import { Link } from 'react-router-dom';

class DropdownCart extends Component {
    render() {
        return (
            <DCart>
                <h4>My Bag, <span style={{ fontWeight: 'normal' }}>{this.props.totalItems} items</span></h4>


                <CartProduct></CartProduct>
                <div className='dcart-button'>
                    <Link to='/cart' className='to-cart-button'>
                        VIEW BAG
                    </Link>

                    <button>CHECK OUT</button>
                </div>

            </DCart>
        );
    }
}

export default (DropdownCart);