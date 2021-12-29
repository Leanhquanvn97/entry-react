import { graphql } from '@apollo/client/react/hoc';
import React, { Component } from 'react'
import { getCategories } from '../../queries/queries'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
class Filter extends Component {
    
    displayCategory = () => {
        if (this.props.data.loading) {
            return <>Is Loading ...</>
        } else {

            return this.props.data.categories.map((el) => {
                return <li key={el.name}
                className={this.props.pathName === el.name ? 'clicked' : ''}>
                    <Link to={`/${el.name}`}
                        style={{ textTransform: 'uppercase' }}
                        
                    >{el.name}</Link>
                </li>
            })
        }

    }

    render() {
        return (
            <>
                {this.displayCategory()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps)(graphql(getCategories)(Filter));