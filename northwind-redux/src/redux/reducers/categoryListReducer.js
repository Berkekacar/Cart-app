import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

const categoryListReducer=(state=initialState.categories,action)=>{
    switch (action.type) {
        case actionTypes.GET_CATEGORİES_SUCCES:
            return action.payload
        default:
            return state
    }
}

export default categoryListReducer