import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

const addToCartReducer = (state = initialState.cart, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const existingItem = state.find(item => item.id === action.payload.id)

            if (existingItem) {
                return state.map(item =>
                    item.id === existingItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item)
            }
            return [...state, { ...action.payload, quantity: 1 }]
        case actionTypes.DELETE_CART:
            const newState = state.filter(item =>
                item.id !== action.payload.id)
            console.log(newState)
            return newState
        default:
            return state
    }
}
export default addToCartReducer