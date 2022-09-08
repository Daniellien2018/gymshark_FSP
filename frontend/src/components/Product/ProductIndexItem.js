import React from "react";
import {Link} from "react-router-dom"
import "./ProductIndexItem.css"

const ProductIndexItem = ({product}) => {

    const photo = product.photoUrl

    return (
        <>
        <div className="article">
            <Link to={`/products/${product.id}`}>
                <img className="product-photo" src={photo}></img>
            </Link>
            <div className="article-text">
                {/* <span>{product.name}</span>
                <span>{product.price}</span> */}
                <p id="article-name">{product.name}</p>
                <p id="article-price">${product.price}.00 USD</p>
            </div>
            <span id="article-category">{product.category}</span>
        </div> 
        </>
    )
}

export default ProductIndexItem