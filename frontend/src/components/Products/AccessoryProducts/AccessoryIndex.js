import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from "../../../store/products";
import ProductIndexItem from "../../ProductIndexPage/ProductIndexItem";

const AccessoryIndex = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch();

    let accessoryProducts = [];
    products.map(product => {
        if (product.category === "Accessories"){
            accessoryProducts.push(product)
        }
    })

    useEffect( () => {
        dispatch(fetchProducts())
    }, [dispatch])

    return(
        <>
        <div id="top">
            <h1 id="title">Accessories</h1>
        </div>
        <div id="bot">
            <ul id="products">
                {accessoryProducts.map(product => (
                    <ProductIndexItem product={product} key={product.id}/>
                ))}
            </ul>
        </div>
        </>
    )
}
export default AccessoryIndex