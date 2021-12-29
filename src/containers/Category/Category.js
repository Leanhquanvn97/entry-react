import React, { Component } from 'react';
// import { graphql } from '@apollo/client/react/hoc';
// import { getProductsQuery } from '../../queries/queries';
import { CategoryStyle } from './styles';
import { connect } from 'react-redux'
import Products from '../../components/Products/Products'
class Category extends Component {
    
    onHoverProduct = () => {
        if (this.props.cartToggle) {
            return "toggled"
        } else {
            return null
        }
    }
    
    display = () => {
        return <Products dProducts={this.props.match.params.id?this.props.match.params.id:'all'}></Products>
    }
    
    
    render() {
        console.log(this.props)
        return (
            <CategoryStyle className={this.onHoverProduct()}>
                <h1 style={{textTransform:'uppercase'}}>{this.props.match.params.id?this.props.match.params.id:'all'}</h1>
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