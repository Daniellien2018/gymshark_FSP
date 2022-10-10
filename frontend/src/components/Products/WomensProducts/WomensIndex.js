import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from "../../../store/products";
import ProductIndexItem from "../../ProductIndexPage/ProductIndexItem";


const WomensIndex = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch();

    let womensProducts = [];
    products.map(product => {
        if (product.category === "Womens"){
            womensProducts.push(product)
        }
    })

    useEffect( () => {
        dispatch(fetchProducts())
    }, [dispatch])

    return(
        <>
        <div id="top">
            <h1 id="title">Women's Products</h1>
        </div>
        <div id="bot">
            <ul id="products">
                {womensProducts.map(product => (
                    <ProductIndexItem product={product} key={product.id}/>
                ))}
            </ul>
        </div>
        </>
    )
}

export default WomensIndex;