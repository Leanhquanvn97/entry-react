import React, { Component } from 'react'
import { PSlideStyles } from './styles'
class CSlide extends Component {
    state = {
        selected: 0
    }
    onClickLeft = () => {
        if (this.state.selected <= 0) {
            return this.setState({ selected: 0 })
        }
        return this.setState(prevState => ({ selected: prevState.selected - 1 }))
    }
    onClickRight = () => {
        if (this.state.selected >= this.props.slideImgs.length - 1)
            return this.setState({ selected: this.props.slideImgs.length - 1 })
        return this.setState(prevState => ({ selected: prevState.selected + 1 }))
    }

    displaySlide = () => {
        if(this.props.slideImgs.length === 1){
            return ''
        }
        return (
                <div className='swift'>
                    <div className='swift-left' onClick={this.onClickLeft}>❮</div>
                    <div className='swift-right' onClick={this.onClickRight}>❯</div>
                </div>
        )

    }
    render() {

        console.log(this.state.selected)
        return (
            <PSlideStyles>
                {this.displaySlide()}
                <img src={this.props.slideImgs[this.state.selected]} alt=''></img>
            </PSlideStyles>
        )
    }
}

export default CSlide;