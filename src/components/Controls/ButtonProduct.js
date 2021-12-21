import * as actions from '../../redux/actions/index'
import React, {Component} from 'react'
import { connect } from 'react-redux'

class AddButton extends Component {
    onAddToCart = () => {
        const dataPr = {...this.props.n, attributes: this.props.prAttributes}
        this.props.addToCart(dataPr)
    }
    render(){
        return(
            <button className='add-button' onClick={this.onAddToCart}>{this.props.buttonName}</button>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (data) => dispatch(actions.addProduct(data))
    }
}
export default connect(null, mapDispatchToProps)(AddButton)