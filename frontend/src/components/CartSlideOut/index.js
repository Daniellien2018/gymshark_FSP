import "./index.css"

import CartItem from "../CartItem";
import { fetchCartItems } from "../../store/cart";
import { getCartItems } from "../../store/cart";
import { deleteCartItem } from "../../store/cart";
import { fetchProducts } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const CartSlideOut = ({setShowCart}) => {
    const cartItems = useSelector(getCartItems);
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const [subamount, setSubamount] = useState(0)

    useEffect( () => {
        dispatch(fetchCartItems())
    }, [cartItems.length])
    
    const mapCartItems = () => {
        if (cartItems.length === 0){
            return ""
        }else{
            return cartItems.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} setSubamount={setSubamount}/>
            ))
        }
    }

    const subtotal = () => {
        return cartItems.reduce((acc,ele) => acc + (ele.quantity * ele.price), 0)
    }

    const deleteCart = () => {
        return cartItems.map(cartItem => (
            dispatch(deleteCartItem(cartItem.id))
        ))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setShowCart(false)
        history.push("/login")
    }

    const openCheckout = (e) => {
        let ele = document.getElementById('checkout-popup');
        ele.style.display = 'block'
        deleteCart()
    }

    const closeCheckout = (e) => {
        e.preventDefault()
        document.getElementById("checkout-popup").style.display ="none"
        // deleteCart()
        setShowCart(false)
    }

    return (
        <>
            <div id="cart-modal-background" onClick={closeCheckout}></div>
            <div className="cart-index">
                <div className="cart-items">
                    <div className="cart-header">
                        {cartItems.length > 0 ?
                            <div>
                                <h1 id="cart-title">Cart Items</h1>
                                    <button id="checkout-button" onClick={openCheckout}>Purchase Items</button>
                                <hr/> 
                            </div>
                            :
                            <p id="cart-title">Your Cart is Empty!</p>
                        }
                    </div>

                    {user ? 
                    <div id="cart-listings" >{mapCartItems()}</div> :
                    <>
                        <button id="cart-login" onClick={handleLogin}>Login to add items to cart</button>
                    </>}
                </div>
                <div id="checkout-popup">
                        <div id="checkout-text-box">
                            <p className="checkout-text">Thank you for shopping GymWhale
                                <div id="close-checkout-popup" onClick={closeCheckout}>
                                    <i class="fa-light fa-x"></i>
                                </div>
                            </p>
                            <p className="checkout-text">
                                All products are real and can be purchased at www.gymshark.com</p>
                            <p className="checkout-text">Connect with me down below!</p>
                        </div>
                </div>
            </div>
            
        </>
    )
}

export default CartSlideOut