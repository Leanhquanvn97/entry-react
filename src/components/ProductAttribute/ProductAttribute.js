import React, { Component } from 'react';
import { PAtt } from './styles';
import AddButton from '../Controls/AddButton'
class ProductAttribute extends Component {
    state = {
        clicked: true,
        prAttributes: []
    }
    componentDidMount() {
        if (this.props.attributes.length > 0) {
            let array = []
            if (typeof (this.props.attributes[0].name) !== 'undefined') {
                array = this.props.attributes.map(el => {
                    return {
                        id: el.id,
                        value: el.items[0].value
                    }
                })
            } else {
                array = this.props.attributes.map(el => {
                    return {
                        id: el.id,
                        value: el.value
                    }
                })
            }
            this.setState({ prAttributes: array })
        }
    }
    onSelectHandler = (attName, atts) => {
        this.setState({
            prAttributes: this.state.prAttributes.map(el => {
                if (el.id === attName)
                    return {
                        ...el,
                        id: attName,
                        value: atts
                    }
                return el
            }
            )
        })
    }
    selected = (attName, atts) => {
        return this.state.prAttributes.map(el => {
            if (el.id === attName && el.value === atts) {
                return 'selected'
            }
            return ''
        })
    }

    displayAttributes = () => {
        if (this.props.attributes.length > 0)
            if (typeof (this.props.attributes[0].name) !== 'undefined') {
                return this.props.attributes.map(el => {
                    return (
                        <React.Fragment key={this.props.n.id + el.name}>
                            <h4>{el.name + ':'}</h4>
                            <ul>
                                {el.items.map(els => {
                                    let color = ''
                                    if (el.type === 'swatch') {
                                        color = els.value
                                    }
                                    return <li
                                        className={this.selected(el.id, els.value).filter(n => n) + ' els-attributes'}
                                        key={this.props.n.id + els.id}
                                        onClick={() => this.onSelectHandler(el.name, els.value)}
                                        style={{ background: color }}>{color ? '' : els.value}</li>
                                })}
                            </ul>
                        </React.Fragment>
                    )

                })
            } else {
                return (
                    <ul className='cart-attributes'>
                        {this.props.attributes.map(el => {
                            let color = ''
                            if (el.id === 'Color') {
                                color = el.value
                                return (
                                    <li key={el.id}
                                        style={{ background: color, width:'65px', height: '43px' }}>
                                    </li>)
                            } else {
                                return (
                                    <li key={el.id}>
                                        
                                        {el.id}:<span> {el.value}.</span>
                                    </li>
                                )
                            }


                        })}
                    </ul>

                )
            }
    }
    render() {
        return (
            <PAtt>
                {this.displayAttributes()}
                <div className='price'>
                    <h4>Price:</h4>
                    <div >
                        {this.props.currencySymbol + ' ' + this.props.productPrice}
                    </div>
                </div>
                {(this.props.inStock) ? <AddButton
                    n={this.props.n}
                    prAttributes={this.state.prAttributes}
                    buttonName={this.props.buttonName}
                /> : <h3>Out Of Stock</h3>}
            </PAtt>
        )
    }
}

export default (ProductAttribute);