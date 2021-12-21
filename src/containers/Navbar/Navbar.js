import React, { Component } from 'react';
import { NavStyle } from './styles'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index'

import DropdownCart from '../../components/Dropdown/DropdownCart';
import CartIcon from '../../components/Icons/CartIcon';
import Currency from '../../components/Dropdown/Currency';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    state = {
        selected: false,
        
    }
    
    onHoverHandler = () => {
        this.props.toggleCart()
    }
    onLeaveHandler = () => {
        this.props.toggleCart()
    }
    dropdownCart = () => {
        if (this.props.cartToggle) {
            return "toggled"
        } else {
            return "not-toggled"
        }
    }
    onCurHover = () => {
        this.setState({ selected: true })
    }
    onCurLeave = () => {
        this.setState({ selected: false })
    }
    dropdownCur = () =>{
        if (this.state.selected) {
            return "dcur-toggled"
        } else {
            return "dcur-not-toggled"
        }
    }

    render() {
        return (
            <NavStyle>
                <li><a onClick={()=> false} href="/">WOMEN</a></li>
                <li><a href="/">MEN</a></li>
                <li><a href="/">KIDS</a></li>
                <li onMouseEnter={this.onCurHover} onMouseLeave={this.onCurLeave}>
                    <div className="dCur">{this.props.currencySymbol}</div>
                    <div className={this.dropdownCur()}>
                        <Currency></Currency>
                    </div>

                </li>
                <li onMouseEnter={this.onHoverHandler} onMouseLeave={this.onLeaveHandler}>
                    <Link className="dCart" to='/cart'  >
                        <CartIcon></CartIcon>
                    </Link>
                    <div className={this.dropdownCart()} >
                        <DropdownCart ></DropdownCart>
                    </div>
                </li>
            </NavStyle>
        )

    }
}
const mapStateToProps = state => {
    return {
        cartToggle: state.cart.hover,
        currency: state.cart.currency,
        currencySymbol: state.cart.currencySymbol
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleCart: () => dispatch(actions.cartToggle())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((Navbar));