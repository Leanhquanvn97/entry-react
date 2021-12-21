import * as actionTypes from '../actionTypes'

const initialState = {
    isLoading: true,
    productToggle: false
}


export const fetchData = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.TOGGLE_PRODUCT:
            return {
                ...state,
                productToggle: !state.productToggle
            }
        default:
            return state;
    }
}