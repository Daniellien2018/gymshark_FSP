import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsReducer, { fetchProduct, getProduct } from "../../store/products";
import "./ProductShow.css"
import ReviewIndex from "../ReviewIndex"
import { createCartItem, getCartItem, updateCartItem } from "../../store/cart";

const ProductShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));
    const item = useSelector(getCartItem(productId))
    const user = useSelector(state => state.session.user)
    const [count, setCount] = useState(1)
    const history = useHistory();
    const [showCart, setShowCart] = useState(false)

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [productId])

    if (!product){
        return null
    }
  
    const handleAddCart = () => {
        if (!user){
            history.pushState("/login")
        } 
        
        const userId = user.id
        if (!item) {
            const newItem = {
                cartItem: {
                    quantity: count,
                    productId: productId,
                    userId: userId
                }
            }
            return dispatch(createCartItem(newItem))
        }
        else if (item){
            const updateItem = {
                cartItem: {
                    quantity: item.quantity + count,
                    productId: productId,
                    userId: userId
                }
            }
            return dispatch(updateCartItem(updateItem))
        }
        
    }
    
    const displayAdded = (e) => {
        e.preventDefault()
        let ele = document.getElementById('added-to-cart');
        ele.style.display = 'block'
        setShowCart(true)
        handleAddCart()
    }


    return(
        <>
        <div className="main-div">
            <h3 id="route">Home/All Products/{product.category}/{product.name}</h3>
            <div className="product-div">
                <div className="product-image-box">
                    <img id="product-image" src={product.photoUrl}/>
                </div>
                <div className="product-details">
                    <div className="product-text"> 
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        {/* <span class="fa-solid fa-star-half"></span> */}
                        <div id="name-price">
                            <p>{product.name}</p>
                            <p>${product.price}.00 USD</p>
                        </div>
                    </div>
                    <div id="product-cat">
                        <p>Gymshark {product.category}</p>
                    </div>
                    <div id="product-desc">
                        <p>Description: {product.description}</p>
                    </div>
                    <div className="product-info">
                        <ul>
                            <i id="product-info-logo" class="fa-solid fa-rotate-left"></i> Free Returns On All Orders
                        </ul>
                        <ul>
                            <i id="product-info-logo" class="fa-solid fa-box-open"></i> Free Standard Delivery over $75
                        </ul> 
                        <ul>
                            <i id="product-info-logo" class="fa-solid fa-truck-fast"></i> Free Express over $150
                        </ul>
                    </div>
                    <div id="add-to-cart-button">
                        <button id="add-to-cart" type="submit" onClick={displayAdded}>ADD TO BAG</button>
                    </div>
                    <div id="added-to-cart-box">
                        <p id="added-to-cart">Added to Cart!</p>
                    </div>
                </div>
            </div>
            <div className="review-div"><ReviewIndex product={product}/>
            </div>
        </div>
        </>
    )
}

export default ProductShow