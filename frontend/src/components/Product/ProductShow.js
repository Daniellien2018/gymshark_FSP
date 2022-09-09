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
        <div className="main-div">
            <p id="route">Home/All Products/{product.category}/{product.name}</p>
            <div className="product-div">
                <div className="product-image">
                </div>
                <div className="product-details">
                    <div className="product-text">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                    <div id="product-cat">
                        <p>{product.category}</p>
                    </div>
                    <div id="product-desc">
                        <p>{product.description}</p>
                    </div>
                    <div className="product-info">
                        <p>I am info</p>
                        <p>I am also info</p> 
                    </div>
                </div>
            </div>
            <div className="review-div">
            </div>
        </div>
        </>
    )
}

export default ProductShow