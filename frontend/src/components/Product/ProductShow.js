import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, getProduct } from "../../store/products";
import "./ProductShow.css"

const ProductShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [])//productId
    
    

    return(
        <>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <span>{product.description}</span>
        </>
    )
}

export default ProductShow