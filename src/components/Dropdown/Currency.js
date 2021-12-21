import React, { Component } from 'react';
import { DCur } from './styles.js'
import { connect } from 'react-redux';
import { graphql } from '@apollo/client/react/hoc';

import { getCurrencies } from '../../queries/queries';
import * as actions from '../../redux/actions/index'

class Currency extends Component {
    componentDidMount(){
        if (!this.props.data.loading) 
            this.props.changeCurrency(0, this.props.data.currencies[0].symbol)
    }
    display = () => {
        let render = <div>loading...</div>
        if (!this.props.data.loading) {
            const data = this.props.data
            render = data.currencies.map((p, index) => {
                return (
                    <li key={p.label} onClick={() => this.onChangeCurrency(index, p.symbol)}>{p.symbol + ' ' + p.label}</li>
                )
            })
        }
        return render;
    }
    onChangeCurrency = (data, symbol) => {
        this.props.changeCurrency(data, symbol)
    }
    render() {
        return (
            <DCur>
                <ul className="dropdown-menu">
                    {this.display()}
                </ul>
            </DCur>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCurrency: (data, symbol) => dispatch(actions.changeCurrency(data, symbol))
    }
}
export default connect(null, mapDispatchToProps)(graphql(getCurrencies)(Currency));