import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchProducts, getProducts } from "../../store/products"
import ProductIndexItem from "./ProductIndexItem"
import "./ProductIndex.css"

const ProductIndex = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])

    return(
        <>
        <div>
            <div id="top">
                <h1 id="title">All Products</h1>
            </div>
            <div id="bot">
                <ul id="products">
                    {products.map(product=>(
                        <ProductIndexItem product={product} key={product.id}></ProductIndexItem>
                    ))}
                </ul>    
            </div>
        </div>
        
        </>
    )
}
export default ProductIndex
