import React from "react";
import {Link} from "react-router-dom"

const ProductIndexItem = ({product}) => {

    const photo = product.photoUrl

    return (
        <>
            <Link to={`/products/${product.id}`}>
                <img className="product-photo" src={photo}></img>
            </Link>
        </>
    )
}

export default ProductIndexItem