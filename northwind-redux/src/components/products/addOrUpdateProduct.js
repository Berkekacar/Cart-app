import React,{useEffect,useState} from "react";
//useEfect componentDidMount yerine, setState yerine useState yerine kullanılır
import { connect } from "react-redux";

function AddOrUpdateProduct({
    products,
    categories,
    getProduct,
    getCategories,
    saveProduct,
    ...props
}){
    //product stateini setProduct fonksiyonu ile set edebilirim
    const [product,setProduct]=useState({...props.product})
    useEffect(()=>{
        if(categories.length===0){
            getCategories()
        }
        setProduct({...props.product})
    })
    function handleChange(event){
        const {name,value}=event.target
        setProduct(previousProduct=>({
            ...previousProduct,[name]:name==="categoryId"?parseInt(value,10):value
    }))
    }
}
