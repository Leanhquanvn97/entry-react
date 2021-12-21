import * as actions from '../../redux/actions/index'
import React, {Component} from 'react'
import { connect } from 'react-redux'

class RemoveButton extends Component {
    onRemoveFromCart = () => {
        console.log(this.props.n)
        this.props.removeFromCart(this.props.n)
    }
    render(){
        return(
            <button className='remove-button' onClick={this.onRemoveFromCart}>{this.props.buttonName}</button>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (data) => dispatch(actions.removeProduct(data))
    }
}
export default connect(null, mapDispatchToProps)(RemoveButton)