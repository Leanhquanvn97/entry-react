import * as actionTypes from '../actionTypes'
 
export const fetchDataSuccess = () =>{
    return{
        type: actionTypes.FETCH_DATA_SUCCESS
    }
}

export const fetchDataFail = () => {
    return{
        type: actionTypes.FETCH_DATA_FAIL
    }
}

export const toggleProduct = () =>{
    return{
        type: actionTypes.TOGGLE_PRODUCT
    }
}