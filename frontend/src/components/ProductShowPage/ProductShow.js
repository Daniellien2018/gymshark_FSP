import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsReducer, { fetchProduct, getProduct } from "../../store/products";
import "./ProductShow.css"
import ReviewIndex from "../ReviewIndex"
import { createCartItem, fetchCartItems, getCartItem, getCartItems, updateCartItem } from "../../store/cart";
import CartSlideOut from "../CartSlideOut";

const ProductShow = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const product = useSelector(getProduct(productId));
    const item = useSelector(getCartItem(productId))
    const [count, setCount] = useState(1)
    const history = useHistory();
    
    //The problem is that "item" is being returned by 'getCartItem(productId)' as undefined --> CartReducer bug
    
    const [showCart, setShowCart] = useState(false);
    
    useEffect(()=>{
        dispatch(fetchProduct(productId))
        dispatch(fetchCartItems())

    }, [productId])

    useEffect(() => {
        dispatch(getCartItem(productId))
    },[item])
    
    if (!product){
        return null
    }

    const handleInput = () => {
        let input = parseInt(document.getElementById("show-input").value);
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }
    
    const {name, photoUrl, price, desc} = product;

    const handleAddCart = (e) => {
        e.preventDefault();
        const userId = user.id;

        if (!item) {
            const newItem = {
                cartItem: {
                    quantity: count,
                    productId: Number(productId),
                    userId: userId
                }
            }
            return dispatch(createCartItem(newItem))
        } else if (item) {
            const updateItem = {
                cartItem: {
                    id: item.id,
                    quantity: item.quantity + count,
                    productId: Number(productId),
                    userId: userId
                }
            }
            return dispatch(updateCartItem(updateItem))
        }
    }



    return(
        
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
                    <div id="show-quantity-container">
                        <label htmlFor="show-quantity-container" id="show-label">Select Quantity</label>
                        <div className="show-quantity">
                            <button onClick={() => ((parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1))}>-</button>
                            <input type="text" id="show-input" value={count} onChange={handleInput}></input>
                            <button onClick={() => setCount(parseInt(count) + 1)}>+</button>
                        </div>
                    </div>
                    <div id="add-to-cart-button" onClick={()=>setShowCart(true)}>
                        <button id="add-to-cart" type="submit" onClick={handleAddCart}>ADD TO BAG</button>
                    </div>
                    
                </div>
            </div>
            <div className="review-div"><ReviewIndex product={product}/></div>
            {showCart && <CartSlideOut setShowCart={setShowCart}/>}
        </div>
        
    )
}

export default ProductShow