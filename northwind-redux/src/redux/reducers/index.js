import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer";
import getProductReducer from "./getProductReducer";
import addToCartReducer from "./addToCartReducer";
import saveProductReducer from "./saveProductReducer";


const rootReducer=combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    getProductReducer,
    addToCartReducer,
    saveProductReducer
})

export default rootReducer