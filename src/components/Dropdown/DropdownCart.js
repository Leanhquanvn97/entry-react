import React, { Component } from 'react';
import { DCart } from './styles.js'
import CartProduct from '../CartProduct/CartProduct.js';
import { Link } from 'react-router-dom';

class DropdownCart extends Component {
    render() {
        return (
            <DCart>
                <h4>My Bag</h4>
                <CartProduct className="dProduct"></CartProduct>
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