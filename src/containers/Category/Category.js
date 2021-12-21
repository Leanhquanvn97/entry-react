import React, { Component } from 'react';
// import { graphql } from '@apollo/client/react/hoc';
// import { getProductsQuery } from '../../queries/queries';
import { CategoryStyle } from './styles';
import { connect } from 'react-redux'
import Products from '../../components/Products/Products'
import Filter from '../../components/Filter/Filter';
class Category extends Component {
    state = {
        dCategory: 'all',
        filterHover: false
    }
    onHoverProduct = () => {
        if (this.props.cartToggle) {
            return "toggled"
        } else {
            return null
        }
    }
    displayCategories = (dCate) => {
        this.setState({ dCategory: dCate }, () => {
        })
    }
    display = () => {
        return <Products dProducts={this.state.dCategory}></Products>
    }
    onHoverFilter = () => {
        this.setState({ filterHover: true })
    }
    onLeaveFilter = () => {
        this.setState({ filterHover: false })
    }
    onHoverF = () => {
        if (this.state.filterHover) {
            return "f-toggled"
        } else {
            return "f-not-toggled"
        }
    }
    render() {
        return (
            <CategoryStyle className={this.onHoverProduct()}>
                <h1 >Category Name</h1>
                <div
                    id='filter-name'
                    className={this.onHoverF()}
                    onMouseEnter={this.onHoverFilter}
                    onMouseLeave={this.onLeaveFilter}>
                    {this.state.dCategory ? this.state.dCategory : 'All'}
                    <Filter disCategories={this.displayCategories}></Filter>
                </div>
                {this.display()}
            </CategoryStyle>
        )
    }
}
const mapStateToProps = state => {
    return {
        cartToggle: state.cart.hover
    }

}
export default connect(mapStateToProps)(Category);