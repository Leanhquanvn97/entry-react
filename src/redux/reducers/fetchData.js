import * as actionTypes from '../actionTypes'

const initialState = {
    productToggle: false,
    category: 'All'
}


export const fetchData = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.TOGGLE_PRODUCT:
            return {
                ...state,
                productToggle: !state.productToggle
            }
        
        default:
            return state;
    }
}