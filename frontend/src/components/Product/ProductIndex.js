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
            <ul>
                
                {products.map(product=>(
                   <ProductIndexItem product={product} key={product.id}></ProductIndexItem>
                ))}
            </ul>
        </>
    )
}
export default ProductIndex
