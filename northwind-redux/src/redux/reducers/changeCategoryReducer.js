import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

const changeCategoryReducer=(state = initialState.currenCategory, action)=>{
    let newState={}
    
    switch (action.type) {
        
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        case actionTypes.DELETE_CATEGORY:
            return newState
        default:
            return state;
    }
}
export default changeCategoryReducer