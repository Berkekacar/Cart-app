import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return{
        type:actionTypes.CHANGE_CATEGORY,
        payload:category
    }
}
export function deleteCategory(category){
    return{
        type:actionTypes.DELETE_CATEGORY,
        payload:category
    }
}

export function getCategoriesSucces(categories){
    return{type:actionTypes.GET_CATEGORİES_SUCCES,payload:categories}
}

export function getCategories(){
    return function(dispatch){
        let url="http://localhost:3000/categories"
        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getCategoriesSucces(result)))
    }}


