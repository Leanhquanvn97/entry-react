import * as actionTypes from '../actionTypes'
 



export const toggleProduct = () =>{
    return{
        type: actionTypes.TOGGLE_PRODUCT
    }
}
export const changeCategory = (category) =>{
    return{
        payload: category,
        type: actionTypes.CHANGE_CATEGORY
    }
}