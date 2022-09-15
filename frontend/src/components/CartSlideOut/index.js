import "./index.css"
import cartListing from "../CartItem"
import CartListing from "../CartItem";
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
        dispatch(fetchProducts())
    }, [cartItems.length])

    useEffect( () => {
        dispatch(fetchCartItems())
        dispatch(fetchProducts())
    }, [user])
    
    const mapCartItems = () => {
        if (cartItems.length === 0){
            return "Your Cart is Empty!"
        }else{
            return cartItems.map(cartItem => (
                <CartListing key={cartItem.id} cartItem={cartItem} setSubamount={setSubamount}/>
            ))
        }
    }

    const subtotal = () => {
        return cartItems.reduce((acc,ele) => acc + (ele.quantity * ele.price), 0)
    }

    const deleteCart = () => {
        return cartItems.map(cartItem => (
            dispatch(deleteCartItem(cartItem))
        ))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setShowCart(false)
        history.push("/login")
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        deleteCart();
        setShowCart(false)
        if (cartItems.length > 0){
            window.alert(
                "Successfully Purchased! \nThank you for shopping GymWhale :)"
                // "Purchased the following: \n" + 
                // `${cartItems.map(cartItem => `${cartItem.count} of ${cartItem.name}`).join('\n')}`
            )
        }else{
            window.alert("Add Items to Cart in order to buy!")
        }
        
    }

    return (
        <>
            <div id="cart-modal-background" onClick={()=>setShowCart(false)}></div>
            <div className="cart-index">
                <div className="cart-items">
                    <div className="cart-header">
                        <h1 id="cart-title">Cart Items</h1>
                        <form id="checkout-button-top"onSubmit={handleCheckout}>
                            <button id="checkout-button" type="submit">Purchase Items</button>
                        </form>
                        <hr/>
                    </div>
                    {user ? 
                    <div id="cart-listings" >{mapCartItems()}</div> :
                    <>
                        <button id="cart-login" onClick={handleLogin}>Login to add items to cart</button>
                    </>}
                </div>
            </div>
            
        </>
    )
}

export default CartSlideOut