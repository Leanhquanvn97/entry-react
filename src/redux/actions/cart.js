import * as actionTypes from '../actionTypes'

export const addProduct = (data) =>{
    return{
        type: actionTypes.ADD_PRODUCT,
        payload: data    
    }
}

export const removeProduct = (data) =>{
    return{
        type: actionTypes.REMOVE_PRODUCT,
        payload: data
    }
}
export const cartToggle = () =>{
    return {
        type: actionTypes.CART_TOGGLE
    }
}

export const changeCurrency = (currency, symbol) =>{
    return {
        type: actionTypes.CHANGE_CURRENCY,
        payload: currency,
        symbol: symbol
    }
}

export const changeRates = (rates) =>{
    return{
        type: actionTypes.CHANGE_RATES,
        payload: rates

    }
}