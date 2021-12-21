import { graphql } from '@apollo/client/react/hoc';
import React, { Component } from 'react'
import {getCategories} from '../../queries/queries'
import {DCate} from './styles'
class Filter extends Component {
    displayCategory = () => {
        if(this.props.data.loading){
            return <>Is Loading ...</>
        }else{
            return this.props.data.categories.map((el)=>{
                return <li key={el.name} onClick={()=>this.props.disCategories(el.name)}>{el.name}</li>
            })
        }
        
    }
    onClickHandler = () =>{

    }
    render() {
        return (
            <DCate >
                <li onClick={()=>this.props.disCategories('')}></li>
                {this.displayCategory()}
            </DCate>
        )
    }
}

export default graphql(getCategories)(Filter);