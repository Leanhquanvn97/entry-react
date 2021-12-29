import React, { Component } from 'react';
import { NavStyle } from './styles'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index'

import DropdownCart from '../../components/Dropdown/DropdownCart';
import CartIcon from '../../components/Icons/CartIcon';
import Currency from '../../components/Dropdown/Currency';
import { Link, withRouter } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
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
    dropdownCur = () => {
        if (this.state.selected) {
            return "dcur-toggled"
        } else {
            return "dcur-not-toggled"
        }
    }
    displayCategories = () => {

    }
    render() {
        return (
            <NavStyle>
                <Filter pathName={this.props.location.pathname.slice(1)}></Filter>
                <li onMouseEnter={this.onCurHover} onMouseLeave={this.onCurLeave}>
                    <div className="dCur">{this.props.currencySymbol}</div>
                    <div className={this.dropdownCur()}>
                        <Currency></Currency>
                    </div>

                </li>
                <li onMouseEnter={this.onHoverHandler} onMouseLeave={this.onLeaveHandler}>
                    <div style={{ position: 'relative', zIndex: '11', background: 'white' }}>
                        <Link className="dCart" to='/cart'  >
                            <CartIcon></CartIcon>
                            <span className={`total-items `}
                                style={this.props.totalItems === 0 ? { display: 'none' } : { display: 'block' }}>
                                {this.props.totalItems}</span>
                        </Link>
                    </div>


                    <div className={this.dropdownCart()} >
                        <DropdownCart totalItems={this.props.totalItems}></DropdownCart>
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
        currencySymbol: state.cart.currencySymbol,
        totalItems: state.cart.totalItems
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleCart: () => dispatch(actions.cartToggle())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));