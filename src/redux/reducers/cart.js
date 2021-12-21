import * as actionTypes from '../actionTypes'

const initialState = {
    cart: [],
    totalPriceUSD: 0,
    totalPrice: 0,
    currency: 0,
    currencySymbol: '$',
    rates: []

}

const changeRates = (state, action) =>{
    return{
        ...state,
        rates: action.payload
    }
}
const changeCur = (state, action) => {
    return {
        ...state,
        currency: action.payload,
        currencySymbol: action.symbol,
        totalPrice: state.totalPriceUSD * state.rates[action.payload]
    }
}

const addToCart = (state, action) => {
    let newProduct = action.payload
    let found = state.cart.find(el => el.id === newProduct.id && JSON.stringify(el.attributes) === JSON.stringify(newProduct.attributes))
    if (!found) {
        newProduct = {
            ...action.payload,
            quantity: 1
        };
        return {
            ...state,
            cart: state.cart.concat(newProduct),
            totalPriceUSD: newProduct.prices[0].amount + state.totalPriceUSD,
            totalPrice: (newProduct.prices[0].amount + state.totalPriceUSD) * state.rates[state.currency]
        }
    } else {
        return {
            ...state,
            totalPriceUSD: newProduct.prices[0].amount + state.totalPriceUSD,
            totalPrice: (newProduct.prices[0].amount + state.totalPriceUSD) * state.rates[state.currency],
            cart: state.cart.map(el => {
                if (el.id === newProduct.id && JSON.stringify(el.attributes) === JSON.stringify(newProduct.attributes)) {
                    if (isNaN(el.quantity)) {
                        return {
                            ...el,
                            quantity: 1
                        }
                    } else {
                        return {
                            ...el,
                            quantity: el.quantity + 1,
                        }
                    }
                }
                return el;
            })
        }
    }
}

const removeFromCart = (state, action) => {
    let oldProduct = action.payload;
    let found = state.cart.map((el, index) => {
        if (el.id === oldProduct.id && JSON.stringify(el.attributes) === JSON.stringify(oldProduct.attributes))
            return index
        else
            return false
    }).reduce((pv, cv) => pv + cv, 0);
    if (found > -1) {
        if (state.cart[found].quantity > 1) {
            return {
                ...state,
                totalPriceUSD: state.totalPriceUSD - oldProduct.prices[0].amount,
                totalPrice: (state.totalPriceUSD - oldProduct.prices[0].amount) * state.rates[state.currency],
                cart: state.cart.map(el => {
                    if (el.id === oldProduct.id && JSON.stringify(el.attributes) === JSON.stringify(oldProduct.attributes)) {
                        return {
                            ...el,
                            quantity: el.quantity - 1,
                        }
                    }
                    return el;
                })
            }
        }
        else {
            return {
                ...state,
                totalPriceUSD: state.totalPriceUSD - oldProduct.prices[0].amount,
                totalPrice: (state.totalPriceUSD - oldProduct.prices[0].amount) * state.rates[state.currency],
                cart: state.cart.filter((el, index) => found !== index)
            }
        }
    }
}
export const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return addToCart(state, action);
        case actionTypes.REMOVE_PRODUCT:
            return removeFromCart(state, action);
        case actionTypes.CART_TOGGLE:
            return { ...state, hover: !state.hover }
        case actionTypes.CHANGE_CURRENCY:
            return changeCur(state, action)
        case actionTypes.CHANGE_RATES:
            return changeRates(state, action)
        default:
            return state;
    }
}