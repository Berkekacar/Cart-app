import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

const getProductReducer=(state=initialState.products,action)=>{
    switch (action.type) {
        case actionTypes.GET_PRODUCT:
            return action.payload
        default:
            return state
    }
}

export default getProductReducer