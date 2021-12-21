import React, { Component } from 'react'
import { CSlideStyles } from './styles'
class PSlide extends Component {
    state = {
        seleted: 0
    }
    onClickImg = (index) => {
        this.setState({ seleted: index })
    }
    onFocusImg = (index) => {
        if (this.state.seleted === index) {
            return 'active'
        }
    }
    displayPSlide = () => {
        return this.props.slideImage.map((el, index) => {
            return (
                <div key={index} >
                    <img onClick={() => this.onClickImg(index)}
                        className={this.onFocusImg(index)}
                        src={el}
                        alt=''>
                    </img>
                </div>
            )
        })
    }
    render() {
        return (
            <CSlideStyles>
                <div className='p-slide'>
                    {this.displayPSlide()}
                </div>
                <img alt='' src={this.props.slideImage[this.state.seleted]}></img>
            </CSlideStyles>

        )
    }
}

export default PSlide;