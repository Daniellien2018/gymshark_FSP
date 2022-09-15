// import "./index.css"
// import cartListing from "../CartItem"
// import CartListing from "../CartItem";
// import { fetchCartItems } from "../../store/cart";
// import { getCartItems } from "../../store/cart";
// import { deleteCartItem } from "../../store/cart";
// import { fetchProducts } from "../../store/products";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { Redirect, useHistory } from "react-router-dom";

// const CartIndex = () => {
//     const cartItems = useSelector(getCartItems);
//     const user = useSelector(state => state.session.user)
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [subamount, setSubamount] = useState(0)

//     useEffect( () => {
//         dispatch(fetchCartItems())
//         dispatch(fetchProducts())
//     }, [cartItems.length])

//     useEffect( () => {
//         dispatch(fetchCartItems())
//         dispatch(fetchProducts())
//     }, [user])
    
//     const mapCartItems = () => {
//         if (cartItems.length === 0){
//             return "Your Cart is Empty!"
//         }else{
//             return cartItems.map(cartItem => (
//                 <CartListing key={cartItem.id} cartItem={cartItem} setSubamount={setSubamount}/>
//             ))
//         }
//     }

//     const subtotal = () => {
//         return cartItems.reduce((acc,ele) => acc + (ele.quantity * ele.price), 0)
//     }

//     const deleteCart = () => {
//         return cartItems.map(cartItem => (
//             dispatch(deleteCartItem(cartItem))
//         ))
//     }

//     const closeSidebar= () => {
//         let modal = document.getElementById("cart-index")
//         let modalBackground = document.getElementById("cart-modal-background")
//         modal.style.display = "none"
//         modalBackground.style.display = "none"
//     }

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // closeSidebar();
//         history.push("/login")
//     }

//     const handleCheckout = (e) => {
//         e.preventDefault();
//         deleteCart();
//         // closeSidebar();
//         window.alert(
//             "Purchased the following: \n" + 
//             `${cartItems.map(cartItem => `${cartItem.count} of ${cartItem.name}`).join('\n')}`
//         )
//     }

//     return (
//         <>
//             {/* <div id="cart-modal-background" className="background-modal"></div> */}
//             <div className="cart-index">
//                 <div id="close-cart" onClick={closeSidebar}>Close</div>
//                 <h1 id="cart-header">Cart Items</h1>
//                 {user ? 
//                 <div id="cart-listings" >{mapCartItems()}</div> :
//                 <>
//                     <button id="cart-login" onClick={handleLogin}>Login to add items to cart</button>
//                 </>}
//             </div>
//             <hr/>
//             <form id="checkout-button" onSubmit={handleCheckout}>
//                 <button type="submit">Purchase Items</button>
//             </form>
//         </>
//     )
// }

// export default CartIndex