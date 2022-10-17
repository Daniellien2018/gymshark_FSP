import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsReducer, { fetchProduct, getProduct } from "../../store/products";
import "./ProductShow.css"
import ReviewIndex from "../ReviewIndex"
import { createCartItem, getCartItem, getCartItems, updateCartItem } from "../../store/cart";
import CartSlideOut from "../CartSlideOut";

const ProductShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    // console.log(productId)
    const product = useSelector(getProduct(productId));
    // console.log(product)
    const item = useSelector(getCartItem(productId))
    // console.log(item)
    const itemsInCart = useSelector(getCartItems)
    const user = useSelector(state => state.session.user)
    const [count, setCount] = useState(1)
    const history = useHistory();
    
    const [showCart, setShowCart] = useState(false);
    
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
        console.log(product)
        console.log(itemsInCart)
        console.log(product.id)
        // console.log(itemsInCart[0].produ ctId)
        let i = 0;
        if (itemsInCart.length === 0){
            const newItem = {
                cartItem: {
                    quantity: count,
                    productId: productId,
                    userId: userId
                }
            }
            return dispatch(createCartItem(newItem))
        }else{
            const updatedItem = {
                // quantity
            }
            // let ele = document.getElementById('added-to-cart');
            // ele.style.display = 'block'
        }
        // while (i < itemsInCart.length) {
        //     if (product.id === itemsInCart[i].productId){
        //         console.log("item is alreayd in cart")
        //     }else{
        //         console.log("hello i am here")
        //         const newItem = {
        //             cartItem: {
        //                 quantity: count,
        //                 productId: productId,
        //                 userId: userId
        //             }
        //         }
        //         return dispatch(createCartItem(newItem))
        //     }
        // }

        // let repeatItem = false
        // console.log(item, "hello")
        // if (!repeatItem) {
        //     const newItem = {
        //         cartItem: {
        //             quantity: count,
        //             productId: productId,
        //             userId: userId
        //         }
        //     }
        //     return dispatch(createCartItem(newItem))
        // }
        // else if (repeatItem){
        //     // console.log("i am from update")
        //     const updateItem = {
        //         cartItem: {
        //             quantity: item.quantity + count,
        //             productId: productId,
        //             userId: userId
        //         }
        //     }
        //     return dispatch(updateCartItem(updateItem))
        
    }
    
    const displayAdded = (e) => {
        e.preventDefault();
        // setShowCart(true)
        // console.log("why no show up")
        // document.getElementById("add-to-cart").addEventListener("click", setShowCart(true));

        handleAddCart()
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
                    <div id="add-to-cart-button" onClick={()=>setShowCart(true)}>
                        <button id="add-to-cart" type="submit" onClick={displayAdded}>ADD TO BAG</button>
                    </div>
                    {/* <div id="added-to-cart-box">
                        <p id="added-to-cart">Item is Already In Cart!</p>
                    </div> */}
                </div>
            </div>
            <div className="review-div"><ReviewIndex product={product}/></div>
            {showCart && <CartSlideOut setShowCart={setShowCart}/>}
        </div>
        
    )
}

export default ProductShow