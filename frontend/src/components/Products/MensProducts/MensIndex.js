import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, getProducts } from "../../../store/products"
import ProductIndexItem from "../../ProductIndexPage/ProductIndexItem";

const MensIndex = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch();

    let mensProducts = [];
    products.map(product => {
        if (product.category === "Mens"){
            mensProducts.push(product)
        }
    })

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    

    return(
        <>
        <div id="top">
            <h1 id="title">Men's Products</h1>
        </div>
        <div id="bot">
            <ul id="products">
                {mensProducts.map(product => (
                    <ProductIndexItem product={product} key={product.id} ></ProductIndexItem>
                ))}
            </ul>
        </div>
        </>
    )
}

export default MensIndex;